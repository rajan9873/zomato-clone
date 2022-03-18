import React from "react";

const UpperCards = () => {
  return (
    <>
      <section className="upper-cards mx-4 mt-20 max-w-[70rem] md:mx-auto md:px-4">
        <h1 className="upper-card-title text-2xl font-semibold font-montserrat md:text-[2rem]">
          Collection
        </h1>
        <p className="upper-cards-description mt-1 md:mt-3 text-gray-600 font-light leading-5 text-[0.96rem] sm:text-[1.05rem]">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
        </p>
        <div className="upper-grid-container grid grid-cols-2 gap-2.5 mt-7">
          <div className="upper-card h-[19rem] relative rounded-md">
            <img
              src="zomato-card-b1.webp"
              className="w-full h-full object-cover mix-blend-darken rounded-md"
              alt="img"
            />
            <div className="card-text-container absolute pl-2.5 pb-1 bottom-1 rounded-md">
              <p className="card-text font-montserrat pr-1 text-white font-normal text-[1rem] sm:text-[1.1rem]">
                Valentine's Special
              </p>
              <h6 className="text-white text-[0.87rem] sm:text-[0.94rem]">
                29 places
                <span className="inline-block ml-1">
                  <img src="rightArrow.svg" alt="" />
                </span>
              </h6>
            </div>
          </div>
          <div className="upper-card h-[19rem] relative rounded-md">
            <img
              src="zomato-card-b2.webp"
              className="w-full h-full object-cover mix-blend-darken rounded-md"
              alt="img"
            />
            <div className="card-text-container absolute pl-2.5 pb-1 bottom-1 rounded-md">
              <p className="card-text font-montserrat pr-1 text-white font-normal text-[1rem] sm:text-[1.1rem]">
                Newly Opened
              </p>
              <h6 className="text-white text-[0.87rem] sm:text-[0.94rem]">
                16 places
                <span className="inline-block ml-1">
                  <img src="rightArrow.svg" alt="" />
                </span>
              </h6>
            </div>
          </div>
          <div className="upper-card h-[19rem] relative rounded-md">
            <img
              src="zomato-card-b3.webp"
              className="w-full h-full object-cover mix-blend-darken rounded-md"
              alt="img"
            />
            <div className="card-text-container absolute pl-2.5 pb-1 bottom-1 rounded-md">
              <p className="card-text font-montserrat pr-1 text-white font-normal text-[1rem] sm:text-[1.1rem]">
                Trending This Week
              </p>
              <h6 className="text-white text-[0.87rem] sm:text-[0.94rem]">
                30 places
                <span className="inline-block ml-1">
                  <img src="rightArrow.svg" alt="" />
                </span>
              </h6>
            </div>
          </div>
          <div className="upper-card h-[19rem] relative rounded-md">
            <img
              src="zomato-card-b4.webp"
              className="w-full h-full object-cover mix-blend-darken rounded-md"
              alt="img"
            />
            <div className="card-text-container absolute pl-2.5 pb-1 bottom-1 rounded-md">
              <p className="card-text font-montserrat pr-1 text-white font-normal text-[1rem] sm:text-[1.1rem]">
                Best of Delhi NCR
              </p>
              <h6 className="text-white text-[0.87rem] sm:text-[0.94rem]">
                156 places
                <span className="inline-block ml-1">
                  <img src="rightArrow.svg" alt="" />
                </span>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UpperCards;
