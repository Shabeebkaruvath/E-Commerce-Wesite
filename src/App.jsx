import "./App.css";
import Banner from "./componants/Banner/Banner";
import Footer from "./componants/Footer/Footer";
import Navbar from "./componants/Navbar/Navbar";
import About from "./componants/About/About";
import Contact from "./componants/Contact/Contact";
import Shop from "./componants/Shop/Shop";
import Lookbook from "./componants/Lookbook/Lookbook";
import { BrowserRouter as Root, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Root>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/lookbook" element={<Lookbook />}></Route>
        </Routes>
        <Footer />
      </Root>
    </div>
  );
}

export default App;
