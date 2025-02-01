import React, { useEffect } from "react";
import CustomBanner from "../components/CustomBanner";
import MasterForm from "../components/form_components/MasterForm";
import bim from "../assets/new_agni_images/4.png";
import ContactPage from "../components/template_components/ContactPage";
const GetInTouchPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div></div>
      <ContactPage />
    </div>
  );
};

export default GetInTouchPage;
