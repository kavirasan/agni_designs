import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/new_agni_images/fulllogo.jpg";

const CustomFooter = () => {
  return (
    <Footer container>
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              src={logo}
              alt="Flowbite Logo"
              name="Flowbite"
              className=" object-cover w-48 h-24"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 items-center justify-center">
            <div >
              <Footer.Title title="Services" />
              <Footer.LinkGroup col>
                <Footer.Link href="#"> MEP Design Services</Footer.Link>
                <Footer.Link href="#"> Technical Due Diligence</Footer.Link>
                <Footer.Link href="#">
                  Validating & Value Engineering
                </Footer.Link>
                <Footer.Link href="#">MEP BIM Services</Footer.Link>
                <Footer.Link href="#"> Third party Testing</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div >
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Services</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Projects</Footer.Link>
                <Footer.Link href="#">Career</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className=" w-60 md:w-96">
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" >
                  Agni Design Consultant, 21/10, Muthuvel St, Dr.Subbaraya
                  Nagar, Kodambakkam, Chennai, Tamil Nadu 600024
                </Footer.Link>
                <Footer.Link href="#">Phone No: 987654321</Footer.Link>
                <Footer.Link href="#">
                  email at:AgniDesignConsultant@gmail.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Agni Design Consultant" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
