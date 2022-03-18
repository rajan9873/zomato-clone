import React from "react";

const ZomatoEmail = () => {
  return (
    <>
      <section className="zomato-email mx-auto bg-[#FFFBF7] mt-16 sm:mt-32 sm:flex justify-center py-8">
        <div className="zomato-email-a hidden sm:block w-60">
          <img className="w-full" src="zomato-c1.webp" alt="img" />
        </div>
        <div className="zomato-email-b mx-auto pt-5 px-2 sm:mx-0 max-w-[30rem] sm:ml-10">
          <h1 className="email-title text-[1.8rem] text-center font-montserrat font-medium sm:text-left sm:text-[2.5rem]">
            Get the Zomato App
          </h1>
          <p className="email-description text-center text-[#363636] text-[1rem] leading-[1.2rem] mt-2 sm:text-left sm:mt-3.5 sm:leading-7 px-1 font-montserrat">
            We will send you a link, open it on your phone to download the app
          </p>
          <div className="input-elements-container w-max mx-auto mt-7 sm:mx-0">
            <div className="email-radio-btn flex gap-4 sm:gap-8">
              <div className="input-container gap-1.5 flex">
                <input type="radio" name="contact" id="email" checked />
                <label className="text-[1rem] font-montserrat" for="email">
                  Email
                </label>
              </div>
              <div className="input-container gap-1.5 flex">
                <input type="radio" name="contact" id="phone" />
                <label className="text-[1rem] font-montserrat" for="phone">
                  Phone
                </label>
              </div>
            </div>
            <div className="email-input flex mx-auto justify-center gap-1 mt-3">
              <input
                className="email-input-field border-2 rounded-md w-[14.3rem] pl-2 py-1"
                placeholder="Email"
                type="text"
                name="email-info"
              />
              <button className="zomato-email-btn font-montserrat text-[0.8em] text-white px-[1.1em] py-[0.8em] rounded-md">
                Share
              </button>
            </div>
          </div>
          <div className="download-links flex items-center flex-col mt-[1.7rem] sm:items-start">
            <p className="download-title text-[#9c9c9c] text-sm font-montserrat">
              Download app from
            </p>
            <div className="download-links-container flex gap-3 mt-[1.1rem]">
              <img
                className="app-store-logo w-36"
                src="zomato-c2.webp"
                alt="app-store-logo"
              />
              <img
                className="play-store-logo w-36"
                src="zomato-c3.webp"
                alt="Google-play-logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ZomatoEmail;
