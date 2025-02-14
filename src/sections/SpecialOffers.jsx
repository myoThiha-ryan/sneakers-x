import React from "react";
import { offer } from "../assets/images/index.js";
import { arrowRight } from "../assets/icons/index.js";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Looking for the latest, trendiest sneakers? We've got you covered!
          From classic must-haves to exclusive drops, our collection is packed
          with comfort, style, and performance.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
