import React, { useRef } from "react";
import AnimatedTitle from "./TextAnimation/AnimatedTitle";
import office from "../assets/new_agni_images/office1.jpg";
import gsap from "gsap";
import Button from "./Button";
import AgniDesignSEO from "../SEO/AgniDesignSEO";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = (e) => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      tranformPerspective: 500,
      ease: "power2.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const element = frameRef.current;
    const rect = element.getBoundingClientRect();

    if (!element) {
      return;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      tranformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const seo = {
    title: "Our Story - Agni Design Consultant",
    description: "Meet the dedicated professionals behind Agni Design Consultant. Learn about our team, expertise, and commitment to delivering exceptional MEP and BIM solutions.",
    keywords: "team, about us, story, company, professionals, expertise, MEP, BIM, design, engineering, consulting", // Add more keywords
    canonical: "https://www.yourwebsite.com/story", // **REPLACE WITH YOUR ACTUAL URL**
    openGraph: {
        title: "Our Story - Agni Design Consultant",
        description: "Meet the dedicated professionals behind Agni Design Consultant. Learn about our team, expertise, and commitment to delivering exceptional MEP and BIM solutions.",
        url: "https://www.yourwebsite.com/story", // **REPLACE WITH YOUR ACTUAL URL**
        type: "website",
        // Add an OG image if you have one: image: "https://www.yourwebsite.com/images/story-og-image.jpg",
    },
};

  return (
    <>
    <AgniDesignSEO {...seo} />
    <section id="story" className="min-h-dvh w-screen bg-white text-black-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="text-sm uppercase md:text-[20px]">Meet Our Team</p>
        <div className="relative size-full">
          <AnimatedTitle
            title=" the story of Agni Design Consultant"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference !text-xl md:!text-5xl relative z-10 "
          />
          <div className="flex flex-col items-center justify-center my-10">
            <img
              ref={frameRef}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseLeave}
              onMouseEnter={handleMouseLeave}
              onMouseMove={handleMouseMove}
              src={office}
              alt="etrance"
              className=" w-64 h-64 md:w-1/2 md:h-96 object-cover object-center rounded-3xl  flex"
            />
            <p className="max-w-xl text-center font-circular-web text-black-50 text-sm md:text-lg md:text-center m-3  md:mt-5">
              Meet our team of dedicated professionals, each bringing expertise
              and passion to deliver exceptional results. With a focus on
              collaboration and innovation, our team is committed to exceeding
              client expectations and driving success in every project.
            </p>

            <Button
              id="realm-btn"
              title="our Team"
              containerClass="mt-5"
              route="/team"
              
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Story;
