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
            <div>
              <Footer.Title title="Quick Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about">About Us</Footer.Link>
                <Footer.Link href="/projects">Projects</Footer.Link>
                {/* <Footer.Link href="#">Career</Footer.Link> */}
                <Footer.Link href="/client">Clients</Footer.Link>
                <Footer.Link href="/contact">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className=" w-60 md:w-96">
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col>
                <Footer.Link>
                  Agni Design Consultants, 21/10, Muthuvel St, Dr.Subbaraya
                  Nagar, Kodambakkam, Chennai, Tamil Nadu 600024
                </Footer.Link>
                <a href="tel:+91987654321"> Phone No: 987654321 </a>
                <a
                  href="mailto:agnidesignconsultant@gmail.com?cc=&bcc=&subject=&body=Write a mail to us"
                  target="_blank"
                >
                  Email: agnidesignconsultant@gmail.com
                </a>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23301.99234560162!2d80.19634769031333!3d12.968429638553479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525db5c1e8c4a7%3A0x59df5e4a3b671da5!2sSai%20Aircon%20solution!5e0!3m2!1sen!2sin!4v1738137407267!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
              {/* <Footer.LinkGroup col>
                <Footer.Link href="#"> MEP Design Services</Footer.Link>
                <Footer.Link href="#"> Technical Due Diligence</Footer.Link>
                <Footer.Link href="#">
                  Validating & Value Engineering
                </Footer.Link>
                <Footer.Link href="#">MEP BIM Services</Footer.Link>
                <Footer.Link href="#"> Third party Testing</Footer.Link>
              </Footer.LinkGroup> */}
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Agni Design Consultants" year={2024} />
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
