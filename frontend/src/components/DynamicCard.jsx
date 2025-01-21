import React from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const DynamicCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full border-2 border-black/10 rounded-2xl">
      {/* <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0  size-full  object-cover object-center "
      /> */}
      {isComingSoon === true ? (
        <img
          src={src}
          className="absolute left-0 top-0  size-full  object-cover object-center "
        />
      ) : (
        <img
          src={src}
          className="absolute left-0 top-24  size-full object-contain object-center rounded-xl"
        />
      )}

      <div className="relative z-10 flex size-full  justify-between p-5 text-black/70 bg-white/30">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-96 text-xs md:text-base">{description}</p>
          )}

          <Button
            id="helo"
            title="More Info"
            rightIcon={<TiLocationArrow />}
            containerClass="flex items-center justify-center gap-1 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
