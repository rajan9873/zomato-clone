import React from "react";

const LowerCards = () => {
  return (
    <>
      <section className="lower-cards grid grid-cols-2 mx-4 gap-3 mt-[1.16rem] max-w-[70rem] md:mx-auto md:px-4">
        <div className="card relative cursor-pointer hover:scale-105 ease-in-out duration-300 h-60">
          <img
            src="zomato-card-a1.webp"
            alt="card"
            className="card-img rounded-xl w-full h-full object-cover"
          />
          <div className="title-container bg-white px-4 py-4 sm:pt-3 sm:pb-4 sm:px-2 absolute w-full bottom-0 rounded-b-xl">
            <h1 className="card-titl text-gray-800 text-[0.9rem] lg:text-[1.18rem] lg:font-normal text-[rgb(54, 54, 54)] text-center">
              Order Food Online
            </h1>
          </div>
        </div>
        <div className="card relative cursor-pointer hover:scale-105 ease-in-out duration-500 h-60">
          <img
            src="zomato-card-a2.webp"
            alt="card"
            className="card-img rounded-xl w-full h-full object-cover"
          />
          <div className="title-container bg-white px-4 py-4 sm:pt-3 sm:pb-4 sm:px-2 absolute w-full bottom-0 rounded-b-xl">
            <h1 className="card-titl text-gray-800 text-[0.9rem] lg:text-[1.18rem] lg:font-normal text-[rgb(54, 54, 54)] text-center">
              Go Out For A Meal
            </h1>
          </div>
        </div>
        <div className="card relative cursor-pointer hover:scale-105 ease-in-out duration-500 h-60">
          <img
            src="zomato-card-a3.webp"
            alt="card"
            className="card-img rounded-xl w-full h-full object-cover"
          />
          <div className="title-container bg-white px-4 py-4 sm:pt-3 sm:pb-4 sm:px-2 absolute w-full bottom-0 rounded-b-xl">
            <h1 className="card-title text-gra86800 lg:text-[1.18rem] text-[0.9rem] lg:font-normal text-[rgb(54, 54, 54)]  text-center">
              Zomato Professional
            </h1>
          </div>
        </div>
        <div className="card relative cursor-pointer hover:scale-105 ease-in-out duration-500 h-60">
          <img
            src="zomato-card-a4.jpg"
            alt="card"
            className="card-img rounded-xl w-full h-full object-cover"
          />
          <div className="title-container bg-white px-4 py-4 sm:pt-3 sm:pb-4 sm:px-2 absolute w-full bottom-0 rounded-b-xl">
            <h1 className="card-title text-gra86800 lg:text-[1.18rem] text-[0.9rem] lg:font-normal text-[rgb(54, 54, 54)] text-center">
              Nightlife & Clubing
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default LowerCards;
