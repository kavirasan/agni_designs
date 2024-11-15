import { Carousel } from "flowbite-react";


const Testimonial_Carousel = () =>  {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl="" rightControl="" onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center ">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center ">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonial_Carousel