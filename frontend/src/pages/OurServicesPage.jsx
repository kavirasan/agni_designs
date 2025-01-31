import React, { useEffect, useState } from "react";
import ServicePage from "./page_template/Service_TemplatePage";
import ServiceTemplate from "./page_template/ServiceTemplate";
import img from "../assets/services/sus.jpg";
import { useLocation } from "react-router";

const OurServicesPage = () => {
  const location = useLocation();
  console.log(location.search.split("?")[2]);

  

  


  

 
  // const [PageSection, setPageSection] = useState({
  //   services: services,
  //   services1: services1,
  //   technicalDueDiligence: technicalDueDiligence,
  //   technicalDueDiligence1: technicalDueDiligence1,
  //   Validating_Value_Engineering: Validating_Value_Engineering,
  //   Validating_Value_Engineering1: Validating_Value_Engineering1,
  //   BIM: BIM,
  //   BIM1: BIM1,
  //   Thrid: Thrid,
  //   Thrid1: Thrid1,
  // });

  const [CurrentPage, setCurrentPage] = useState(location.search.split("?"));

  console.log(CurrentPage[1], CurrentPage[2]);

  return (
    <div>
     sfg
    </div>
  );
};

export default OurServicesPage;
