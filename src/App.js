import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="About" Component={About} />
          <Route exact path="Products" Component={Products} />
          <Route exact path="Services" Component={Services} />
          <Route exact path="Contact" Component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
