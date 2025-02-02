import React from "react";
import ServiceTemplate from "../page_template/ServiceTemplate";
import img from "../../assets/services/mech_mep.jpg"
import pic1 from "../../assets/services/mep/pic1.png" 
import pic2 from "../../assets/services/mep/pic2.png"
import pic3 from "../../assets/services/mep/pic3.png"
import pic5 from "../../assets/services/mep/pic4.png"
import pic4 from "../../assets/services/mep/pic5.png"
import pic6 from "../../assets/services/bim/pic7.png";
import AgniDesignSEO from "../../SEO/AgniDesignSEO";
const Mep = () => {

  const seo = {
    title: "MEP Design Services - Agni Design Consultant",
    description: "Agni Design Consultant provides comprehensive MEP design services, specializing in mechanical, electrical, plumbing, and fire protection systems. We deliver innovative and sustainable solutions.",
    keywords: "MEP, mechanical, electrical, plumbing, fire protection, design, engineering, consulting, sustainability, energy efficiency, HVAC, electrical systems, plumbing systems", // Add more keywords as needed
    canonical: "https://www.yourwebsite.com/mep", // **REPLACE WITH YOUR ACTUAL URL**
    openGraph: {
        title: "MEP Design Services - Agni Design Consultant",
        description: "Agni Design Consultant provides comprehensive MEP design services, specializing in mechanical, electrical, plumbing, and fire protection systems. We deliver innovative and sustainable solutions.",
        url: "https://www.yourwebsite.com/mep", // **REPLACE WITH YOUR ACTUAL URL**
        type: "website",
        // Add an OG image if you have one: image: "https://www.yourwebsite.com/images/mep-og-image.jpg",
    },
};
  const services = [
    {
      title: "MEP Design Services",
      description:
        "Comprehensive MEP design solutions tailored to meet your project requirements with precision and innovation. Our expert team ensures seamless integration of mechanical, electrical, and plumbing systems for optimal building performance.",
      keyFeatures: [
        "Custom-tailored designs to suit project-specific needs",
        "Compliance with international and local standards",
        "Integrated design approach for energy efficiency",
        "Use of advanced tools and software for precise modeling",
        "Sustainability-focused solutions for long-term benefits",
      ],
      image: pic1,
    },
    {
      title: "Mechanical",
      description:
        "Focuses on heating, ventilation, and air conditioning (HVAC) systems to maintain indoor air quality, comfort, and thermal efficiency. Our mechanical designs prioritize energy conservation and system longevity.",
      keyFeatures: [
        "Load calculations for efficient equipment sizing",
        "Ductwork and ventilation design for proper air distribution",
        "Energy-efficient HVAC system selection",
        "Thermal comfort analysis and optimization",
        "Indoor air quality management",
        "Smoke control and extraction system design",
      ],
      image: pic2,
    },
    {
      title: "Electrical",
      description:
        "Ensures a reliable, efficient, and safe supply of electrical power to meet all functional needs of the building while supporting sustainability and innovation.",
      keyFeatures: [
        "Power distribution systems (cables, conduits, and switchgear)",
        "Lighting design for energy efficiency and visual comfort",
        "Emergency power systems (generators and UPS)",
        "Renewable energy systems like solar or wind power integration",
        "Low-voltage systems (fire alarms, data communication, and security)",
        "Electrical load analysis and optimization",
        "Energy metering and monitoring systems",
      ],
      image: pic3,
    },
    {
      title: "Plumbing",
      description:
        "Designs systems to ensure efficient water distribution, wastewater management, and conservation. Our plumbing designs prioritize health, safety, and environmental responsibility.",
      keyFeatures: [
        "Hot and cold water distribution system design",
        "Rainwater harvesting and stormwater management",
        "Sewage and wastewater treatment systems",
        "Gas piping and fuel systems integration",
        "Water conservation strategies and fixtures",
        "Hydraulic calculations for efficient flow rates",
      ],
      image: pic4,
    },
    {
      title: "Fire Protection",
      description:
        "Provides robust fire protection systems to safeguard lives and property while adhering to the highest safety standards.",
      keyFeatures: [
        "Design of sprinkler and hydrant systems",
        "Fire suppression systems (foam, gas, or water mist)",
        "Smoke and heat extraction systems",
        "Fire alarm and detection system integration",
        "Emergency evacuation system planning",
        "Compliance with NFPA and local fire safety codes",
      ],
      image: pic5,
    },
    {
      title: "Sustainability and Energy Efficiency",
      description:
        "Incorporates sustainable practices and energy-efficient solutions to reduce the environmental footprint of buildings.",
      keyFeatures: [
        "Green building design and certification support (LEED, BREEAM)",
        "Energy audits and optimization strategies",
        "Renewable energy integration (solar, wind, geothermal)",
        "Water conservation and recycling systems",
        "Energy-efficient equipment and system recommendations",
      ],
      image: pic6,
    },
  ];

  const services1 = {
    title: "MEP Design Services",
    description:
      "Agni specializes in providing a comprehensive range of Mechanical, Electrical, and Plumbing (MEP) design services tailored to meet the dynamic needs of the construction and building industries. With a focus on precision, innovation, and sustainability, Agni delivers cutting-edge solutions that ensure efficiency, compliance, and long-term value.",
    short: "Discover Agni's Expertise in MEP",
    shortDescription:
      "Learn how Agni is redefining MEP design with expertise and innovative solutions.",
    imgCont1Title: "Innovative MEP Solutions",
    imgCont1Desc:
      "With over 200 successful projects, Agni has established itself as a trusted partner in delivering efficient and sustainable MEP designs.",
    imgCont1: img, // Replace with your image path
    imgCont2Title: "Expert Team and Tools",
    imgCont2Desc:
      "Agni's team of experienced engineers utilizes advanced tools and methodologies to ensure precision and excellence in every project.",
    imgCont2: "/images/mep-team.png", // Replace with your image path
    imgCont3Title: "Sustainable Designs",
    imgCont3Desc:
      "We prioritize environmentally friendly and energy-efficient solutions, ensuring compliance with global standards and promoting sustainability.",
    imgCont3: "/images/mep-sustainability.png", // Replace with your image path
    imgCont4Title: "Client-Centric Approach",
    imgCont4Desc:
      "Our client-focused approach enables us to provide tailor-made solutions, ensuring the successful execution of every project, big or small.",
    imgCont4: "/images/mep-clients.png", // Replace with your image path
  };
  return (
    <>
    <AgniDesignSEO {...seo} />
    <div>
      <ServiceTemplate services={services} services1={services1} />
    </div>
    </>
  );
};

export default Mep;
