import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import "./themes/themes";

function App() {
  return (      
      <Router>
        <div className="bg-bg text-text font-base min-h-screen transition-colors duration-300">
            <Header />
        <main className="pt-24 px-[10%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        </div>
      </Router>
  );
}

export default App;
