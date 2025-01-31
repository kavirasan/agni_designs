import React from "react";
import ServiceTemplate from "../page_template/ServiceTemplate";

const TechnicalDueDiligence = () => {
  const technicalDueDiligence1 = {
    title: "Technical Due Diligence",
    description:
      "Agni Design Consultant offers a comprehensive Technical Due Diligence (TDD) process to assess the integrity, efficiency, and compliance of Mechanical, Electrical, and Plumbing (MEP) systems in building projects. Our due diligence services provide stakeholders with critical insights to mitigate risks, enhance system performance, and ensure long-term sustainability.",
    short: "Ensuring MEP Excellence Through Due Diligence",
    shortDescription:
      "Agni's Technical Due Diligence process provides a thorough evaluation of MEP systems to identify risks, improve efficiency, and ensure compliance.",
    imgCont1Title: "Comprehensive System Assessment",
    imgCont1Desc:
      "We conduct a detailed evaluation of existing MEP systems, analyzing design integrity, operational efficiency, and compliance with local and international standards.",
    imgCont1: "/images/tdd-assessment.jpg",
    imgCont2Title: "Risk Identification & Mitigation",
    imgCont2Desc:
      "Our experts identify potential risks, inefficiencies, and non-compliance issues, providing strategic recommendations to optimize system performance and reduce liabilities.",
    imgCont2: "/images/tdd-risk.jpg",
    imgCont3Title: "Sustainability & Energy Efficiency",
    imgCont3Desc:
      "We assess energy consumption patterns, recommend sustainable solutions, and integrate energy-efficient practices to enhance overall building performance.",
    imgCont3: "/images/tdd-sustainability.jpg",
    imgCont4Title: "Regulatory Compliance & Standards",
    imgCont4Desc:
      "Our due diligence ensures adherence to national and international MEP standards, building codes, and safety regulations, mitigating legal and operational risks.",
    imgCont4: "/images/tdd-compliance.jpg",
  };

  const technicalDueDiligence = [
    {
      title: "Technical Due Diligence for MEP Systems",
      description:
        "Comprehensive technical assessment of MEP systems to evaluate design efficiency, compliance, and risk factors. Our due diligence process ensures optimal performance, cost-effectiveness, and sustainability.",
      keyFeatures: [
        "Evaluation of MEP design against project specifications and industry standards",
        "Identification of potential design flaws, inefficiencies, and cost overruns",
        "Compliance verification with local and international codes",
        "Assessment of energy efficiency and sustainability measures",
        "Risk analysis for system failures and operational challenges",
      ],
      image: "/images/mep-due-diligence.jpg",
    },
    {
      title: "Mechanical System Assessment",
      description:
        "Detailed evaluation of HVAC and mechanical systems to ensure reliability, energy efficiency, and compliance with project requirements.",
      keyFeatures: [
        "Analysis of heating, cooling, and ventilation load calculations",
        "Assessment of equipment sizing and energy efficiency",
        "Review of ductwork and air distribution systems",
        "Examination of system lifespan and maintenance requirements",
        "Verification of compliance with ASHRAE and other mechanical standards",
      ],
      image: "/images/mechanical-due-diligence.jpg",
    },
    {
      title: "Electrical System Assessment",
      description:
        "Thorough examination of electrical systems to ensure reliability, safety, and compliance with regulatory requirements.",
      keyFeatures: [
        "Power distribution network analysis",
        "Evaluation of emergency power and backup systems",
        "Review of lighting design for energy efficiency and compliance",
        "Low-voltage system assessment (fire alarms, security, and communication)",
        "Load calculations and fault current analysis",
      ],
      image: "/images/electrical-due-diligence.jpg",
    },
    {
      title: "Plumbing System Due Diligence",
      description:
        "Assessment of plumbing designs to ensure proper water distribution, wastewater management, and environmental compliance.",
      keyFeatures: [
        "Review of water supply and drainage systems",
        "Assessment of fixture flow rates and water conservation measures",
        "Evaluation of stormwater and sewage treatment systems",
        "Verification of compliance with plumbing codes and environmental regulations",
        "Assessment of system lifespan and maintenance requirements",
      ],
      image: "/images/plumbing-due-diligence.jpg",
    },
    {
      title: "Fire Protection System Review",
      description:
        "Comprehensive analysis of fire protection systems to ensure compliance with safety regulations and risk mitigation strategies.",
      keyFeatures: [
        "Evaluation of fire suppression and detection systems",
        "Review of sprinkler and hydrant system designs",
        "Assessment of smoke control and emergency evacuation plans",
        "Verification of compliance with NFPA and local fire codes",
        "Identification of potential risks and improvement recommendations",
      ],
      image: "/images/fire-protection-due-diligence.jpg",
    },
    {
      title: "Sustainability and Energy Efficiency Audit",
      description:
        "Technical due diligence focusing on sustainability, energy efficiency, and compliance with green building certifications.",
      keyFeatures: [
        "Assessment of renewable energy integration (solar, wind, geothermal)",
        "Energy audits and optimization strategies",
        "Evaluation of water conservation and recycling systems",
        "Review of compliance with LEED, BREEAM, and other sustainability standards",
        "Recommendations for improving energy performance and cost savings",
      ],
      image: "/images/sustainability-due-diligence.jpg",
    },
  ];

  return (
    <div>
      <ServiceTemplate
        services={technicalDueDiligence}
        services1={technicalDueDiligence1}
      />
    </div>
  );
};

export default TechnicalDueDiligence;
