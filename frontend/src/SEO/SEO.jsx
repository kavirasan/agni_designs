import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Agni Designs Consultant",
          "description":
            "At AGNI, we aim to redefine engineering standards in MEP design by integrating technology and sustainability in all our projects.",
          "url": "https://agnidesign.netlify.app",
          "logo": "https://agnidesign.netlify.app/logo.png", // Replace with your logo URL
          "image": "https://agnidesign.netlify.app/banner.jpg", // Replace with a relevant image URL
          "telephone": "+91-1234567890", // Replace with your contact number
          "email": "info@agnidesign.com", // Replace with your email address
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Agni Street",
            "addressLocality": "Chennai",
            "addressRegion": "TN",
            "postalCode": "600001",
            "addressCountry": "India",
          },
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 10:00-14:00"
          ],
          "sameAs": [
            "https://www.facebook.com/agnidesign",
            "https://www.instagram.com/agnidesign",
            "https://www.linkedin.com/company/agnidesign"
          ],
          "offers": [
            {
              "@type": "Offer",
              "name": "MEP Design",
              "description": "Mechanical, Electrical, and Plumbing design services."
            },
            {
              "@type": "Offer",
              "name": "Sustainability Consulting",
              "description": "Helping projects achieve eco-friendly standards."
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
