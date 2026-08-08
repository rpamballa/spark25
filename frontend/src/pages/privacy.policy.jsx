import { useEffect, useState } from "react";
import Header from "../components/header.component";
import { Link } from "react-router-dom";
import {
  XIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import ContactUs from "../components/contact";

import logo from '../imgs/Logo_Landing.png'
import instagramIcon from '../imgs/instagram.png'

const PrivacyPolicyPage = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch("/privacy-policy.html");
        const text = await response.text();
        setHtmlContent(text);
      } catch (error) {
        console.error("Error fetching privacy policy: ", error);
      }
    };

    fetchHtmlContent();
  }, []);

  const toggleContactForm = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </main>

      <div id="footer" className="p-5">
        <div className="rounded-3xl min-h-[324px] bg-white pt-14 pb-6 md:px-96 px-10 text-center">
          <div className="max-w-[556px] mx-auto">
            <div className="text-3xl md:text-[32px] ">It's time to</div>
            <div className="text-3xl md:text-4xl text-purple">
              Accelerate Your Growth
            </div>
            <div className="text-xl text-dark-grey">
              The entire team @ Spark25 is ready to show you the way home
            </div>
            <div className="flex justify-center pt-6">
              <button
                onClick={toggleContactForm}
                className="flex items-center justify-center px-4 py-2 rounded-full ring-1 ring-fuchsia-700 hover:-translate-y-1 ease-linear duration-200"
              >
                <span className="px-2 md:px-4 md:text-[20px]">
                  Get Started Today
                </span>
                <div className="flex items-center justify-center w-8 h-8 bg-none rounded-full">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-28 px-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-20 pb-20">
            <div className="flex flex-col">
              <div className="flex items-center justify-start gap-3">
                <img
                  src={logo}
                  alt="Lesya Pishchevskaya"
                  className="relative inline-block h-25 w-24 object-center"
                />
                <p className="text-6xl px-3 text-white">Spark25</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-10">
              <div className="flex flex-col items-start text-white">
                <div className="text-lg font-bold underline pb-8 pt-4">
                  SOCIAL MEDIA
                </div>
                <div className="flex">
                  <div className="text-lg mr-6">
                    <Link to="https://www.instagram.com/spark25agency/?igsh=MWxqYmpwNnF5bDRoZg%3D%3D">
                      <img
                        src={instagramIcon}
                        className="rounded-lg w-10 h-10"
                      />
                    </Link>
                  </div>
                  <div className="text-lg mr-6">
                    <Link to="https://www.linkedin.com/company/spark25">
                      <LinkedinIcon className="rounded-lg w-10 h-10" />
                    </Link>
                  </div>
                  <div className="text-lg mr-6 ">
                    <Link
                      to="https://www.facebook.com/profile.php?id=61560794964936"
                      className="rounded-lg"
                    >
                      <FacebookIcon className="rounded-lg w-10 h-10" />
                    </Link>
                  </div>
                  <div className="text-lg">
                    <Link to="https://x.com/spark25agency">
                      <XIcon className="rounded-lg w-10 h-10" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="mt-6 md:mb-10">
                  <p className="mb-2 text-gray-400">Email us</p>
                  <a
                    href="mailto:info@spark25.com"
                    className="text-2xl text-white hover:text-gray-300"
                  >
                    info@spark25.com
                  </a>
                </div>
                <div className="mb-3">
                  <p className="mb-2 text-gray-400">Phone Number</p>
                  <a
                    href="tel:+16507399525"
                    className="text-2xl text-white hover:text-gray-300"
                  >
                    (650) 739-9525
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 text-white border-t-2 border-gray-500 pt-5">
            <div className="text-[14px]">2024 SPARK25. All Rights Reserved</div>
            <div className="text-[14px] text-right">
              Terms & Conditions | Privacy Policy
            </div>
          </div>
        </div>
      </div>
      <ContactUs isOpen={isContactOpen} toggleContactForm={toggleContactForm} />
    </>
  );
};

export default PrivacyPolicyPage;
