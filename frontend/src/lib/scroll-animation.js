import gsap from "gsap";

const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: isMobile ?  -3.38 : -7.0,
    y: isMobile ? -10.74 : -12.2 ,
    z:  isMobile ? -5.93 : -6.5,
    
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: isMobile ? 0.52 : 40.7,
      y: isMobile ? 0.77 : 4.9,
      z: isMobile ? -2.08 : 8.7,
      scrollTrigger: {
        trigger: "customer",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".customer", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
};

export default scrollAnimation;
