import React from "react";
import loading from "../assets/new_agni_images/loading.gif";

const LoadingAnimation = () => {
  return (
    <div className="fixed  z-50 w-screen h-screen object-contain bg-white/50">
      <div className="flex justify-center mt-64 ">
        <img src={loading} className="  w-40 h-40  " />
      </div>
    </div>
  );
};

export default LoadingAnimation;
