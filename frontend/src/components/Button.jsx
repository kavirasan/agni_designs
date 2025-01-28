import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { id, title, leftIcon, containerClass,rightIcon,route } = props;
  return (
    <Link
      to={route}
      id={id}
      className={`group  relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 border-black/40 border bg-white text-black/80 ${containerClass}`}
      onClick={() => console.log("button clicked")}
    >
      {leftIcon}
      <span className="relative  incline-flex overflow-hidden  font-bold text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </Link>
  );
};

export default Button;
