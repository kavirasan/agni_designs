import React from "react";
import TemplatePage from "./page_template/TemplatePage";

const AboutPage = () => {
  // Define the data object that contains all necessary details

  const data = {
    Cbtitle: "About Us",
    CbDescription:
      "At AGNI, we redefine MEP (Mechanical, Electrical, Plumbing) design by integrating cutting-edge technology and sustainability. Our mission is to deliver high-quality, energy-efficient, and eco-friendly engineering solutions. We collaborate with architects and clients to create designs that are efficient, cost-effective, and environmentally responsible, bridging gaps in the industry and transforming complex ideas into sustainable solutions.",
      
    descriptionTitle: "Our Strengths",
    descriptionPara:
      "With over 20 years of combined experience, AGNI’s strength is in our holistic approach to MEP design. We ensure every project integrates seamlessly with architectural needs while focusing on energy efficiency, sustainability, and long-term savings. Our engineers handle a diverse range of projects, delivering innovative, environmentally-conscious solutions that meet the highest quality standards.",
    
    CardTitle: "Our Projects",
    CardData: [
      {
        id: 1,
        title: "Guide House Commercial Building",
        description:
          "A cutting-edge commercial building with energy-efficient HVAC systems, smart automation, and water-saving plumbing for minimal environmental impact."
      },
      {
        id: 2,
        title: "Hutchinson Industrial Building",
        description:
          "An industrial facility with optimized MEP systems designed for energy efficiency, air filtration, and minimal operational costs."
      },
      {
        id: 3,
        title: "VGP Amusement Park",
        description:
          "An entertainment park featuring sustainable MEP systems, water management, and waste recycling to minimize its environmental footprint."
      },
      {
        id: 4,
        title: "Valeo Commercial Building",
        description:
          "A modern office space with energy-efficient HVAC, lighting, and plumbing systems, as well as solar energy and green roof solutions."
      },
      {
        id: 5,
        title: "MindStudio Commercial Building",
        description:
          "A tech-driven office building with energy-saving MEP systems, including smart lighting, HVAC controls, and water-efficient plumbing."
      },
      {
        id: 6,
        title: "Arymond Industrial",
        description:
          "An industrial building designed for operational efficiency, featuring advanced HVAC systems, energy-efficient lighting, and water-saving plumbing."
      },
      {
        id: 7,
        title: "TFE Commercial Building",
        description:
          "A commercial building with sustainable MEP systems, rainwater harvesting, and energy-saving HVAC and plumbing solutions."
      },
      {
        id: 8,
        title: "Dantech Pharmaceutical",
        description:
          "A pharmaceutical facility with specialized MEP systems ensuring optimal air quality, temperature control, and compliance with industry standards."
      }
    ],
    
    CsTitle: "Our Mission & Vision",
    CsPara:
      "Our mission is to seamlessly integrate MEP design with architecture, ensuring precision and client satisfaction. We are committed to providing innovative, energy-efficient, and sustainable solutions. Our vision is to be the leading MEP consultancy, driving smart building technologies and contributing to the development of sustainable, future-ready cities."
  };
  return (
    <div>
      <TemplatePage
        Cbtitle={data.Cbtitle}
        CbDescription={data.CbDescription}
        descriptionTitle={data.descriptionTitle}
        descriptionPara={data.descriptionPara}
        CardTitle={data.CardTitle}
        CardData={data.CardData}
        CsTitle={data.CsTitle}
        CsPara={data.CsPara}
      />
    </div>
  );
};

export default AboutPage;

// const data = {
//   "Cbtitle": "Get Our Quote",
//   "CbDescription": "This layout will provide a comprehensive, professional, and user-friendly experience for visitors. The content should emphasize your expertise, quality of service, and sustainable design practices, creating a solid impression of AGNI Design Consultants as a leader in MEP design and BIM services.",
//   "descriptionTitle": "Our Services",
//   "descriptionPara": "We provide expert MEP design, BIM services, and project management solutions.",
//   "CardTitle": "Our Expertise",
//   "CardData": [
//     {
//       "id": 1,
//       "title": "BIM Coordination",
//       "description": "Comprehensive BIM coordination services."
//     },
//     {
//       "id": 2,
//       "title": "3D BIM Modeling",
//       "description": "Accurate 3D modeling for better planning."
//     },
//     {
//       "id": 3,
//       "title": "Cost Estimation",
//       "description": "Reliable 5D BIM for precise cost estimation."
//     }
//   ],
//   "CsTitle": "Case Studies",
//   "CsPara": "Explore how we helped our clients achieve success through BIM and MEP design."
// };
