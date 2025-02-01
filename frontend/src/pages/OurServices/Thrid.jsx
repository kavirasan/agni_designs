import React from 'react'
import ServiceTemplate from "../page_template/ServiceTemplate"
import img from "../../assets/services/electrical.jpg"
import pic1 from "../../assets/services/mep/pic1.jpg"
import pic2 from "../../assets/services/mep/pic2.jpg"
import pic3 from "../../assets/services/mep/pic3.jpg"
import pic4 from "../../assets/services/mep/pic4.jpg"
import pic5 from "../../assets/services/mep/pic5.jpg"
import pic6 from "../../assets/services/mep/pic6.jpg"

const Thrid = () => {

    const Thrid = [
        {
          title: "Independent Third-Party Testing for MEP",
          description:
            "Unbiased testing and validation of MEP systems to ensure compliance, performance, and operational efficiency.",
          keyFeatures: [
            "Quality assurance for MEP installations",
            "Verification of system functionality and performance",
            "Compliance checks against international and local codes",
            "Identification of potential defects and inefficiencies",
            "Detailed test reports with improvement recommendations",
          ],
          image: pic1
        },
        {
          title: "Mechanical System Testing",
          description:
            "Comprehensive testing of HVAC and mechanical systems to validate efficiency, reliability, and safety.",
          keyFeatures: [
            "Testing of airflow, pressure, and temperature controls",
            "Performance validation of heating and cooling systems",
            "Duct leakage testing and system balancing",
            "Equipment vibration and noise level analysis",
            "Compliance verification with ASHRAE standards",
          ],
          image: pic2
        },
        {
          title: "Electrical System Testing & Inspection",
          description:
            "Thorough assessment of electrical systems to ensure safety, efficiency, and regulatory compliance.",
          keyFeatures: [
            "Power quality analysis and load testing",
            "Emergency power and backup system validation",
            "Electrical fault detection and risk assessment",
            "Verification of grounding and surge protection",
            "Compliance checks with NEC and IEC standards",
          ],
          image: pic3
        },
        {
          title: "Plumbing System Testing",
          description:
            "Evaluation of plumbing systems to ensure proper functionality, water quality, and regulatory compliance.",
          keyFeatures: [
            "Water pressure and leakage testing",
            "Backflow prevention and cross-connection inspection",
            "Assessment of drainage and wastewater management",
            "Material and pipe integrity evaluation",
            "Adherence to plumbing codes and environmental regulations",
          ],
          image: pic4
        },
        {
          title: "Fire Protection System Testing",
          description:
            "Independent validation of fire safety systems to ensure compliance with NFPA and local fire codes.",
          keyFeatures: [
            "Testing of fire alarms, sprinklers, and hydrants",
            "Smoke and heat detector functionality checks",
            "Emergency lighting and exit route verification",
            "Water flow and pressure testing for fire suppression systems",
            "Risk assessment and improvement recommendations",
          ],
          image: pic5
        },
      ];
    
      const Thrid1 = {
        title: "Third-Party Testing Services",
        description:
          "Agni provides independent third-party testing services to ensure compliance, reliability, and performance of MEP systems. Our unbiased evaluations help identify design flaws, improve efficiency, and guarantee adherence to industry standards, reducing risks and project delays.",
        short: "Reliable Third-Party Testing by Agni",
        shortDescription:
          "Ensure compliance, safety, and efficiency with Agni's independent third-party testing services.",
        imgCont1Title: "Unbiased Quality Assurance",
        imgCont1Desc:
          "Agni's independent testing process provides an objective assessment of MEP system performance, ensuring project success with zero compromise on quality.",
        imgCont1: img, // Replace with your image path
        imgCont2Title: "Code Compliance & Certification",
        imgCont2Desc:
          "We verify MEP installations against international and local codes, providing detailed reports and certifications for regulatory approvals.",
        imgCont2: "/images/third-party-compliance.jpg", // Replace with your image path
        imgCont3Title: "Performance & Safety Testing",
        imgCont3Desc:
          "Agni conducts rigorous performance tests, identifying inefficiencies and ensuring that MEP systems function at optimal capacity.",
        imgCont3: "/images/third-party-safety.jpg", // Replace with your image path
        imgCont4Title: "Comprehensive Reporting & Insights",
        imgCont4Desc:
          "Our detailed test reports provide actionable insights, helping stakeholders make informed decisions for project optimization.",
        imgCont4: "/images/third-party-reporting.jpg", // Replace with your image path
      };
    
  return (
    <div>
       <ServiceTemplate
          services={Thrid}
          services1={Thrid1}
        />
    </div>
  )
}

export default Thrid
