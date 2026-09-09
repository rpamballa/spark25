import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

const SERVICE_OPTIONS = [
  "Revenue & Growth Strategy",
  "Demand & Lifecycle Growth",
  "Customer Success & Retention",
  "Expansion & Revenue Growth",
  "Cross-Functional Growth Execution",
  "Events & Executive Engagement",
  "Growth Analytics & Measurement",
  "Not Sure - Help Me Identify the Opportunity",
];

const LABEL =
  "block spark-mono text-[10.5px] tracking-[1.5px] text-[#55534d] pb-2";
const FIELD =
  "w-full bg-transparent border-b-2 border-[#101010] text-[17px] md:text-[19px] py-2.5 focus:outline-none focus:border-[#4f2fe0] transition-colors";

const ContactUs = ({ isOpen, toggleContactForm }) => {
  const [formData, setFormData] = useState({
    FNAME: "",
    EMAIL: "",
    SERVICE: "",
    PROJECT: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      toast.success("Thanks — we'll be in touch within 1-2 business days.");
      setFormData({ FNAME: "", EMAIL: "", SERVICE: "", PROJECT: "" });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      id="contact-form"
      className={`spark-page fixed inset-0 z-[9999] bg-[#eceae4] text-[#101010] overflow-y-auto transform ${
        isOpen ? "translate-y-0" : "-translate-y-[1500px]"
      } transition-transform duration-500 ease-in-out`}
    >
      <Toaster />

      <div className="flex items-center justify-between px-5 md:px-12 py-3.5 border-b border-[#101010] sticky top-0 bg-[#eceae4] z-10">
        <span className="font-[900] text-[20px] md:text-[24px] tracking-[-1px]">
          SPARK25
        </span>
        <button
          type="button"
          onClick={toggleContactForm}
          aria-label="Close contact form"
          className="spark-mono text-[11px] tracking-[1.5px] bg-[#101010] text-[#eceae4] px-3 py-1.5 hover:bg-[#4f2fe0] transition-colors"
        >
          [ CLOSE &times; ]
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 px-5 md:px-12 py-10 md:py-14 max-w-[1440px] mx-auto">
        {/* ------------------------------------------------------------ Intro */}
        <div>
          <p className="spark-mono text-[10px] md:text-[11px] tracking-[1.5px] text-[#4f2fe0] pb-6">
            CONTACT
          </p>
          <h2 className="font-[900] text-[clamp(34px,5vw,64px)] leading-[0.95] tracking-[-2px]">
            LET&rsquo;S TALK
            <br />
            <span className="text-[#4f2fe0]">GROWTH.</span>
          </h2>
          <div className="spark-bar h-[6px] md:h-[8px] bg-[#101010] my-5" />
          <p className="text-[16px] md:text-[17px] leading-[1.7] text-[#3a3833] max-w-[520px]">
            Tell us where your biggest growth challenge is today. We&rsquo;ll get
            back to you within 1-2 business days.
          </p>

          <div className="border-t-2 border-[#101010] mt-9 pt-6">
            <p className="spark-mono text-[10.5px] tracking-[1.5px] text-[#55534d] pb-2">
              EMAIL US
            </p>
            <a
              href="mailto:lesya@spark25.com"
              className="font-[900] text-[clamp(20px,2.4vw,30px)] tracking-[-1px] text-[#101010] hover:text-[#4f2fe0] transition-colors no-underline"
            >
              lesya@spark25.com
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------------- Form */}
        <form
          className="flex flex-col gap-7"
          onSubmit={handleSubmit}
          action="https://spark25.us22.list-manage.com/subscribe/post?u=4a44174a6622243487b178749&amp;id=f47c0df71a&amp;f_id=009fdbe1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <div>
            <label htmlFor="contact-name" className={LABEL}>
              NAME
            </label>
            <input
              id="contact-name"
              type="text"
              name="FNAME"
              className={FIELD}
              required
              value={formData.FNAME}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={LABEL}>
              WORK EMAIL
            </label>
            <input
              id="contact-email"
              type="email"
              name="EMAIL"
              className={FIELD}
              required
              value={formData.EMAIL}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="contact-service" className={LABEL}>
              WHAT CAN WE HELP WITH?
            </label>
            <select
              id="contact-service"
              name="SERVICE"
              className={FIELD}
              required
              value={formData.SERVICE}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select an area…
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-project" className={LABEL}>
              TELL US ABOUT YOUR GROWTH CHALLENGE
            </label>
            <textarea
              id="contact-project"
              name="PROJECT"
              rows={5}
              className={`${FIELD} resize-y`}
              required
              value={formData.PROJECT}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#101010] text-[#eceae4] font-[900] text-[18px] md:text-[20px] tracking-[-0.5px] py-5 px-8 hover:bg-[#4f2fe0] transition-colors disabled:opacity-60 flex items-center justify-between gap-4"
          >
            <span>{loading ? "SENDING…" : "SEND IT"}</span>
            <span aria-hidden="true">&#8594;</span>
          </button>

          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response"></div>
            <div className="response" id="mce-success-response"></div>
          </div>
          <div aria-hidden="true" className="hidden">
            <input
              type="text"
              name="b_4a44174a6622243487b178749_f47c0df71a"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
