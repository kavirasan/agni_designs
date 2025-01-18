import React from "react";

const ContentDescription = ({ descriptionTitle, descriptionPara }) => {
  return (
    <div className="flex flex-col justify-center items-start mx-2 md:mx-40 gap-10 py-10">
      <p className="text-2xl font-bold text-center flex flex-col items-center ">
        {descriptionTitle}
        <span className="border-2 border-yellow-300 w-52 mt-2"></span>
      </p>
      <p className=" text-center md:text-start text-xs md:text-lg ">
        {descriptionPara}
      </p>
    </div>
  );
};

export default ContentDescription;
