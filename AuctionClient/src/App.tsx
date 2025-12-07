import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { AuctionItems } from "./pages/AuctionItems";
import { UploadItem } from "./pages/UploadItem";
import { Footer } from "./components/footer/Footer";
import { AuctionListings } from "./pages/AuctionListings";
import { CreateListing } from "./pages/CreateListing";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { BiddingPage } from "./pages/BiddingPage";
import { EditItemPage } from "./pages/EditItemPage";
import { EditLisitingPage } from "./pages/EditLisitingPage";
import { EditUserPage } from "./pages/EditUserPage";
import { EditBidPage } from "./pages/EditBidPage";
import { PaymentPage } from "./pages/PaymentPage";
import { EditPaymentPage } from "./pages/EditPaymentPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AuctionItems" element={<AuctionItems />}></Route>
          <Route
            path="/AuctionItems/:listingId"
            element={<AuctionItems />}
          ></Route>
          <Route path="/UploadItem" element={<UploadItem />}></Route>
          <Route path="/UploadItem" element={<UploadItem />}></Route>
          <Route path="/EditItem/:id" element={<EditItemPage />}></Route>
          <Route path="/AuctionListings" element={<AuctionListings />}></Route>
          <Route path="/EditListing/:id" element={<EditLisitingPage />}></Route>
          <Route path="/CreateListing" element={<CreateListing />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/EditUser/:id" element={<EditUserPage />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Bidding" element={<BiddingPage />}></Route>
          <Route path="/EditBid/:id" element={<EditBidPage />}></Route>
          <Route path="/Payment/:id" element={<PaymentPage />}></Route>
          <Route path="/EditPayment/:id" element={<EditPaymentPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
