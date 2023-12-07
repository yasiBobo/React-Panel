// COMPONENTS
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";

import "./styles/global.scss";

function App() {

  return (
    <div className="main">
      <Navbar />
    <div className="container">
      <div className="menuContainer">
        <Menu />
      </div>
      <div className="contentContainer">
        <Home />
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default App
