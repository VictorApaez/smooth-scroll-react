import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Hero from '../components/Hero';
import InfoSection from '../components/infoSection';
import { dataObj, dataObj2 } from '../components/infoSection/data';
import Sidebar from '../components/SideBar';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Hero />
        <InfoSection {...dataObj} />
        <InfoSection {...dataObj2} />
      </Router>
    </>
  );
}

export default Home;
