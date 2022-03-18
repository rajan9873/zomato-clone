import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer px-8 sm:px-28 mt-[4.6rem] sm:mt-28 bg-[#f8f8f8] pt-12">
        <div className="footer-top flex space-x-16 sm:justify-start sm:space-x-28">
          <div className="footer-a">
            <h1 className="font-semibold tracking-widest">COMPANY</h1>
            <ul className="footer-text space-y-1">
              <li>who we are</li>
              <li>blog</li>
              <li>careers</li>
              <li>report fraud</li>
              <li>contact</li>
              <li>investore relations</li>
            </ul>
          </div>
          <div className="footer-b">
            <h1 className="font-semibold tracking-widest">FOR FOODIES</h1>
            <ul className="footer-text space-y-1">
              <li>code of conduct</li>
              <li>community</li>
              <li>careers</li>
              <li>blogger help</li>
              <li>mobile apps</li>
            </ul>
          </div>
          <div className="footer-c hidden sm:block">
            <h1 className="font-semibold tracking-widest">FOR YOU</h1>
            <ul className="footer-text space-y-1">
              <li>privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>sitemap</li>
            </ul>
          </div>
          <div className="footer-d hidden sm:block">
            <h1 className="font-semibold tracking-widest">SOCIAL LINKS</h1>
            <div className="social-links flex">
              <div className="facebook-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 cvuzKA"
                >
                  <path d="M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"></path>
                </svg>
              </div>
            </div>
            <div className="store-links space-y-3">
              <img
                className="app-store-logo w-36 mt-4"
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
        <div className="footer-bottom border-t-[1px] border-gray-400 mt-7 pb-7">
          <p className="text-[0.84rem] mt-4">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2022 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};
export default Footer;
