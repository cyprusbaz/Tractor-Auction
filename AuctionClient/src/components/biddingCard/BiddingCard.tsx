import React, { useEffect, useState } from "react";
import styles from "./BiddingCard.module.css";
import type { Item } from "../../types/AuctionItem";
import { CreateBid } from "../../api/Bid/CreateBid";
import type { BidCreation } from "../../types/Bid";
import { GetAllBid } from "../../api/Bid/GetAllBids";
import { CreatePayment } from "../../api/Payment/CreatePayment";
import type { PaymentCreation } from "../../types/Payment";
import { useNavigate } from "react-router-dom";

export const BiddingCard: React.FC<Item> = (props) => {
  const {
    id,
    brand,
    model,
    year,
    mileage,
    color,
    engine,
    description,
    price,
    imageUrl,
  } = props;

  const navigate = useNavigate();

  const [amount, setAmount] = useState<string>(String(price));
  const [highestBid, setHighestBid] = useState<number>(Number(price));
  const [hasWinner, setHasWinner] = useState(false);
  const [winningBid, setWinningBid] = useState<number | null>(null);

  // Load highest bid
  const fetchHighestBid = async () => {
    const bids = await GetAllBid();

    const itemBids = bids.filter((b) => b.auctionItemId === id);

    if (itemBids.length > 0) {
      const maxBid = Math.max(...itemBids.map((b) => b.amount));
      setHighestBid(maxBid);
      setAmount(String(maxBid + 1)); // auto suggest next minimum
    } else {
      setHighestBid(Number(price));
    }
  };

  const checkForWinner = async () => {
    const bids = await GetAllBid();

    const winnerBid = bids.find(
      (bid) => bid.auctionItemId === id && bid.isWinner
    );

    if (winnerBid) {
      setHasWinner(true);
      setWinningBid(winnerBid.amount);
    }
  };

  useEffect(() => {
    fetchHighestBid();
    checkForWinner();
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleBid = async () => {
    const num = Number(amount);

    if (isNaN(num)) {
      alert("Enter a valid number!");
      return;
    }

    if (num <= highestBid) {
      alert(`Bid must be higher than the current highest bid (${highestBid})`);
      return;
    }

    const bid: BidCreation = {
      amount: num,
      bidderId: "34EBED82-73F5-424A-91EF-14B4C2E66740",
      auctionItemId: id,
    };

    await CreateBid(bid);

    // Refresh highest bid after submitting
    fetchHighestBid();
  };

  const handlePayment = async () => {
    const data: PaymentCreation = {
      amount: highestBid,
      auctionItemId: id,
      userId: "34EBED82-73F5-424A-91EF-14B4C2E66740",
    };

    const res = await CreatePayment(data);
    navigate(`/Payment/${res}`);
  };

  return (
    <div className={styles.auctionItem}>
      <h1>
        {brand} {model}
      </h1>
      <h2>Year: {year.toString()}</h2>
      <h2>Mileage: {mileage.toString()}</h2>
      <h2>Color: {color}</h2>
      <h2>Engine: {engine}</h2>
      <p>Description: {description}</p>

      <p>Starting price: {price.toString()}</p>
      <p className={styles.highestBid}>Current highest bid: {highestBid}</p>

      <img
        src={`${import.meta.env.VITE_BASE_URL}${imageUrl}`}
        alt="tractor image"
      />

      <div className={styles.buttons}>
        {hasWinner && winningBid !== null ? (
          <>
            <p>Winning bid: {winningBid}</p>
            <button className={styles.button} onClick={handlePayment}>
              Pay
            </button>
          </>
        ) : (
          <>
            <input
              type="number"
              value={amount}
              min={highestBid + 1}
              onChange={handleAmountChange}
            />
            <button className={styles.button} onClick={handleBid}>
              Bid
            </button>
          </>
        )}
      </div>
    </div>
  );
};
