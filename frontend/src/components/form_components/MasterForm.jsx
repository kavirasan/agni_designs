import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import Link from "next/link";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

const MasterForm = () => {
  return (
    <div className=" bg-white md:mx-40 my-10 rounded-2xl shadow-2xl border-black py-14 ">
      <div className="flex flex-col items-center justify-center mx-2">
        <p className="font-bold text-center md:text-2xl">
          Request a detailed BIM estimate for your next project
        </p>
        <p className="text-xs  text-center my-2 md:mx-20 md:text-lg">
          Get a detailed estimate for your BIM project with a custom quote from
          Agni Design Solutions.Our team of experts will work with you to
          understand the specifics of your project and provide you with an
          accurate estimate. We look forward to connecting with you!
        </p>
      </div>
      <form className="flex max-w-md md:max-w-screen-2xl flex-col gap-4  border-2 border-dotted border-black rounded-xl md:mx-40 py-10 px-5 md:px-20">
        <p className="font-bold text-2xl text-center">Get In Touch !!</p>
        <div className=" md:flex  justify-around items-center  ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Name" />
            </div>
            <TextInput
              className="w-72"
              id="email2"
              type="email"
              placeholder="Your Name *"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Company" value="Company Name" />
            </div>
            <TextInput
              className="w-72"
              id="email2"
              type="email"
              placeholder="Your Company Name"
              required
              shadow
            />
          </div>
        </div>
        <div className=" md:flex  justify-around items-center ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Company" value="Your Email" />
            </div>
            <TextInput
              className="w-72"
              id="email2"
              type="email"
              placeholder="Your Email"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Company" value="Your Phone" />
            </div>
            <TextInput
              className="w-72"
              id="email2"
              type="email"
              placeholder="Your Phone"
              required
              shadow
            />
          </div>
        </div>
        <div className=" md:flex justify-around items-center ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Company" color="default" value="City" />
            </div>
            <TextInput
              className="w-72"
              id="email2"
              type="email"
              placeholder="City"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Company" value="Country" />
            </div>
            <TextInput
              className="w-72"
              id="email2"
              type="email"
              placeholder="Country"
              required
              shadow
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;terms and conditions
          </Label>
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" color="blue" className="w-64 ">
            Send Now
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MasterForm;

("use client");
