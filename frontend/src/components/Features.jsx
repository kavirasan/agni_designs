import React from "react";
import DynamicCard from "./DynamicCard";
import { TiLocationArrow } from "react-icons/ti";
import DynamicCardTitle from "./DynamicCardTitle";
import team from "../assets/new_agni_images/fulllogo.jpg";
// import team from "../assets/new_agni_images/5.png";
import mep1 from "../assets/new_agni_images/mep1.jpg";
import banner from "../assets/herobg1.jpg"
import software from "../assets/new_agni_images/software.jpeg"
import clients from "../assets/clients/client_xs.png"
import project1 from "../assets/projects/project2.png"

const Features = () => {
  return (
    <section className="bg-slate-50 pb-5 md:pl-5 px-5">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 pt-14 pb-5">
          <p className=" text-xl font-semibold text-black-50">
            Into The World of Agni Designs
          </p>
        </div>
        <p className="max-w-3xl space-x-1  text-start md:text-justify text-xs md:text-lg  text-black  pb-5">
          AGNI Design Consultants is a leading provider of MEP (Mechanical,
          Electrical, and Plumbing) Design Services, offering cutting-edge
          solutions for both design and implementation. With over two decades of
          collective experience, we bring unparalleled expertise to every
          project, delivering innovative, sustainable, and eco-friendly
          engineering solutions. Our team visualizes every project
          comprehensively, blending MEP design with architectural insights to
          maximize efficiency and minimize revisions.
        </p>
      </div>
      <DynamicCardTitle className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <DynamicCard
          // src={"../../public/hero.mp4"}
          src={project1}
          title={<> Our Recent Projects</>}
          description="we offer a comprehensive range of MEP and BIM services, crafted to meet the unique needs of each client. Our services are designed to provide value at every stage of the project lifecycle, from conceptual design to execution. "
          isComingSoon={false}
        />
      </DynamicCardTitle>
      {/* <DynamicCardTitle className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <DynamicCard
          // src={"../../public/hero.mp4"}
          src={team}
          title={<>Explore our Services</>}
          description="we offer a comprehensive range of MEP and BIM services, crafted to meet the unique needs of each client. Our services are designed to provide value at every stage of the project lifecycle, from conceptual design to execution. "
          isComingSoon={true}
        />
      </DynamicCardTitle> */}
      <div className="grid h-[80vh] grid-cols-2 grid-rows-2 gap-7 mb-5">
        <DynamicCardTitle className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <DynamicCard
            src={clients}
            title={<>Our Clients</>}
            // description="Our portfolio spans a diverse range of commercial, industrial, and specialized projects, delivering customized, high-quality solutions with a strong emphasis on innovation and efficiency."
            isComingSoon={false}
          />
        </DynamicCardTitle>
        <DynamicCardTitle className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <DynamicCard
            src={software}
            title={<> We Specialize In </>}
            // description="Our portfolio spans a diverse range of commercial, industrial, and specialized projects, delivering customized, high-quality solutions with a strong emphasis on innovation and efficiency."
            isComingSoon={false}
          />
        </DynamicCardTitle>
      </div>
      {/* <DynamicCardTitle className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <DynamicCard
          // src={"../../public/hero.mp4"}
          src={project1}
          title={<> Our Recent Projects</>}
          description="we offer a comprehensive range of MEP and BIM services, crafted to meet the unique needs of each client. Our services are designed to provide value at every stage of the project lifecycle, from conceptual design to execution. "
          isComingSoon={false}
        />
      </DynamicCardTitle> */}
     
    </section>
  );
};

export default Features;



    {/* <DynamicCardTitle className="bento-tilt_1 row-span-1  md:col-span-1 md:ms-0">
          <DynamicCard
            // src={"../../public/hero.mp4"}
            src={banner}
            title={<>Recent Projects</>}
            description=""
            isComingSoon={true}
          />
        </DynamicCardTitle>
        <DynamicCardTitle className="bento-tilt_1 md:col-span-1 md:me-0">
          <div className="flex size-full flex-col justify-between bg-gradient-to-r from-orange-500 via-yellow-350 to-yellow-300  p-5">
            <h1 className="bento-title  special-font  text-white">
              More Coming Soon !
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end text-white" />
          </div>
        </DynamicCardTitle> */}
        {/* <DynamicCardTitle className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-700 p-5">
            <h1 className="bento-title  special-font max-w-64 text-black">
              More Coming Soon !
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </DynamicCardTitle>
        <DynamicCardTitle className="bento-tilt_2">
          <video
            src={"../../public/hero.mp4"}
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </DynamicCardTitle> */}
