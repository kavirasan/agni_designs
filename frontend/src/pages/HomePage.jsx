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
  //   telephone: "+91 044-468647710",
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
  //     telephone: "+91 044-468647710",
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
  title="Agni Design Consultants - MEP Technical Due Diligence & Engineering Solutions"
  description="Agni Design Consultants specialize in MEP technical due diligence, sustainable engineering solutions, BIM modeling, and compliance assessments. Trusted by leading industries for precise, efficient, and innovative MEP consulting."
  keywords="MEP due diligence, MEP consultants, engineering solutions, Agni Design, BIM modeling, MEP audits, sustainable engineering, HVAC design, electrical planning, fire safety compliance"
  canonical="https://www.agnidesign.com/"
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
