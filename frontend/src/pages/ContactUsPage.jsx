import React from "react";
import CustomBanner from "../components/CustomBanner";
import office from "../assets/new_agni_images/office2.jpg";

const ContactUsPage = () => {
  return (
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
            <img
              alt=""
              src={office}
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[30rem] object-cover"
            />
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
                      No 25B, Ramalingam Nagar, Kottivakkam, OMR Chennai 600041
                    </p>
                  </li>
                  <li className="flex flex-col gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Phone
                      </strong>
                    </span>
                    <p> +91 98848 41412 </p>
                  </li>
                  <li className="flex flex-col gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Email
                      </strong>
                    </span>
                    <p>info@agnimep.com</p>
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
