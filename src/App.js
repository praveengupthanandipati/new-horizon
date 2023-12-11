import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="About" Component={About} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
