import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ServicesPage from "./Components/Services/Services";
import AboutOne from "./Components/About/AboutOne";
import AboutTwo from "./Components/About/AboutTwo";
import BlogPage from "./Components/Blog/BlogPage";
import BlogPostPage from "./Components/Blog/BlogPost/BlogPostPage";
import SupportPage from "./Components/Support/Support";
import WatchPage from "./Components/Watch/Watchpage";

function App() {
  return (
    /* Move basename here */
    <Router basename="/Danial-Portfolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about-one" element={<AboutOne />} />
        <Route path="/about-two" element={<AboutTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
