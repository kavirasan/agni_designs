import React from "react";

const Button = (props) => {
  const { id, title, leftIcon, containerClass,rightIcon } = props;
  return (
    <button
      id={id}
      className={`group  relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 border-black/40 border bg-white text-black/80 ${containerClass}`}
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
