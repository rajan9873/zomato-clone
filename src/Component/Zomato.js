import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import LowerCards from "./LowerCards.js";
import PopularLocalities from "./PopularLocalities.js";
import UpFooter from "./UpFooter.js";
import UpperCards from "./UpperCards.js";
import ZomatoEmail from "./ZomatoEmail.js";

const Zomato = () => {
  return (
    <>
      <Header />
      <LowerCards />
      <UpperCards />
      <PopularLocalities />
      <ZomatoEmail />
      <UpFooter />
      <Footer />
    </>
  );
};
export default Zomato;
