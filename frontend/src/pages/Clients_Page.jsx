import React from "react";
import client from "../assets/clients/client_xs.png";
import team from "../assets/clients/tvs.png"
import team1 from "../assets/clients/kpmg.png"
import team2 from "../assets/clients/cloud.png"
import team3 from "../assets/clients/hutch.png"
import team4 from "../assets/clients/vgp.png"
import team5 from "../assets/clients/valeo.png"
import team6 from "../assets/clients/mind.jpg"
import team7 from "../assets/clients/raymond.png"
import team8 from "../assets/clients/tfe.png"
import team9 from "../assets/clients/dantech.png"
import team10 from "../assets/clients/guidehouse.png"
import team11 from "../assets/clients/ge.png"
import team12 from "../assets/clients/elena.png"
import team13 from "../assets/clients/tm.png"
import team14 from "../assets/clients/iopex.png"
import team15 from "../assets/clients/budha.jpg"
// import team16 from "../assets/clients/cartech.png"

const Clients_Page = () => {

  const CardData = [
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
      image: team1,
    },
    {
      id: 3,
      title: "Cloud Kinetics - Office",
      description: "We have completed about 6500 sq. ft. in the Chennai site.",
      image: team2,
    },
    {
      id: 4,
      title: "Hutchinson - Manufacturing Plant",
      description:
        "We have completed about 30000 sq. ft. in the Oragadam site.",
      image: team3,
    },
    {
      id: 5,
      title: "VGP - Amusement Park",
      description:
        "We have completed about 150000 sq. ft. in the Chennai site.",
      image: team4,
    },
    {
      id: 6,
      title: "Valeo - Commercial Building",
      description:
        "We have completed about 100000 sq. ft. in the Chennai site.",
      image: team5,
    },
    {
      id: 7,
      title: "MindStudio - Commercial Building",
      description: "We have completed about 5000 sq. ft. in the Chennai site.",
      image: team6,
    },
    {
      id: 8,
      title: "Arymond - Industrial",
      description: "We have completed about 30000 sq. ft. in the Chennai site.",
      image: team7,
    },
    {
      id: 9,
      title: "TFE - Commercial Building",
      description: "We have completed about 7500 sq. ft. in the Chennai site.",
      image: team8,
    },
    {
      id: 10,
      title: "Dantech - Pharma Facility",
      description: "We have completed about 12000 sq. ft. in the Chennai site.",
      image: team9,
    },
    {
      id: 11,
      title: "Guide House - Commercial Building",
      description: "We have completed about 57000 sq. ft. in the Chennai site.",
      image: team10,
    },
    {
      id: 12,
      title: "GE - Cafeteria",
      description: "We have completed about 500 sq. ft. in the Chennai site.",
      image: team11,
    },
    {
      id: 13,
      title: "Elena - Office",
      description: "We have completed about 1063 sq. ft. in the Chennai site.",
      image: team12,
    },
    {
      id: 14,
      title: "TM Seating - Office",
      description: "We have completed about 5000 sq. ft. in the Chennai site.",
      image: team13,
    },
    {
      id: 15,
      title: "iopex - Office",
      description: "We have completed about 10800 sq. ft. in the Indore site.",
      image: team14,
    },
    {
      id: 16,
      title: "Buddhi Clinic - Health Care",
      description: "We have completed about 2039.4 sq. ft. in the Indore site.",
      image: team15,
    }
    // ,
    // {
    //   id: 17,
    //   title: "Metro Bazaar - Hotel",
    //   description: "We have completed about 42000 sq. ft. in the Hosur site.",
    //   image: team16,
    // },
  ];
  

  return (
    <>
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
                   Our Clients
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
                src={client}
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
                      Our Clients
                    </span>
                    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                      What We Do Matters
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                      We strive to redefine industry standards through
                      innovation, collaboration, and a deep understanding of our
                      clients' goals
                    </p>
                  </div>
                </div>
              </div>
              <div className="-mx-4 flex flex-wrap">
                {CardData.map((data) => (
                  <ServiceCard
                    title={data.title}
                    details={data.description}
                    image ={data.image}
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

export default Clients_Page;

const ServiceCard = ({ icon, title, details,image }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
            <img src={image} alt="photo" className=" mb-8 flex h-[70px]  items-center justify-center  w-full object-contain"/>

          <h4 className="mb-[14px] text-2xl font-semibold text-dark text-center dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
