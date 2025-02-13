import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} className="w-[280px] h-[280px]" alt={name} />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray leading-normal">
          (4.0)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red leading-normal text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
