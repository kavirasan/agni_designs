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
      <div>
        {/* <CustomBanner
          // image={bim}
          title="Get Our Quote"
          description="This layout will provide a comprehensive, professional, and user-friendly experience for visitors. The content should emphasize your expertise, quality of service, and sustainable design practices, creating a solid impression of AGNI Design Consultants as a leader in MEP design and BIM services."
          overlayColor="rgba(0, 0, 0, 0.3)"
        /> */}
      </div>
     
      <ContactPage/>
      
      {/* <MasterForm /> */}
    </div>
  );
};

export default GetInTouchPage;
