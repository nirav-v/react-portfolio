import React, { useState } from 'react';
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/PortfolioContainer';
import Contact from './pages/Contact';
import Resume from './pages/Resume'
import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/Main.css'
// Main is the 'smart' component that determines which pages to render


function Main() {
// declare a state variable for the current page
const [currentPage, setCurrentPage] = useState('About Me');

// conditionally render AboutMe, Portfolio, Contact, or Resume component based on switch case for the currentPage state variable
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'About Me':
        return <AboutMe />;
      case 'Resume':
        return <Resume />;
      default:
        return <Portfolio />;
    }
  };

  // have a function that switches the current page state variable based on the page name it is passed
    const switchPage = (page) => setCurrentPage(page);

    return ( 
        <div className='main'>
          
            <NavBar currentPage={currentPage} handlePageChange={switchPage}/>
           {renderPage()}
           <Footer />

        </div>
     );
}






export default Main;