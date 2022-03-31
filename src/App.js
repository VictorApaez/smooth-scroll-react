import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/SideBar";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </Router>
    </>
  );
}

export default App;
