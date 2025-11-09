import React from "react";
import client from "../assets/clients/client_xs.png";

import software from "../assets/new_agni_images/software.jpeg";
import pic1 from "../assets/software/pic1.jpg"
import pic2 from "../assets/software/pic2.png";
import pic3 from "../assets/software/pic3.jpg";
import pic4 from "../assets/software/pic4.png";
import pic5 from "../assets/software/pic5.png";
import pic6 from "../assets/software/pic6.png";
import pic7 from "../assets/software/pic7.png";
import pic8 from "../assets/software/pic8.png";
import pic9 from "../assets/software/pic9.png";
import pic10 from "../assets/software/pic10.png";
import pic11 from "../assets/software/pic11.png";
import pic12 from "../assets/software/pic12.png";
import pic13 from "../assets/software/pic13.png";
import AgniDesignSEO from "../SEO/AgniDesignSEO";


const OurSoftwares = () => {


  const CardData = [
    {
      id: 1,
      title: "Autodesk Revit",
      description:
        "A Building Information Modeling (BIM) software that allows users to design a building and its components in 3D, annotate the model with 2D drafting elements, and access building information from the model.",
      image: pic1,
    },
    {
      id: 2,
      title: "Enscape",
      description:
        "A real-time visualization and virtual reality plugin for Revit, SketchUp, and other BIM tools that enables users to create high-quality renderings and walkthroughs quickly.",
      image: pic2,
    },
    {
      id: 3,
      title: "Autodesk BIM 360",
      description:
        "A cloud-based platform that connects project teams and data in real time, enhancing collaboration and project management in the construction process.",
      image: pic3,
    },
    {
      id: 4,
      title: "Autodesk AutoCAD MEP",
      description:
        "A version of AutoCAD specifically designed for MEP engineers, providing tools and features for designing mechanical, electrical, and plumbing systems in building projects.",
      image: pic4,
    },
    {
      id: 5,
      title: "Lumion",
      description:
        "A visualization software that enables architects and designers to create beautiful images, videos, and 360-degree panoramas from 3D models with ease.",
      image: pic5,
    },
    {
      id: 6,
      title: "Revizto",
      description:
        "A real-time issue tracking software that helps project teams visualize, communicate, and manage issues within a single, collaborative environment.",
      image: pic6,
    },
    {
      id: 7,
      title: "Bluebeam",
      description:
        "A PDF solution that enables users to create, edit, markup, and collaborate on PDF documents, widely used in construction documentation.",
      image: pic7,
    },
    {
      id: 8,
      title: "SketchUp",
      description:
        "A 3D modeling software that's easy to use, allowing designers to create detailed 3D models and conceptual designs quickly.",
      image: pic8,
    },
    {
      id: 9,
      title: "Adobe Photoshop",
      description:
        "A graphic design and photo editing software used for creating and manipulating images, essential for enhancing visual presentations of projects.",
      image: pic9,
    },
    {
      id: 10,
      title: "Autodesk Navisworks",
      description:
        "A project review software that integrates 3D models from various software to enable clash detection and project visualization.",
      image: pic10,
    },
    {
      id: 11,
      title: "Dynamo",
      description:
        "A visual programming tool that works with Revit to automate repetitive tasks and create custom workflows for MEP design.",
      image: pic11,
    },
    {
      id: 12,
      title: "Adobe Premiere Pro",
      description:
        "A professional video editing software used to create high-quality videos, useful for presenting projects and case studies.",
      image: pic12,
    },
    {
      id: 13,
      title: "COBie",
      description:
        "Construction Operations Building Information Exchange is a standard for managing building data and information during the lifecycle of a building, facilitating better facility management.",
      image: pic13,
    },
  ];
  

  return (
    <>
    <AgniDesignSEO
        title="Our Software Solutions - Agni Design"
        description="Explore our innovative software solutions designed for MEP design and project management, including BIM integration, automation, and real-time collaboration."
        keywords="software solutions, MEP design, BIM, automation, Agni Design"
        canonical="https://www.agnidesign.com/our-software-solutions"
      />
      <div>
        <div className="relative isolate overflow-hidden bg-yellow-50 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
          </div>

          <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[20px]">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                    <span className="mb-2 block text-lg font-semibold text-primary">
                      Our Software Solutions
                    </span>
                    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                      Why Our Work Matters
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                      At Agni Design Consultants, our software solutions are
                      designed to revolutionize the way you approach MEP design
                      and project management. By leveraging advanced tools and
                      cutting-edge technology, we ensure seamless integration,
                      improved efficiency, and unmatched precision in every
                      project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-mx-4 flex flex-wrap justify-center">
                {CardData.map((data) => (
                  <ServiceCard
                    title={data.title}
                    details={data.description}
                    image={data.image}
                    icon={
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                          fill="white"
                        />
                      </svg>
                    }
                  />
                ))}
              </div>
            </div>
          </section>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-xl">
                  <p className="text-base/7 font-semibold text-indigo-600">
                    Trusted by Leading Innovators in Software Solutions
                  </p>
                  <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Empowering Our Customers Through Software Excellence
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    Key Features of Our Software Solutions BIM Integration:
                    Empowering you with state-of-the-art Building Information
                    Modeling tools for precise designs and effective project
                    coordination. Custom Design Automation: Automating
                    repetitive tasks to boost productivity and reduce project
                    timelines. Real-Time Collaboration: Enabling seamless
                    communication and collaboration across teams to ensure
                    project alignment and success.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src={software}
                className="w-[48rem] max-w-none rounded-xl bg-white/20 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[30rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSoftwares;

const ServiceCard = ({ icon, title, details, image }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <img
            src={image}
            alt="photo"
            className=" mb-8 flex h-[70px]  items-center justify-center  w-full object-contain"
          />

          <h4 className="mb-[14px] text-2xl font-semibold text-dark text-center dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
