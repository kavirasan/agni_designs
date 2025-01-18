import React from "react";
import four from "../../assets/new_agni_images/4.png";

const CaseStudy = ({ CsTitle, CsPara }) => {
  return (
    <div className="flex ">
      <div className="flex flex-col justify-center items-start mx-2 md:mx-40 gap-10 py-10">
        <p className="text-2xl font-bold text-center flex flex-col items-center ">
          {CsTitle}

          <span className="border-2 border-yellow-300 w-52 mt-2"></span>
        </p>
        <p className=" text-start md:text-start text-xs md:text-sm ">
          {CsPara}
        </p>
      </div>
      <img src={four} className="h-[40rem] w-[50rem] object-cover" />
    </div>
  );
};

export default CaseStudy;
