// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import Header from "./component/header";
import Footer from "./component/footer";
import About from "./component/about";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
