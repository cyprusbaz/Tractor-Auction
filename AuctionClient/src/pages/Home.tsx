import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import heroTracor from "../assets/406784_tractor_icon.png";
import auction from "../assets/auction.png";
import handshake from "../assets/handshake.png";
import tractor from "../assets/tractor.png";
// import type { AuctionItem } from "../types/AuctionItem";

interface Event {
  name: string;
  date: string;
  location: string;
  description: string;
}

export const Home = () => {
  const [events] = useState<Event[]>([
    {
      name: "Vilnius Tractor Expo",
      date: "2025-10-12",
      location: "Vilnius Arena",
      description: "The biggest tractor exhibition in the Baltics.",
    },
    {
      name: "Kaunas Machinery Fair",
      date: "2025-10-18",
      location: "Kaunas Fairgrounds",
      description: "Featuring used and new tractors for all budgets.",
    },
    {
      name: "Panevėžys Used Tractor Market",
      date: "2025-10-25",
      location: "Panevėžys Industrial Park",
      description: "Perfect for finding affordable second-hand tractors.",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    const today = new Date();
    const upcoming = events.find((e) => new Date(e.date) > today);
    if (upcoming) {
      setSelectedEvent(upcoming);
    }
  }, [events]);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };


  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.text}>
            <p className={styles.top}>Get your tractor today</p>
            <p>buying and selling tractor was never this easy</p>
            <button className={styles.hero_button} id="hero_button">
              Find Your Tractor
            </button>
          </div>
          <img
            src={heroTracor}
            alt="tractor"
            height="200px"
            width="auto"
            className={styles.tractorImage}
          />
        </div>
      </div>
      <div className={`${styles["how-it-works"]} py-5 text-light`}>
        <div className={styles.container}>
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="row text-center cards">
            <div className="col-md-4 card_1">
              <img src={tractor} alt="Upload" width="80" className="mb-3" />
              <h5>1. Upload Your Tractor</h5>
              <p>Post your tractor with details and photos in minutes.</p>
            </div>
            <div className="col-md-4 card_1">
              <img src={auction} alt="Bid" width="80" className="mb-3" />
              <h5>2. Start the Bidding</h5>
              <p>Buyers compete by placing bids until the auction ends.</p>
            </div>
            <div className="col-md-4 card_1">
              <img src={handshake} alt="Sell" width="80" className="mb-3" />
              <h5>3. Buy or Sell</h5>
              <p>Seal the deal and get your tractor delivered securely.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.events} bg-dark text-light py-5`}>
        <div className={styles.container}>
          <h2 className="text-center mb-4">Upcoming Tractor Auctions</h2>
          <ul id="eventList" className="list-group">
            {events.map((event) => {
              const today = new Date();
              const isUpcoming = new Date(event.date) > today;
              const highlight =
                isUpcoming && selectedEvent?.name === event.name;

              return (
                <li
                  key={event.name}
                  className={`list-group-item ${highlight ? "highlight" : ""}`}
                  onClick={() => handleEventClick(event)}
                  style={{ cursor: "pointer" }}
                >
                  {event.name} — {event.date}
                </li>
              );
            })}
          </ul>
          {selectedEvent && (
            <div id="eventInfo" className="alert alert-info mt-4" role="alert">
              <strong>{selectedEvent.name}</strong>
              <br />
              📅 Date: {selectedEvent.date}
              <br />
              📍 Location: {selectedEvent.location}
              <br />
              📝 {selectedEvent.description}
            </div>
          )}
          <div
            id="eventInfo"
            className="alert alert-info mt-4 d-none"
            role="alert"
          ></div>
        </div>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.container}>
          <div className="card">
            <div className="card-header">What people have to say:</div>
            <div className="card-body">
              <figure>
                <blockquote className="blockquote">
                  <p>
                    Really I couldn't find tractor that I could buy, so I came
                    here and found the tractor I want and managed to buy it and
                    get in 3 weeks, amazing. My wheats will not go to waste.
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Cool person
                  <cite title="Source Title">from Traktoriškės</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <figure>
                <blockquote className="blockquote">
                  <p>
                    This website is way better than gambling websites. Now I
                    have addiction bidding on tractors.
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Tom <cite title="Source Title">from Antarctica</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <figure>
                <blockquote className="blockquote">
                  <p>This website changed my life. Now I own a tractor.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  John <cite title="Source Title">from Miami</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
