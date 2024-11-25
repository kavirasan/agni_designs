import React from "react";

const Button = (props) => {
  const { id, title, leftIcon, containerClass,rightIcon } = props;
  return (
    <button
      id={id}
      className={`group  relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-yellow-400 px-7 py-3 text-white ${containerClass}`}
    >
      {leftIcon}
      <span className="relative  incline-flex overflow-hidden  font-bold text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
