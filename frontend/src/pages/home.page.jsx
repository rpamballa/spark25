import React, { useState } from "react";
import Header from "../components/header.component";
import "@devnomic/marquee/dist/index.css";
import Spark25Marquee from "../components/spark25Marquee";
import axios from "axios";
import { AiFillLinkedin } from "react-icons/ai";
import ContactUs from "../components/contact";
import { Toaster, toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

import instagramIcon from "../imgs/instagram.png";

import { XIcon, FacebookIcon, LinkedinIcon } from "react-share";

import value1 from "../imgs/values/value1.png";
import value2 from "../imgs/values/value2.png";
import value3 from "../imgs/values/value3.png";
import value4 from "../imgs/values/value4.png";
import value5 from "../imgs/values/value5.png";
import value6 from "../imgs/values/value6.png";
import lightServices1 from "../imgs/services/lightServices1.png";
import lightServices2 from "../imgs/services/lightServices2.png";
import lightServices3 from "../imgs/services/lightServices3.png";
import lightServices4 from "../imgs/services/lightServices4.png";
import lightServices5 from "../imgs/services/lightServices5.png";
import lightServices6 from "../imgs/services/lightServices6.png";

import services1 from "../imgs/services/service1.png";
import services2 from "../imgs/services/service2.png";
import services3 from "../imgs/services/service3.png";
import services4 from "../imgs/services/service4.png";
import services5 from "../imgs/services/service5.png";
import services6 from "../imgs/services/service6.png";

import founder from "../imgs/founder1.png";
import logo from "../imgs/Vector.png";
import BlogSection from "../components/blog-section.component";
import { Link } from "react-router-dom";
import Clients from "../components/clients-section.component";



const HomePage = () => {
  const [email, setEmail] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { theme } = useSelector((state) => state.theme);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/subscribe`,
        {
          email,
        }
      );
      if (response.status === 200) {
        toast.success("Subscription successful!");
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Failed to subscribe. Please try again later.");
    }
  };

  const toggleContactForm = () => {
    setIsContactOpen(!isContactOpen);
  };

  // Flip to true when the blog launches publicly (also restore the header
  // links in header.component.jsx).
  const showBlogSection = false;

  return (
    <>
      <div className="relative">
        <Header />
        <Toaster />
        <div className="flex flex-col">
          <div id="get-start">
            <div
              id="hero"
              className="bg-contain md:bg-cover bg-no-repeat  h-72 md:h-[380px] xl:h-[550px] text-white "
            ></div>
            <div
              className={`md:p-20 text-center p-6 ${
                theme == "light"
                  ? "bg-white text-black"
                  : "bg-gradient-to-r from-[#030313] via-[#190638] to-[#2a0952] text-white"
              }`}
            >
              <div className="container mx-auto py-3">
                <div
                  className={`text-3xl md:text-4xl  pb-8 ${
                    theme == "light" ? "text-black " : "text-white "
                  } leading-none`}
                >
                  We fuel brands with digital marketing and design solutions
                  that spark growth.
                </div>
                <div className="flex justify-center md:pt-6">
                  <button
                    onClick={toggleContactForm}
                    className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-full ring-1 ring-fuchsia-700 hover:-translate-y-1 ease-linear duration-200 ${
                      theme == "light" ? "text-black " : "text-white "
                    } `}
                  >
                    <span className="px-2 md:px-4 md:text-[20px] ">
                      Get Started Today
                    </span>
                    <div className="flex items-center justify-center w-8 h-8 bg-none rounded-full">
                      <svg
                        className={`"w-6 h-6 " ${
                          theme == "light" ? "text-black " : "text-white "
                        } `}
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
          </div>

          <div id="brand" className=" h-[200px] ">
            <div className="flex items-center justify-center mt-10 md:mt-6   mb-6 bg-gray-200 relative z-10 bg-none bg-transparent">
              <p className="bg-[#2a0952] text-3xl md:text-4xl text-transparent bg-clip-text">
                Brand's We've Helped
              </p>
            </div>
            <Spark25Marquee />
          </div>

          <div
            id="services"
            className={`${
              theme == "light"
                ? "bg-white "
                : "bg-gradient-to-r from-[#030313] via-[#190638] to-[#2a0952] "
            }  pt-24 pb-10`}
          >
            <div className="flex justify-center px-10">
              {/* <p className="text-purple text-[26px] md:text-4xl leading-none">
                From Clients (with Love)
              </p> */}
            </div>
            {/* <div className="flex flex-row md:px-20 md:pt-10 p-5 pt-16">
              <Clients />
            </div> */}
            <div className="md:px-14 px-3 md:py-20 pt-5">
              <div
                className={`border-solid border-2 rounded-2xl ${
                  theme == "light" ? "border-black " : " border-white"
                }  px-11 py-10 md:py-10`}
              >
                <p className=" py-10 text-3xl text-center md:text-4xl text-purple">
                  Services
                </p>
                <div className="flex flex-wrap m-auto max-w-[1400px] justify-around">
                  {/* Service 1 */}
                  <div className="flex flex-col max-w-[375px] md:max-w-[425px] md:pb-32 pt-5 md:items-start items-center">
                    <img
                      src={theme == "light" ? lightServices1 : services1}
                      className="h-16 w-16"
                      alt="Service 1"
                    />
                    <div
                      className={`${
                        theme == "light" ? "text-black " : "text-white"
                      } text-[24px] py-3 text-center`}
                    >
                      Brand Awareness
                    </div>
                    <div
                      className={`${
                        theme == "light" ? "text-gray-700" : "text-gray-300 "
                      }  text-xl md:text-xl py-2 md:text-start text-center`}
                    >
                      Are you building a new business or want to raise awareness
                      about your offering?
                    </div>
                    <div className="flex justify-left pl-8 text-lg">
                      <ul
                        className={`list-disc ${
                          theme == "light" ? "text-black " : "text-white "
                        }`}
                      >
                        <li className="text-[14px]">
                          Content marketing (blog and video)
                        </li>
                        <li className="text-[14px]">SEO</li>
                        <li className="text-[14px]">
                          Social media (organic and paid)
                        </li>
                        <li className="text-[14px]">Influencer marketing</li>
                        <li className="text-[14px]">
                          Events, sponsorships, and partnerships
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Service 2 */}
                  <div className="flex flex-col max-w-[375px] md:max-w-[425px] md:pb-32 pt-5 md:items-start items-center">
                    <img
                      src={theme == "light" ? lightServices2 : services2}
                      className="h-16 w-16"
                      alt="Service 2"
                    />
                    <div
                      className={`${
                        theme == "light" ? "text-black " : "text-white"
                      } text-[24px] py-3 text-center`}
                    >
                      Lead Generation
                    </div>
                    <div
                      className={`${
                        theme == "light" ? "text-gray-700" : "text-gray-300 "
                      }  text-xl md:text-xl py-2 md:text-start text-center`}
                    >
                      Do you want to drive more client meetings, RSVP's, sign
                      ups, or new users?
                    </div>
                    <div className="flex justify-left pl-8 text-lg">
                      <ul
                        className={`list-disc ${
                          theme == "light" ? "text-black " : "text-white "
                        }`}
                      >
                        <li className="text-[14px]">
                          Paid ads (search and social)
                        </li>
                        <li className="text-[14px]">Email/SMS marketing</li>
                        <li className="text-[14px]">Webinars</li>
                        <li className="text-[14px]">Direct mail</li>
                        <li className="text-[14px]">
                          Referrals and affiliate marketing
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Individual Item 3 */}
                  <div className="flex flex-col max-w-[405px] md:max-w-[425px] md:pb-32 pt-5 md:items-start items-center">
                    <img
                      src={theme == "light" ? lightServices3 : services3}
                      className="h-16 w-16"
                    />
                    <div
                      className={`${
                        theme == "light" ? "text-black " : "text-white"
                      } text-[24px] py-3 text-center`}
                    >
                      Customer Success & Retention
                    </div>
                    <div
                      className={`${
                        theme == "light" ? "text-gray-700" : "text-gray-300 "
                      }  text-xl md:text-xl py-2 md:text-start text-center`}
                    >
                      Do you want your customer to keep coming back and buying
                      from you?
                    </div>
                    <div className="flex justify-left pl-8 text-lg">
                      <ul
                        className={`list-disc ${
                          theme == "light" ? "text-black " : "text-white "
                        }`}
                      >
                        <li className="text-[14px]">
                          Client success and onboarding processes
                        </li>
                        <li className="text-[14px]">Educational content</li>
                        <li className="text-[14px]">
                          Upsell and cross-sell campaigns
                        </li>
                        <li className="text-[14px]">Referral programs</li>
                        <li className="text-[14px]">Reviews</li>
                      </ul>
                    </div>
                  </div>

                  {/* Individual Item 4 */}
                  <div className="flex flex-col max-w-[375px] md:max-w-[425px] md:pb-32 pt-5 md:items-start items-center">
                    <img
                      src={theme == "light" ? lightServices4 : services4}
                      className="h-16 w-16"
                    />
                    <div
                      className={`${
                        theme == "light" ? "text-black " : "text-white"
                      } text-[24px] py-3 text-center`}
                    >
                      B2B Enterprise Consulting
                    </div>
                    <div
                      className={`${
                        theme == "light" ? "text-gray-700" : "text-gray-300 "
                      }  text-xl md:text-xl py-2 md:text-start text-center`}
                    >
                      Are you a business-to-business company and need assistance
                      with making processes more efficient?
                    </div>
                    <div className="flex justify-left pl-8 text-lg">
                      <ul
                        className={`list-disc ${
                          theme == "light" ? "text-black " : "text-white "
                        }`}
                      >
                        <li className="text-[14px]">
                          Marketing and cross-functional collaborative processes
                        </li>
                        <li className="text-[14px]">Budget forecasting</li>
                        <li className="text-[14px]">
                          Analytics/Measurement dashboards creation
                        </li>
                        <li className="text-[14px]">
                          Multi-touch point campaign design and execution
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Individual Item 5 */}
                  <div className="flex flex-col max-w-[375px] md:max-w-[425px] md:pb-32 pt-5 md:items-start items-center">
                    <img
                      src={theme == "light" ? lightServices5 : services5}
                      className="h-16 w-16"
                    />
                    <div
                      className={`${
                        theme == "light" ? "text-black " : "text-white"
                      } text-[24px] py-3 text-center`}
                    >
                      Web & App Development
                    </div>
                    <div
                      className={`${
                        theme == "light" ? "text-gray-700" : "text-gray-300 "
                      }  text-xl md:text-xl py-2 md:text-start text-center`}
                    >
                      Ready to build your website or optimize your app? We’d
                      love to partner and help you.
                    </div>
                    <div className="flex justify-left pl-8 text-lg">
                      <ul
                        className={`list-disc ${
                          theme == "light" ? "text-black " : "text-white "
                        }`}
                      >
                        <li className="text-[14px]">
                          Design new website optimized for your top conversion
                          goals
                        </li>
                        <li className="text-[14px]">
                          Develop your website or app
                        </li>
                        <li className="text-[14px]">
                          Optimize your website or app for SEO
                        </li>
                        <li className="text-[14px]">
                          Design collateral for your clients & marketing team
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Individual Item 6 */}
                  <div className="flex flex-col max-w-[375px] md:max-w-[425px] md:pb-10 mb-10 pt-5 md:items-start items-center">
                    <img
                      src={theme == "light" ? lightServices6 : services6}
                      className="h-16 w-16"
                    />
                    <div
                      className={`${
                        theme == "light" ? "text-black " : "text-white"
                      } text-[24px] py-3 text-center`}
                    >
                      Analytics & Dashboards
                    </div>
                    <div
                      className={`${
                        theme == "light" ? "text-gray-700" : "text-gray-300 "
                      }  text-xl md:text-xl py-2 md:text-start text-center`}
                    >
                      Working on bringing all your data in one beautiful
                      dashboard? We're here to help with:
                    </div>
                    <div className="flex justify-left pl-8 text-lg">
                      <ul
                        className={`list-disc ${
                          theme == "light" ? "text-black " : "text-white "
                        }`}
                      >
                        <li className="text-[14px]">
                          Identify your "north star" metric
                        </li>
                        <li className="text-[14px]">
                          Build a "one-stop" dashboard with your key growth
                          metrics
                        </li>
                        <li className="text-[14px]">
                          Bring data together from different sources
                        </li>
                        <li className="text-[14px]">
                          Visualize your data & metrics
                        </li>
                        <li className="text-[14px]">
                          Optimize your current analytics & measurement
                          solutions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button
                    onClick={toggleContactForm}
                    className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-full  ring-1 ring-fuchsia-700 hover:-translate-y-1 ease-linear duration-200 ${
                      theme == "light" ? "text-black " : "text-white"
                    }`}
                  >
                    <span className="px-2 md:px-4 md:text-[20px]">
                      Get Free Executive Feedback
                    </span>
                    <div className="flex items-center justify-center w-8 h-8 bg-none rounded-full">
                      <svg
                        className={`w-6 h-6 ${
                          theme == "light" ? "text-black " : "text-white"
                        }`}
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
          </div>

          {showBlogSection && (
          <div
            id="blog"
            className={`${
              theme == "light"
                ? "bg-white"
                : "bg-gradient-to-r from-[#030313] via-[#190638] to-[#2a0952]"
            }  `}
          >
            <div className="md:px-32 pb-20 px-5">
              <Link
                to="./blog"
                className="flex items-center w-36 text-3xl text-center text-purple md:text-left md:text-4xl pb-10 hover:-translate-y-1 ease-linear duration-200"
              >
                Blog
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill={theme === "light" ? "black" : "#8b46ff"}
                >
                  <g fill-rule="evenodd">
                    <path d="M15.53 9.17l-6.72 6.71 -.71-.71 6.71-6.72 .7.7Z"></path>
                    <path d="M15.03 8.96h-4.45v-1h4.94c.27 0 .5.22.5.5v4.94h-1V8.95Z"></path>
                  </g>
                </svg>
              </Link>
              <BlogSection />
              {/* <div className="grid md:grid-cols-2 md:gap-10 md:px-10">
                <div className="flex flex-col justify-left">
                  <div
                    className={`text-2xl ${
                      theme == "light" ? "text-black" : "text-white"
                    }`}
                  >
                    STAY IN TOUCH
                  </div>
                  <img
                    src="/assets/newsletter.png"
                    className="md:w-fit h-fit pt-5"
                  ></img>
                  <div className="card-mail flex md:mb-11 my-10">
                    <input
                      type="email"
                      className="border-l border-t border-b border-gray-200 rounded-l-full w-[240px] md:w-[320px] text-xl md:px-3 px-1 md:py-2"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                    ></input>
                    <button
                      className="text-black font-bold capitalize md:py-2 md:text-xl rounded-r-full md:px-6 py-[5.5px] px-2 tracking-widest bg-[linear-gradient(to_right,_#6552cb,_#fd95ff)]"
                      onClick={handleSubscribe}
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                  <div className="text-left text-xl italic text-dark-grey">
                    We don’t share your email or spam.
                  </div>
                </div>
                <div>
                  <div
                    className={`md:text-xl text-xl mt-6 max-w-[595px] tracking-wide ${
                      theme == "light" ? "text-black" : "text-white"
                    }`}
                  >
                    Never miss a thing. Subscribe here to get insightful
                    marketing stories, tips, and tricks delivered straight to
                    your inbox.
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          )}

          <div
            id="about-us"
            className="px-14 md:py-28 py-10 pb-20 bg-[#e9deff]"
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <div className="flex flex-col pt-11">
                <div className="text-3xl md:text-4xl text-purple pb-8 pt-3 leading-none">
                  Spark25 is your go-to full-stack marketing partner.
                </div>
                <div className="text-[16px] pb-8">
                  From high-impact go-to-market campaigns to technical search
                  engine optimization (SEO), our combined 50+ years of marketing
                  expertise will help you achieve sustainable growth.
                </div>
                <div className="text-[16px]">
                  We've worked with the Meta's and Google's of the world, as
                  well as small growing startups and ad agencies, and we've
                  learned to see the “big picture” and excel in executing
                  campaigns across organic social, paid ads, SEO, email,
                  webinars, events, affiliate marketing, influencer marketing,
                  referrals, reviews, and more.
                </div>
                {/* <div className="flex items-center justify-start gap-3 md:pt-24 pt-10">
                  <img
                    src={founder}
                    alt="Lesya Pishchevskaya"
                    className="relative inline-block h-14 w-14 !rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col">
                    <p className="text-2xl font-semibold">
                      Lesya Pishchevskaya
                    </p>
                    <p className="text-xl text-gray-500">Founder</p>
                  </div>
                  <Link to="https://www.linkedin.com/in/lesyap/">
                    <AiFillLinkedin className="w-10 h-10 ml-5" />
                  </Link>
                </div> */}
              </div>
              <img src="/assets/rectangle.png"></img>
            </div>
            <div className="text-center text-3xl md:text-4xl text-purple mt-10 pt-24 pb-16">
              Our Values
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-10 md:px-60">
              <div className="flex flex-col items-center max-w-[225px] mx-auto">
                <img src={value6} className="h-20 w-20 " />
                <div className="md:text-2xl text-xl text-center pt-3 font-semibold">
                  Be a superhero for your team and clients
                </div>
              </div>
              <div className="flex flex-col items-center max-w-[225px] mx-auto">
                <img src={value1} className="h-20 w-20 " />
                <div className="md:text-2xl text-xl text-center pt-3 font-semibold">
                  Stay authentic, be You
                </div>
              </div>
              <div className="flex flex-col items-center max-w-[225px] mx-auto">
                <img src={value2} className="h-20 w-20 " />
                <div className="md:text-2xl text-xl text-center pt-3 font-semibold">
                  Spark creativity with a scoop of data
                </div>
              </div>
              <div className="flex flex-col items-center max-w-[225px] mx-auto">
                <img src={value3} className="h-20 w-20 " />
                <div className="md:text-2xl text-xl text-center pt-3 font-semibold">
                  Approach with a solution-focused mindset
                </div>
              </div>
              <div className="flex flex-col items-center max-w-[225px] mx-auto">
                <img src={value4} className="h-20 w-20 " />
                <div className="md:text-2xl text-xl text-center pt-3 font-semibold">
                  Pivot and adapt as needed
                </div>
              </div>
              <div className="flex flex-col items-center max-w-[225px] mx-auto">
                <img src={value5} className="h-20 w-20 " />
                <div className="md:text-2xl text-xl text-center pt-3 font-semibold">
                  Grow from wins and mistakes alike
                </div>
              </div>
            </div>
          </div>

          <div id="footer" className="p-5">
            <div className="rounded-3xl min-h-[324px] bg-white pt-14 pb-6 md:px-96 px-10 text-center">
              <div className="max-w-[556px] mx-auto">
                <div className="text-3xl md:text-[32px] ">It's time to</div>
                <div className="text-3xl md:text-4xl text-purple">
                  Accelerate Your Growth!
                </div>
                <div className="text-xl text-dark-grey">
                  We look forward to hearing from you.
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
            <div className="py-16 px-10">
              <div>
                <div className="flex flex-col justify-between h-[350px] md:h-[200px] md:justify-around md:items-center md:flex-row">
                  <div className="flex items-center justify-start gap-3">
                    <img
                      src={logo}
                      alt="Lesya Pishchevskaya"
                      className="relative inline-block h-25 w-24 object-center"
                    />
                    <p className="text-6xl px-3 font-bold text-white">
                      Spark25
                    </p>
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

                  <div className="mt-6 md:mb-10">
                    <p className="mb-2 text-gray-400">Email us</p>
                    <a
                      href="mailto:lesya@spark25.com"
                      className="text-2xl text-white hover:text-gray-300"
                    >
                      lesya@spark25.com
                    </a>
                  </div>
                  {/* <div className="mb-3">
                    <p className="mb-2 text-gray-400">Call Us</p>
                    <a
                      href="tel:+16507399525"
                      className="text-2xl text-white hover:text-gray-300"
                    >
                      (650) 739-9525
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 text-white border-t-2 px-6 border-gray-500 pt-5">
              <div className="text-[14px]">
                2024 SPARK25. All Rights Reserved
              </div>
              <div className="text-[14px] text-right">
                <Link className="hover:underline" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs isOpen={isContactOpen} toggleContactForm={toggleContactForm} />
    </>
  );
};

export default HomePage;
