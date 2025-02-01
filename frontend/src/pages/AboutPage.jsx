import React from "react";
import TemplatePage from "./page_template/TemplatePage";
import team1 from "../assets/new_agni_images/fulllogo.jpg";
import team from "../assets/new_agni_images/mep1.jpg";
import img from "../assets/new_agni_images/office2.jpg"

const AboutPage = () => {
  // Define the data object that contains all necessary details

  const data = {
    Cbtitle: "About Agni Design",
    CbImg:img,
    CbDescription:
      "At AGNI, we redefine MEP (Mechanical, Electrical, Plumbing) design by integrating cutting-edge technology and sustainability. Our mission is to deliver high-quality, energy-efficient, and eco-friendly engineering solutions. We collaborate with architects and clients to create designs that are efficient, cost-effective, and environmentally responsible, bridging gaps in the industry and transforming complex ideas into sustainable solutions.",

    descriptionTitle: "Our Strengths",
    descriptionPara:
      "With over 20 years of combined experience, AGNI’s strength is in our holistic approach to MEP design. We ensure every project integrates seamlessly with architectural needs while focusing on energy efficiency, sustainability, and long-term savings. Our engineers handle a diverse range of projects, delivering innovative, environmentally-conscious solutions that meet the highest quality standards.",

    CardTitle: "Our Prestigious Clients",
    CardData: [
      {
        id: 1,
        title: "TVS Electronics - Office",
        description:
          "We have completed about 7500 sq. ft. in the Bengaluru site.",
        image: team,
      },
      {
        id: 2,
        title: "KPMG - Innovation Centre",
        description:
          "We have completed about 3765 sq. ft. in the Bengaluru site.",
        image: "team",
      },
      {
        id: 3,
        title: "Cloud Kinetics - Office",
        description:
          "We have completed about 6500 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 4,
        title: "Hutchinson - Manufacturing Plant",
        description:
          "We have completed about 30000 sq. ft. in the Oragadam site.",
        image: "team",
      },
      {
        id: 5,
        title: "VGP - Amusement Park",
        description:
          "We have completed about 150000 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 6,
        title: "Valeo - Commercial Building",
        description:
          "We have completed about 100000 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 7,
        title: "MindStudio - Commercial Building",
        description:
          "We have completed about 5000 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 8,
        title: "Arymond - Industrial",
        description:
          "We have completed about 30000 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 9,
        title: "TFE - Commercial Building",
        description:
          "We have completed about 7500 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 10,
        title: "Dantech - Pharma Facility",
        description:
          "We have completed about 12000 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 11,
        title: "Guide House - Commercial Building",
        description:
          "We have completed about 57000 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 12,
        title: "GE - Cafeteria",
        description: "We have completed about 500 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 13,
        title: "Elena - Office",
        description:
          "We have completed about 1063 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 14,
        title: "TM Seating - Office",
        description:
          "We have completed about 5000 sq. ft. in the Chennai site.",
        image: "team",
      },
      {
        id: 15,
        title: "iopex - Office",
        description:
          "We have completed about 10800 sq. ft. in the Indore site.",
        image: "team",
      },
      {
        id: 16,
        title: "Buddhi Clinic - Health Care",
        description:
          "We have completed about 2039.4 sq. ft. in the Indore site.",
        image: "team",
      },
      {
        id: 17,
        title: "Metro Bazaar - Hotel",
        description: "We have completed about 42000 sq. ft. in the Hosur site.",
        image: "team",
      },
    ],
    CardTitle1:"Our Projects",
    CardData1: [
      {
        title: "Vincent Hospital - Pump Room BIM Modelling",
        description: "Software Used: Revit 2022, Navis; Location: Ireland",
        image: "team",
      },
      {
        title: "Darwin (Warehouse) - MEP & Fire BIM Modelling",
        description:
          "Software Used: Revit2023, Navisworks, Recap; Location: UK",
        image: "team",
      },
      {
        title: "U.S Army Engineer - Utility Services 2D Drafting",
        description: "Software Used: Microstation; Location: Portland",
        image: "team",
      },
      {
        title: "Tesco Holbeach - MEP BIM Modelling",
        description:
          "Software Used: Revit2023, Navisworks, Recap; Location: UK",
        image: "team",
      },
      {
        title: "Tesco Collins - MEP BIM Modelling",
        description:
          "Software Used: Revit2023, Navisworks, Recap; Location: UK",
        image: "team",
      },
      {
        title: "Sutton Coldfield - MEP BIM Modelling",
        description:
          "Software Used: Revit2023, Navisworks, AutoCAD; Location: UK",
        image: "team",
      },
      {
        title: "SSL Bromsgrove - MEP BIM Modelling",
        description:
          "Software Used: Revit2023, Navisworks, AutoCAD; Location: UK",
        image: "team",
      },
      {
        title: "SSL Rugby - MEP BIM Modelling",
        description:
          "Software Used: Revit2023, Navisworks, AutoCAD; Location: UK",
        image: "team",
      },
      {
        title: "C1038 ANAS - Bridge Electrical Cable Modelling",
        description: "Software Used: Revit2023; Location: Italy",
        image: "team",
      },
    ],
    CsTitle: "Our Mission & Vision",
    CsPara:
      "Our mission is to seamlessly integrate MEP design with architecture, ensuring precision and client satisfaction. We are committed to providing innovative, energy-efficient, and sustainable solutions. Our vision is to be the leading MEP consultancy, driving smart building technologies and contributing to the development of sustainable, future-ready cities.",
  };
  return (
    <div>
      <TemplatePage
      CbImg ={data.CbImg}
        Cbtitle={data.Cbtitle}
        CbDescription={data.CbDescription}
        descriptionTitle={data.descriptionTitle}
        descriptionPara={data.descriptionPara}
        CardTitle={data.CardTitle}
        CardData={data.CardData}
        CardData1={data.CardData1}
        CardTitle1={data.CardTitle1}
        CsTitle={data.CsTitle}
        CsPara={data.CsPara}
        CsImg={team1}
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
