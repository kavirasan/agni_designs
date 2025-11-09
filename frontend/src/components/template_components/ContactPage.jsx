import React, { useState } from "react";
import AnimatedTitle from "../TextAnimation/AnimatedTitle";
import office from "../../assets/new_agni_images/fulllogo.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.company) newErrors.company = "Company is required.";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be numeric.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Create the mailto link
      // const subject = encodeURIComponent("Contact Form Submission");
      // const body = encodeURIComponent(
      //   JSON.stringify(formData, null, 2)
      // );
      const subject = encodeURIComponent("Inquiry About Your Services");
      const body = encodeURIComponent(
        `Hi,\n\n` +
          `My name is ${formData.name}, and I am interested in exploring the services offered by Agni Design Consultants.\n\n` +
          `I am based in ${formData.city} and work at ${formData.company}.\n\n` +
          `You can reach me at ${formData.phone} or ${formData.email}.\n\n` +
          `I would appreciate it if you could provide me with more information regarding your design services, project methodologies, and any notable projects you have undertaken. Understanding your expertise will help us evaluate potential collaboration opportunities.\n\n` +
          `Thank you for your assistance. I look forward to your response.\n\n` +
          `Best regards,\n` +
          `${formData.name}\n` +
          `Client\n` +
          `${formData.company}\n` +
          `${formData.phone}`
      );

      const mailtoLink = `mailto:kavirasan@gmail.com?subject=${subject}&body=${body}`;

      // Open the default mail client
      window.location.href = mailtoLink;

      // Reset form
      setFormData({
        name: "",
        city: "",
        company: "",
        phone: "",
        email: "", // Add this line to reset the email field
        message: "",
      });
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <img src={office} alt="Office" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center mt-20">
        <AnimatedTitle
          title="Get In Touch"
          containerClass="!text-black text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        />
        <p className="text-lg/8 text-gray-600">Let's Talk</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Your Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              City
            </label>
            <div className="mt-2.5">
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
              {errors.company && (
                <p className="text-red-500">{errors.company}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="Short Description about your project..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
