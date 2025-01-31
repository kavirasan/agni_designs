import React from 'react'
import ServiceTemplate from "../page_template/ServiceTemplate"
import img from "../../assets/projects/project1.png"
const BIM = () => {
    const BIM = [
        {
          title: "BIM Implementation and Integration",
          description:
            "Comprehensive BIM implementation services that enable efficient integration of all building systems, facilitating project collaboration and data flow.",
          keyFeatures: [
            "End-to-end BIM implementation across all disciplines",
            "Data integration for accurate building modeling",
            "Seamless collaboration between architectural, structural, and MEP teams",
            "Reduced errors and improved project outcomes",
            "Project delivery with higher accuracy and fewer revisions",
          ],
          image: "/images/bim-implementation.jpg",
        },
        {
          title: "3D BIM Modeling and Visualization",
          description:
            "High-quality 3D BIM modeling and visualization for improved project understanding, communication, and decision-making.",
          keyFeatures: [
            "Creation of detailed 3D models for architecture, structure, and MEP",
            "Visualization of designs for stakeholder engagement",
            "Virtual simulations to foresee potential issues",
            "Optimized project scheduling using 3D modeling",
            "Enhanced coordination among different project teams",
          ],
          image: "/images/bim-3d-modeling.jpg",
        },
        {
          title: "BIM Coordination and Clash Detection",
          description:
            "Ensuring smooth coordination between different systems using advanced BIM tools for clash detection and resolution.",
          keyFeatures: [
            "Clash detection between architectural, structural, and MEP systems",
            "Use of advanced BIM tools like Revit, Navisworks for clash resolution",
            "Reduction of construction conflicts and rework",
            "Increased project timeline predictability",
            "Comprehensive clash reports for quick resolution",
          ],
          image: "/images/bim-coordination.jpg",
        },
        {
          title: "BIM for Construction Sequencing and Planning",
          description:
            "Utilizing BIM for improved construction sequencing, planning, and management to ensure timely project delivery.",
          keyFeatures: [
            "Simulation of construction processes using 4D BIM",
            "Detailed construction sequencing for better project scheduling",
            "Visualization of project milestones and timelines",
            "Risk management and mitigation planning",
            "Real-time updates and communication between teams",
          ],
          image: "/images/bim-construction-planning.jpg",
        },
        {
          title: "BIM for Facility Management and Operations",
          description:
            "Leverage BIM data to improve facility management, optimize maintenance workflows, and enhance operational performance post-construction.",
          keyFeatures: [
            "Integration of BIM with CMMS (Computerized Maintenance Management Systems)",
            "Asset tracking and maintenance scheduling",
            "Digital twin technology for real-time facility monitoring",
            "Efficient facility space management and asset utilization",
            "Prolonged building lifespan through predictive maintenance",
          ],
          image: "/images/bim-facility-management.jpg",
        },
        {
          title: "BIM for Energy Analysis and Sustainability",
          description:
            "Using BIM to conduct energy analysis and create sustainable designs for optimized energy efficiency in buildings.",
          keyFeatures: [
            "Energy simulations and optimization for energy-efficient designs",
            "Sustainability assessments using BIM tools (LEED, BREEAM, etc.)",
            "Integration of renewable energy sources like solar and wind",
            "Evaluation of material efficiency and waste reduction",
            "Recommendations for improving building sustainability and reducing operational costs",
          ],
          image: "/images/bim-energy-analysis.jpg",
        },
      ];
    
      const BIM1 = {
        title: "MEP BIM Services",
        description:
          "Agni specializes in cutting-edge MEP Building Information Modeling (BIM) services, ensuring seamless integration of mechanical, electrical, and plumbing systems into the digital twin of your project. Our BIM solutions enhance collaboration, accuracy, and efficiency, reducing design conflicts and optimizing project execution.",
        short: "Advanced MEP BIM Solutions by Agni",
        shortDescription:
          "Explore how Agni leverages BIM technology to enhance MEP design accuracy, coordination, and efficiency.",
        imgCont1Title: "Precision-Driven BIM Modeling",
        imgCont1Desc:
          "Agni creates highly detailed and clash-free MEP BIM models that streamline design coordination and reduce rework, ensuring project efficiency.",
        imgCont1: img, // Replace with your image path
        imgCont2Title: "Seamless Collaboration & Integration",
        imgCont2Desc:
          "Our BIM experts collaborate with architects and engineers to integrate MEP systems into a unified model, enhancing project transparency and coordination.",
        imgCont2: "/images/mep-bim-collaboration.jpg", // Replace with your image path
        imgCont3Title: "Energy-Efficient & Sustainable Designs",
        imgCont3Desc:
          "We utilize BIM-driven simulations to optimize energy consumption, improve sustainability, and ensure compliance with industry standards.",
        imgCont3: "/images/mep-bim-sustainability.jpg", // Replace with your image path
        imgCont4Title: "Client-Centric Digital Solutions",
        imgCont4Desc:
          "Our customized BIM services empower clients with accurate visualizations, real-time updates, and enhanced decision-making throughout the project lifecycle.",
        imgCont4: "/images/mep-bim-client-solutions.jpg", // Replace with your image path
      };
  return (
    <div><ServiceTemplate
    services={BIM}
    services1={BIM1}
  /></div>
  )
}

export default BIM