import React from "react";
import CustomCard from "./CustomCard";

const CardList = ({ CardTitle, CardData }) => {
  return (
    <div className="flex flex-col justify-center items-center px-2 md:px-40 gap-10 py-10 bg-white ">
      <h1 className="text-center md:text-2xl font-bold ">
         {CardTitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-2 ">
        {CardData.map((data) => (
          <CustomCard
            CardHead={data.title}
            CardDescription={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
