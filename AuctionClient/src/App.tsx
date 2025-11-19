import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { AuctionItems } from "./pages/AuctionItems";
import { UploadItem } from "./pages/UploadItem";
import { Footer } from "./components/footer/Footer";
import { AuctionListings } from "./pages/AuctionListings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AuctionItems" element={<AuctionItems />}></Route>
          <Route path="/UploadItem" element={<UploadItem />}></Route>
          <Route path="/AuctionListings" element={<AuctionListings />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
