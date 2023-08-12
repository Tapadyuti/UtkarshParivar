import Header from "./components/header";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactUs from "./components/contactus";
import Donate from "./components/donate";
import Login from "./components/login";
import GalleryView from "./components/gallery";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-purple-100 h-full">
      <Router>
        <Header />
        <Routes>
            {/* <Route path="blogs" element={<Blogs />} /> */}
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/gallery" element={<GalleryView />} />
            <Route exact path="/donate" element={<Donate />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/UtkarshParivarBuild" element={<Home />}>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
