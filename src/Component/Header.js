import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faCaretDown,
  faSearch,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [barActive, setBarActive] = useState(false);

  return (
    <>
      <header className=" pb-28 px-3 relative overflow-hidden">
        <img
          className="background-img absolute inset-0 object-cover h-full w-full opacity-100 z-[-1] scale-110"
          src="zomato_hero1.webp"
          alt=""
        />
        <div className="header-main flex justify-between xl:px-16 px-3 pt-5">
          <div className="text-white items-center gap-1 flex">
            <div
              onClick={() => setBarActive(true)}
              className="bars md:hidden cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} className="text-[1.35rem]" />
            </div>
            <span className="hidden md:block">
              <img src="downloadAppIcon.svg" alt="downloadapp" />
            </span>
            <p className="text-sm font-semibold hidden md:block">Get the app</p>
          </div>
          {/* nav absolute */}

          <div
            className={
              barActive
                ? `Nav fixed inset-0 w-full h-[100vh] bg-[#ffffff] z-10 md:static md:bg-transparent md:w-auto md:h-auto ease-in-out duration-300 md:translate-y-0`
                : `Nav fixed inset-0 w-full h-[100vh] bg-[#ffffff] z-10 md:static md:bg-transparent md:w-auto md:h-auto ease-in-out duration-300 translate-y-[-100vh] md:translate-y-0`
            }
          >
            <div className="cancel-icon-container md:hidden ml-6 mt-3 flex justify-between items-center">
              <FontAwesomeIcon
                onClick={() => setBarActive(false)}
                className="text-2xl cursor-pointer"
                icon={faTimes}
              />
              <img className="w-40 pr-4" src="zomato-bar-logo1.webp" alt="" />
            </div>
            <div className="Nav-container mt-[20vh] ml-12 space-y-6 flex flex-col md:justify-around md:space-y-0 md:space-x-9 md:flex-row md:mt-0 md:ml-0">
              <div className="md:text-white font-montserrat text-gray-500 text-lg hover:text-gray-800 hover:cursor-pointer md:hover:text-gray-400">
                Add restaurant
              </div>
              <div className="md:text-white font-montserrat text-gray-500 text-lg hover:text-gray-800 hover:cursor-pointer md:hover:text-gray-400">
                Log in
              </div>
              <div className="md:text-white font-montserrat text-gray-500 text-lg hover:text-gray-800 hover:cursor-pointer md:hover:text-gray-400">
                Sign up
              </div>
            </div>
          </div>

          {/*  */}
        </div>
        <div className="logo mt-14">
          <img
            src="zomato-bar-logo2.webp"
            alt="logo"
            className="logo-img w-[16rem] sm:w-[18rem] mx-auto"
          />
        </div>
        <h1 className="header-title font-montserrat text-white text-[2.18rem]  text-center mt-7 font-normal">
          Discover the best food & drinks in Delhi NCR
        </h1>
        <div className="search-bar flex bg-white max-w-[48rem] mx-auto pl-4  py-0.5 mt-6 items-center justify-around rounded-md">
          <div className="flex items-center py-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF7E8B"
              width="25"
              height="20"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              className="location-icon sc-rbbb40-0 iRDDBk"
            >
              <title>location-fill</title>
              <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
            </svg>
            <div className="ml-1 mr-1.5 text-center w-full font-montserrat whitespace-nowrap font-light text-gray-800 text-sm">
              Ywca, 1,Ashok RD,Hanu
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F4F4F"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              className="sc-rbbb40-0 ezrcri"
            >
              <title>down-triangle</title>
              <path d="M20 5.42l-10 10-10-10h20z"></path>
            </svg>
          </div>
          <div className="w-[2px] h-[22px] bg-gray-300 ml-[0.65rem] mr-[1rem]"></div>
          <div className="flex w-full items-center h-full mt-[-2px]">
            <div className="search-icon pt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#828282"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 iwHbVQ"
              >
                <title>Search</title>
                <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
              </svg>
            </div>
            <input
              className="header-input h-full w-full ml-3.5 border-none outline-none h-4rem"
              placeholder="Search for reastraunt, cuisin or a dish"
              type="text"
            />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
