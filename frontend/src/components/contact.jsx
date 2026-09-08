import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useSelector } from "react-redux";

import contactBg from '../imgs/contact.png'

const ContactUs = ({ isOpen, toggleContactForm }) => {
  const [formData, setFormData] = useState({
    FNAME: "",
    EMAIL: "",
    SERVICE: "",
    PROJECT: "",
  });
  const [loading, setLoading] = useState(false)
  const { theme } = useSelector((state) => state.theme);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Construct form data as a URL encoded string
    const data = new URLSearchParams();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        data.append(key, formData[key]);
      }
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      toast.success("Subscription successful!");
      setFormData({ FNAME: "", EMAIL: "", SERVICE: "", PROJECT: "" });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      id="contact-form"
      className={`fixed inset-0 text-white z-[9999] transform ${
        isOpen ? "translate-y-0" : "-translate-y-[1500px]"
      } transition-transform duration-500 ease-in-out h-full w-full ${theme === "light" ? "bg-white" : `contactBg`}`}
    >
      {/* X button to close the form */}
      <button
        onClick={toggleContactForm}
        className={`absolute top-9 md:top-8 right-10 md:right-16 text-3xl ${theme === "light"? "bg-[#4e4e4e]" : "bg-gradient-to-r from-[#030313] via-[#190638] to-[#2a0952] ring-fuchsia-700"} drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1 ring-1 0 w-10 h-10 flex items-center justify-center text-white rounded-full z-50`}
      >
        &times;
      </button>
      <Toaster />
      <div className="flex flex-col md:mt-5 justify-center items-center lg:flex-row h-full p-10 pb-20 overflow-auto">
        {/* Contact info */}
        <div className=" md:w-1/2 p-5 md:p-10">
          <div className="md:mb-52">
            <h2 className={`text-3xl md:text-4xl md:mb-5 ${ theme === "light" ? "text-black" : ""}`}>Let's Talk Growth</h2>
            <p className="text-xl text-gray-400 italic mb-5">
              Tell us where your biggest growth challenge is today. We'll get back to you within 1-2 business days.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-10">
              <p className="mb-2 text-gray-400">Email us</p>
              <a
                href="mailto:lesya@spark25.com"
                className={`text-3xl hover:text-gray-300 ${theme === "light" ? "text-black" : "text-white"}`}
              >
                lesya@spark25.com
              </a>
            </div>
            {/* <div className="mb-3 md:mb-10">
              <p className="mb-2 text-gray-400">Phone Number</p>
              <a
                href="tel:+16507399525"
                className={`text-3xl hover:text-gray-300 ${theme === "light" ? "text-black" : "text-white"}`}
              >
                (650) 739-9525
              </a>
            </div> */}
          </div>
        </div>
        {/* Form Section */}
        <div className="md:w-1/2 pt-10 p-4 md:p-10">
          <form
            className="flex flex-col space-y-6"
            action="https://spark25.us22.list-manage.com/subscribe/post?u=4a44174a6622243487b178749&amp;id=f47c0df71a&amp;f_id=009fdbe1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <div>
              <label className={`block text-lg md:text-2xl font-medium ${theme === "light" ? "text-black" : ""}`}>
                Name
              </label>
              <input
                type="text"
                name="FNAME" // Correct key to match formData
                className={`border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-gray-600 text-lg md:text-2xl p-2 w-full ${theme === "light" ? "text-black" : ""}`}
                required
                value={formData.FNAME}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={`block text-lg md:text-2xl font-medium ${theme === "light" ? "text-black" : ""}`}>
                Work Email
              </label>
              <input
                type="email"
                name="EMAIL" // Correct key to match formData
                className="border-b-2  border-gray-400 bg-transparent focus:outline-none focus:border-gray-600 text-lg md:text-2xl p-2 w-full"
                required
                value={formData.EMAIL}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className={`block text-lg md:text-2xl font-medium ${theme === "light" ? "text-black" : ""}`}>
                What Can We Help With?
              </label>
              <select
                name="SERVICE" // Update to match the formData key for consistency
                className={`border-b-2 mt-3 -m-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-600 focus:bg-purple text-lg md:text-2xl p-2 w-full ${theme === "light" ? "text-black" : ""}`}
                required
                value={formData.SERVICE}
                onChange={handleChange}
              >
               
                <option value="Revenue & Growth Strategy">
               
                  Revenue & Growth Strategy
               
                </option>
               
                <option value="Demand & Lifecycle Growth">
               
                  Demand & Lifecycle Growth
               
                </option>
               
                <option value="Customer Success & Retention">
               
                  Customer Success & Retention
               
                </option>
               
                <option value="Expansion & Revenue Growth">
               
                  Expansion & Revenue Growth
               
                </option>
               
                <option value="Cross-Functional Growth Execution">
               
                  Cross-Functional Growth Execution
               
                </option>
               
                <option value="Events & Executive Engagement">
               
                  Events & Executive Engagement
               
                </option>
               
                <option value="Growth Analytics & Measurement">
               
                  Growth Analytics & Measurement
               
                </option>
               
                <option value="Not Sure - Help Me Identify the Opportunity">
               
                  Not Sure - Help Me Identify the Opportunity
               
                </option>
              </select>
            </div>
            <div>
              <label className={`block text-lg md:text-2xl font-medium ${theme === "light" ? "text-black" : ""}`}>
                Tell Us About Your Growth Challenge
              </label>
              <textarea
                className="border-b-2 border-gray-400 bg-transparent focus:outline-none focus:border-gray-600 text-lg md:text-2xl p-2 mb-6 md:mb-24 w-full"
                name="PROJECT" // Correct key to match formData
                required
                value={formData.PROJECT}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-center md:pt-6 w-full">
              <button
                type="submit"
                className={`flex justify-center items-center ${theme === "light"? "bg-[#4e4e4e]" : "bg-gradient-to-r from-[#030313] via-[#190638] to-[#2a0952] ring-fuchsia-700"} drop-shadow-md w-full hover:drop-shadow-xl text-white text-lg md:text-2xl h-[72px] ring-1  rounded-full transition-all duration-300 hover:-translate-y-1`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
                <div className="flex items-center justify-center w-8 h-8 bg-none rounded-full">
                  <svg
                    className={`"w-6 h-6 "  `}
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
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
              ></div>
              <div
                className="response"
                id="mce-success-response"
              ></div>
            </div>
            <div aria-hidden="true" className="hidden">
              <input
                type="text"
                name="b_4a44174a6622243487b178749_f47c0df71a"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="clear hidden">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


