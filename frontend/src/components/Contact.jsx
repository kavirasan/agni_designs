import AnimatedTitle from "./TextAnimation/AnimatedTitle";
import Button from "./Button";
import four from  "../assets/new_agni_images/4.png"
import five from  "../assets/new_agni_images/5.png"
import six from  "../assets/new_agni_images/6.png"
import seven from  "../assets/new_agni_images/7.png"

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96  w-screen  px-10">
      <div className="relative rounded-lg bg-white py-10 md:py-24  text-black sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
           
            src={six}
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
          
            src={five}
            clipClass="contact-clip-path-2 lg:translate-y-20 translate-y-60"
          />
        </div>

        <div className="absolute hidden md:flex -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src={four}
            clipClass="absolute md:scale-125"
          />
         
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Agni Design
          </p>
          <AnimatedTitle
            title="Let's shape the future of design together"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference  !text-sm md:!text-5xl relative z-10 "
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
