import React from "react";
("use client");

import { Card } from "flowbite-react";
import four from "../../assets/new_agni_images/4.png";

const CustomCard = ({ CardHead, CardDescription, CardImage }) => {
  return (
    <Card
      className="max-w-sm rounded-2xl"
      renderImage={() => (
        <>
          {CardImage ? (
            <img
              // width={300}
              // height={300}
              src={CardImage}
              alt="image 1"
              className="rounded-t-2xl object-fill"
            />
          ) : (
            <div className="bg-black rounded-t-xl py-5">

            <p className="text-center font-bold  text-4xl p-10  text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-350 to-yellow-300">
              {" "}
              {CardHead && CardHead.split(" ")[0]}
            </p>
            </div>
          )}
        </>
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {CardHead}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {CardDescription}
      </p>
    </Card>
  );
};

export default CustomCard;
