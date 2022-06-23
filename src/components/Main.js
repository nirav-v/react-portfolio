import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/PortfolioContainer";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/Main.css";
import Box from '@mui/material/Box';

// Main is the 'smart' component that determines which pages to render

function Main() {
  // declare a state variable for the current page
  const [currentPage, setCurrentPage] = useState("About Me");

  // conditionally render AboutMe, Portfolio, Contact, or Resume component based on switch case for the currentPage state variable
  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "About Me":
        return <AboutMe />;
      case "Resume":
        return <Resume />;
      default:
        return <Portfolio />;
    }
  };

  // switch the current page state variable based on the page name it is passed
  const switchPage = (page) => setCurrentPage(page);

  return (
   
    <Box className="main"
         sx={{
        // width: 300,
        // height: 100,
        backgroundSize: 'cover',
      }}
    >
      <header>
        <h1>{"Nirav Venkatesan"}</h1>
        <NavBar currentPage={currentPage} handlePageChange={switchPage} />
      </header>
      {renderPage()}
      <Footer />
    </Box>
 
  );
}

export default Main;
