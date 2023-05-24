import Header from "./components/header";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactUs from "./components/contactus";
import Gallery from "./components/gallery";
import Donate from "./components/donate";
import Login from "./components/login";

function App() {
  return (
    <div className="bg-purple-100 h-full">
      <Router>
        <Header />
        <Routes>
            {/* <Route path="blogs" element={<Blogs />} /> */}
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/donate" element={<Donate />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
