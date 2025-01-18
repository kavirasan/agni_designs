import React from "react";
("use client");

import { Card } from "flowbite-react";
import four from "../../assets/new_agni_images/4.png";

const CustomCard = ({ CardHead, CardDescription }) => {
  return (
    <Card
      className="max-w-sm rounded-2xl"
      renderImage={() => (
        <img
          width={500}
          height={500}
          src={four}
          alt="image 1"
          className="rounded-t-2xl"
        />
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
