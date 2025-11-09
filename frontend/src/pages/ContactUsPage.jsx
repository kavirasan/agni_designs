import React from "react";
import CustomBanner from "../components/CustomBanner";
import office from "../assets/new_agni_images/office2.jpg";
import AgniDesignSEO from "../SEO/AgniDesignSEO";



const ContactUsPage = () => {
  const seo = {
    title: "Contact Us - Agni Design Consultants",
    description: "Get in touch with Agni Design Consultants for MEP technical due diligence and innovative engineering solutions. Contact us via phone, email, or visit our office.",
    keywords: "contact, address, phone, email, MEP, technical, due diligence, engineering, solutions, Chennai", // Add relevant keywords
    canonical: "https://www.agnidesign.com/contact", // Updated with your actual URL
    openGraph: { // For better social media sharing
        title: "Contact Us - Agni Design Consultants",
        description: "Get in touch with Agni Design Consultants for MEP technical due diligence and innovative engineering solutions. Contact us via phone, email, or visit our office.",
        // You can add an image if relevant: image: "https://www.agnidesign.com/images/contact-us-image.jpg",
        url: "https://www.agnidesign.com/contact", // Updated with your actual URL
        type: "website",
    },
};


  return (
    <div>
      <AgniDesignSEO {...seo} />
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-600">
                  Know us Better
                </p>
                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Our Contact Information
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                  We would love to hear from you! Whether you have a question,
                  feedback, or an inquiry about our services, feel free to reach
                  out. Our team is here to assist you. If you need support, have
                  any inquiries, or want to discuss your next project, don’t
                  hesitate to get in touch with us. We are committed to
                  providing prompt and helpful responses to ensure your needs
                  are met.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* <img
              alt=""
              src={office}
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[30rem] object-cover"
            /> */}
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23301.99234560162!2d80.19634769031333!3d12.968429638553479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525db5c1e8c4a7%3A0x59df5e4a3b671da5!2sSai%20Aircon%20solution!5e0!3m2!1sen!2sin!4v1738137407267!5m2!1sen!2sin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1264646312895!2d80.249172!3d12.9763983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525da2de3e39bf%3A0x66bd4064818da56!2sShoba%20Castle!5e0!3m2!1sen!2sin!4v1731140000000!5m2!1sen!2sin"

              width="900"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
            {/* <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              <Marker position={center} />
            </GoogleMap> */}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <p></p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex flex-col gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Address
                      </strong>
                    </span>
                    <p>
                     No.3, 2nd Floor, Rajiv Street,
OMR, Kottivakkam,
Chennai – 600 041, India
                    </p>
                  </li>
                  <li className="flex flex-col gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Phone
                      </strong>
                    </span>
                    <p> 044-46864771 </p>
                  </li>
                  <li className="flex flex-col gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Email
                      </strong>
                    </span>
                    <p>Info@agnimep.com</p>
                  </li>
                  <li className="flex flex-col gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Working Hours:
                      </strong>
                    </span>
                    <p> Monday to Friday, 9:00 AM - 6:00 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
