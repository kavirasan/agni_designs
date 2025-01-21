import React from "react";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Contact from "../components/Contact";
import AgniDesignSEO from "../SEO/AgniDesignSEO";
import SchemaMarkup from "../SEO/SchemaMarkup";
import { Helmet } from "react-helmet";

const HomePage = () => {
  // const schemaData = {
  //   "@context": "https://schema.org",
  //   "@type": "LocalBusiness",
  //   name: "Agni Design Consultants",
  //   url: "https://agnidesign.netlify.app/",
  //   description:
  //     "Agni Design Consultants specialize in MEP technical due diligence and professional engineering solutions.",
  //   telephone: "+91 9876543210",
  //   address: {
  //     "@type": "PostalAddress",
  //     streetAddress: "123 Business Park",
  //     addressLocality: "City Name",
  //     addressRegion: "State Name",
  //     postalCode: "123456",
  //     addressCountry: "IN",
  //   },
  //   contactPoint: {
  //     "@type": "ContactPoint",
  //     telephone: "+91 9876543210",
  //     contactType: "customer service",
  //   },
  //   services: [
  //     {
  //       "@type": "Service",
  //       name: "MEP Technical Due Diligence",
  //       description: "Comprehensive analysis of MEP systems for your project.",
  //     },
  //     {
  //       "@type": "Service",
  //       name: "Project Management",
  //       description: "Professional project management for engineering solutions.",
  //     },
  //   ],
  // };

  return (
    <div>
      <AgniDesignSEO
        title="Agni Design Consultants | MEP Technical Due Diligence"
        description="Agni Design Consultants provide professional MEP technical due diligence and related services. Visit us for innovative solutions."
        keywords="MEP technical due diligence, Agni Design Consultants, professional services, engineering solutions"
        canonical="https://agnidesign.netlify.app/"
      />
      {/* <SchemaMarkup data={schemaData} /> */}
     
      {/* Uncomment to enable loading animation */}
      {/* <LoadingAnimation /> */}
      <Hero />
      <About />
      <Features />
      <Story />
      {/* <Contact /> */}
    </div>
  );
};

export default HomePage;
