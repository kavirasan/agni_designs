import React from "react";
import project2 from "../assets/projects/project1.png";
import AgniDesignSEO from "../SEO/AgniDesignSEO";

const OurProjects = () => {
  const CardData = [
    {
      title: "Vincent Hospital - Pump Room BIM Modelling",
      description: "Software Used: Revit 2022, Navis; Location: Ireland",
      image: "team",
    },
    {
      title: "Darwin (Warehouse) - MEP & Fire BIM Modelling",
      description: "Software Used: Revit2023, Navisworks, Recap; Location: UK",
      image: "team",
    },
    {
      title: "U.S Army Engineer - Utility Services 2D Drafting",
      description: "Software Used: Microstation; Location: Portland",
      image: "team",
    },
    {
      title: "Tesco Holbeach - MEP BIM Modelling",
      description: "Software Used: Revit2023, Navisworks, Recap; Location: UK",
      image: "team",
    },
    {
      title: "Tesco Collins - MEP BIM Modelling",
      description: "Software Used: Revit2023, Navisworks, Recap; Location: UK",
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
  ];
  const seo = {  // Define your SEO data
    title: "Our Projects - Agni Design Consultant",
    description: "Explore our diverse portfolio of BIM modeling, MEP design, and 2D drafting projects. We specialize in delivering cutting-edge, sustainable design solutions for clients worldwide.",
    keywords: "BIM modeling, MEP design, 2D drafting, Revit, Navisworks, Microstation, sustainable design, architecture, engineering, construction, Ireland, UK, Italy, US",
    canonical: "https://www.yourwebsite.com/projects", // Replace with your actual URL
  };

  return (
    <>
     <AgniDesignSEO {...seo} />
      <div>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center my-2 mb-10">
            Our Projects
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base/7 font-semibold text-indigo-600">
                    Trusted by the world’s most innovative Industry
                  </p>
                  <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Our customers make us great
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    Here at Agni Design Consultant, we specialize in delivering
                    cutting-edge, sustainable design solutions tailored to meet
                    the evolving needs of our clients. By combining advanced
                    technology, creative vision, and industry expertise, we
                    craft designs that drive efficiency, functionality, and
                    aesthetic appeal. Our commitment extends to providing
                    comprehensive MEP (Mechanical, Electrical, and Plumbing)
                    designs and BIM (Building Information Modeling) services,
                    ensuring precision and excellence in every project.Unlocking
                    long-term value and shaping a better, sustainable future.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src={project2}
                className="w-[48rem] max-w-none rounded-xl bg-white/20 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[30rem] object-contain"
              />
            </div>
          </div>
          <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[20px]">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                    <span className="mb-2 block text-lg font-semibold text-primary">
                      Our Projects
                    </span>
                    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                      What We Do Matters
                    </h2>
                    <p className="text-base text-body-color text-green-600 font-bold dark:text-dark-6">
                      * Since we are committed to client confidentiality, we do
                      not share images of client projects for security purposes.
                      Thank you for your understanding. For more information,
                      please contact us or fill out the form in the 'Get in
                      Touch' section. *
                    </p>
                  </div>
                </div>
              </div>
              <div className="-mx-4 flex flex-wrap">
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
        </div>
      </div>
    </>
  );
};

export default OurProjects;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <p className=" mb-8 flex h-[70px] font-extrabold text-4xl text-blue-500 items-center justify-center  w-full object-contain">
            {title?.split(" ")[0]}
          </p>

          <h4 className="mb-[14px] text-2xl font-semibold text-dark text-center dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
