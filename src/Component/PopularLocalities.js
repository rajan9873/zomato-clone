import React from "react";

const PopularLocalities = () => {
  const localities = [
    "Indiranagar (952 places)",
    "Marathahali (1795 places)",
    "Whitefield (2050 places)",
    "HSR (1418 places)",
    "Jayanagar (698 places)",
    "JP nagar (1944 places)",
    "MG Road (102 places)",
    "BTM (2066 places)",
    "Maleswaram (467 places)",
    "Ballendur(655 places)",
    "Brookfield(789 places)",
    "rajajinagar(678 places)",
    "Brigade Road(360 places)",
    "Church Street(167 places)",
    "Kammanhali(123 places)",
    "Old City Road(278 places)",
    "Brokergor(550 places)",
    "Frazer Town (319 places)",
  ];

  return (
    <>
      <section className="popular-localities mx-4 md:mx-auto mt-[8rem] max-w-[70rem] md:px-4">
        <h1 className="localities-title font-medium sm:font-normal text-[#363636] text-lg sm:text-4xl sm:text-center my-7">
          Popular localities in and around Benguluru
        </h1>
        <div className="grid sm:grid-cols-3 gap-y-4 sm:gap-y-8 sm:gap-x-6 sm:mt-[3rem]">
          {localities.map((place) => {
            return (
              <div className="localities-container w-full border-[1px] flex items-center py-[1em] px-[1.5rem] justify-between rounded-md shadow-sm hover:shadow-md cursor-pointer">
                <div className="localities-text text-sm sm:text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                  {place}
                </div>
                <div className="right-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1C1C1C"
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="sc-rbbb40-0 jKmKoK"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default PopularLocalities;
