import React from "react";
import CustomBanner from "../../components/CustomBanner";
import ourservices from "../../assets/services/ourServices.jpg"

const services = [
  {
    title: "MEP Design Services",
    description:
      "Comprehensive MEP design solutions tailored to meet your project requirements with precision and innovation.",
    image: "/images/mep-design.jpg", // Replace with your image path
  },
  {
    title: "Technical Due Diligence",
    description:
      "Detailed assessments to ensure technical compliance, feasibility, and risk mitigation for your projects.",
    image: "/images/technical-due-diligence.jpg", // Replace with your image path
  },
  {
    title: "Peer Review, Validation & Value Engineering",
    description:
      "Expert validation and peer reviews to optimize designs, improve efficiency, and enhance value engineering.",
    image: "/images/peer-review.jpg", // Replace with your image path
  },
  {
    title: "Third-Party Testing & Commissioning",
    description:
      "Independent testing and commissioning services to ensure systems meet performance standards and functionality.",
    image: "/images/testing-commissioning.jpg", // Replace with your image path
  },
  {
    title: "MEP BIM Services",
    description:
      "Advanced Building Information Modeling (BIM) services for accurate planning, design, and execution of MEP systems.",
    image: "/images/mep-bim.jpg", // Replace with your image path
  },
];

const ServicePage = () => {
  return (
    <div className="bg-gray-100 py-8">
         <CustomBanner
          image={ourservices}
          // image={}
          title=" Our Services"
        //   title={Cbtitle}
          description="This layout will provide a comprehensive, professional, and user-friendly experience for visitors. The content should emphasize your expertise, quality of service, and sustainable design practices, creating a solid impression of AGNI Design Consultants as a leader in MEP design and BIM services."
        //   description={CbDescription}
        />
      <div className="container mx-auto px-4">
        {/* <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Services
        </h1> */}
        <div className="space-y-12 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
