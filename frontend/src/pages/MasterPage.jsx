import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/CustomFooter";
import SEO from "../SEO/SEO";
import { Helmet } from "react-helmet";

const MasterPage = ({ RouteName }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <SEO />
      <Helmet>
        <meta
          property="og:title"
          content="Agni Design Consultants | MEP Technical Services"
        />
        <meta
          property="og:description"
          content="Agni Design Consultants provide MEP technical due diligence and innovative engineering solutions."
        />
        <meta
          property="og:image"
          content="https://agnidesign.netlify.app/logo-D-FpNNva.png"
        />
        <meta property="og:url" content="https://agnidesign.netlify.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      {RouteName}
      <CustomFooter />
      
      {/* Move to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-2 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </main>
  );
};

export default MasterPage;
