import { useState } from "react";

import SiteHeader from "../components/site-header.component";
import SiteFooter from "../components/site-footer.component";
import ContactUs from "../components/contact";

/* The three-step thread that runs through the whole page. */
const THREAD = [
  {
    step: "STEP 01",
    title: ["UNCOVER", "REVENUE LEAKS"],
    body: "Find where pipeline, customer value and revenue are being lost across the lifecycle.",
  },
  {
    step: "STEP 02",
    title: ["ACTIVATE", "GROWTH LEVERS"],
    body: "Prioritise and execute the initiatives most likely to move revenue and retention.",
  },
  {
    step: "STEP 03",
    title: ["BUILD", "EXIT VALUE"],
    body: "Compound customer value into a more durable, more valuable business.",
  },
];

const CLIENTS = [
  "GOOGLE",
  "META",
  "RINGCENTRAL",
  "ABC FITNESS",
  "HUNGERRUSH",
  "AIIFY",
  "APPLE MUSIC",
  "COCA-COLA",
  "DISNEY PARKS",
  "EXPEDIA",
  "MERKLE",
];

const SERVICES = [
  {
    id: "001",
    title: "Revenue & Growth Strategy",
    hook: "Not sure what to fix first?",
    body: "We help you identify and prioritise the growth opportunities most likely to increase revenue and company value.",
    items: [
      "Growth opportunity audits",
      "Revenue leakage analysis",
      "Customer and market research",
      "Growth prioritisation",
      "GTM strategy",
      "Executive and stakeholder interviews",
      "Measurement and growth planning",
    ],
  },
  {
    id: "002",
    title: "Demand & Lifecycle Growth",
    hook: "You may already have more pipeline potential than you think.",
    body: "We help you generate more value from prospects and leads already in your ecosystem.",
    items: [
      "Lead nurture and lifecycle strategy",
      "Dormant and recycled lead reactivation",
      "Email and CRM programs",
      "Segmentation and personalisation",
      "Conversion optimisation",
      "Upsell and cross-sell programs",
      "Lifecycle experimentation",
    ],
  },
  {
    id: "003",
    title: "Customer Success & Growth",
    hook: "Turn more customers into successful, engaged, expanding accounts.",
    body: "We help B2B SaaS companies improve the customer lifecycle from onboarding through retention, expansion, renewal, and win-back.",
    items: [
      "Customer onboarding and activation",
      "Customer journey optimisation",
      "Adoption and engagement programs",
      "Retention and churn prevention",
      "Expansion and renewal strategy",
      "Customer win-back",
      "Customer Success processes",
      "Voice-of-customer interviews",
    ],
  },
  {
    id: "004",
    title: "Cross-Functional Growth Execution",
    hook: "Growth slows when Marketing, Sales, and Customer Success are solving different problems.",
    body: "We help leaders create clearer priorities, ownership, handoffs, and shared growth goals across Marketing, Sales, and Customer Success so the business can execute faster.",
    items: [
      "Marketing, Sales & CS alignment",
      "Lifecycle ownership and handoffs",
      "Growth operating processes",
      "Executive and stakeholder interviews",
      "Cross-functional workshops",
      "Measurement and accountability",
      "Strategic initiative leadership",
    ],
  },
  {
    id: "005",
    title: "Events & Executive Engagement",
    hook: "Conversations that deepen relationships with prospects, customers, and industry leaders.",
    body: "Create experiences and conversations that build trust with the people who decide.",
    items: [
      "Executive interviews",
      "Customer interviews",
      "Executive roundtables",
      "B2B events and webinars",
      "Customer advisory programs",
      "Event strategy and programming",
      "Thought-leadership content",
    ],
  },
  {
    id: "006",
    title: "Growth Analytics & Measurement",
    hook: "Know what is actually driving pipeline, customer value, and growth.",
    body: "Measurement that shows which levers moved the business — and which did not.",
    items: [
      "Growth KPI frameworks",
      "Lifecycle measurement",
      "Executive dashboards",
      "Funnel and conversion analysis",
      "Customer Success metrics",
      "Campaign measurement",
      "Experimentation frameworks",
      "Revenue opportunity tracking",
    ],
  },
];

const BREAKDOWNS = [
  "Demand that never turns into pipeline.",
  "Customers who take too long to reach value.",
  "Retention and expansion opportunities that go unnoticed.",
  "Marketing, Sales, and Customer Success operating from different priorities.",
  "Founders and executives still too involved in keeping growth initiatives moving.",
];

/*
 * Client testimonials, carried over from the existing site. Two entries render
 * as two columns; adding or removing one adjusts the layout automatically.
 */
const TESTIMONIALS = [
  {
    quote:
      "She's a dynamic leader skilled at seeing the market opportunity and building a multi-channel strategy designed to drive new pipeline, increase pipeline velocity, and drive win rate.",
    name: "MICHAEL MAST",
    title: "VICE-PRESIDENT & PRODUCT MARKETING EXECUTIVE",
  },
  {
    quote:
      "Lesya is a true data-driven marketer who cares about a customer's needs first — everything she delivers is well thought out and detail-oriented. I'm impressed with the patience and persistence with which Lesya overcomes obstacles and the flexibility she applies to any challenges.",
    name: "OLENA MALTSEVA",
    title: "SENIOR MARKETING PROGRAM MANAGER, WEB AT DATABRICKS",
  },
];

const SECTION_X = "px-5 md:px-12";

const HomePage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const toggleContactForm = () => setIsContactOpen((open) => !open);

  return (
    <div className="spark-page min-h-screen">
      <SiteHeader />

      <main className="relative overflow-hidden">
        <div
          className="spark-grid-lines absolute inset-0 pointer-events-none hidden md:block"
          aria-hidden="true"
        />

        {/* ---------------------------------------------------------------- Hero */}
        <section className={`relative ${SECTION_X} pt-10 md:pt-12`}>
          <p className="spark-mono text-[10px] md:text-[11px] tracking-[1.5px] text-[#4f2fe0] pb-6 md:pb-7">
            B2B SAAS GROWTH CONSULTANCY — SF / NY
          </p>

          <h1 className="font-[900] leading-[0.9] tracking-[-2px] md:tracking-[-4.5px] text-[clamp(40px,7.4vw,104px)]">
            UNCOVER
            <br />
            <span className="text-[#b9b6ae]">REVENUE LEAKS.</span>
          </h1>
          <div className="spark-bar h-[6px] md:h-[10px] bg-[#4f2fe0] my-2.5" />
          <h2 className="font-[900] leading-[0.9] tracking-[-2px] md:tracking-[-4.5px] text-[clamp(40px,7.4vw,104px)]">
            ACTIVATE
            <br />
            <span className="text-[#4f2fe0]">GROWTH LEVERS.</span>
          </h2>
          <div className="spark-bar h-[6px] md:h-[10px] bg-[#101010] my-2.5" />
          <h2 className="font-[900] leading-[0.9] tracking-[-2px] md:tracking-[-4.5px] text-[clamp(40px,7.4vw,104px)]">
            BUILD
            <br />
            EXIT VALUE.
          </h2>

          <div className="grid lg:grid-cols-[1fr_330px] gap-8 lg:gap-14 items-end pt-10 md:pt-12 pb-10 md:pb-12">
            <p className="text-[17px] md:text-[19px] leading-[1.6] max-w-[760px]">
              Spark25 helps Founders and C-Suite leaders at B2B SaaS companies
              identify and solve the growth opportunities most likely to
              increase revenue, customer value, and enterprise value.
            </p>
            <button
              type="button"
              onClick={toggleContactForm}
              className="bg-[#101010] text-[#eceae4] px-6 py-6 text-left hover:bg-[#4f2fe0] transition-colors"
            >
              <span className="spark-mono block text-[10.5px] tracking-[1.5px] text-[#a5a2f0] pb-2">
                START HERE
              </span>
              <span className="font-[900] text-[20px] md:text-[21px] tracking-[-0.5px] leading-[1.15] block">
                UNCOVER YOUR GROWTH OPPORTUNITIES →
              </span>
            </button>
          </div>
        </section>

        {/* ------------------------------------------------------- Client roster */}
        <section className={`relative ${SECTION_X} pb-7`}>
          <div className="border-t-2 border-[#101010] pt-5 flex flex-col md:flex-row md:justify-between md:items-baseline gap-3">
            <h2 className="font-[900] text-[20px] md:text-[27px] tracking-[-1px] max-w-[640px]">
              EXPERIENCE ACROSS HIGH-GROWTH TECHNOLOGY & CONSUMER BRANDS
            </h2>
            <p className="spark-mono text-[10.5px] md:text-[11px] tracking-[1.2px] text-[#55534d] md:text-right leading-[1.7] md:max-w-[320px]">
              15+ YEARS ACROSS B2B SAAS, TECHNOLOGY, LIFECYCLE GROWTH AND
              CUSTOMER SUCCESS
            </p>
          </div>
        </section>

        <div className="relative bg-[#101010] text-[#eceae4] py-3.5 overflow-hidden">
          <div className="spark-tape spark-mono text-[12px] md:text-[13px] tracking-[2px]">
            {[0, 1].map((copy) => (
              <div key={copy} className="whitespace-nowrap pr-8">
                {CLIENTS.map((client) => `${client} // `).join("")}
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------ The thread */}
        <section className={`relative ${SECTION_X} pt-14 md:pt-16`}>
          <p className="spark-mono text-[10px] md:text-[11px] tracking-[1.5px] text-[#4f2fe0] pb-6">
            THE THREAD
          </p>
          <div className="grid md:grid-cols-3 border-t-2 border-[#101010]">
            {THREAD.map((item, index) => (
              <div
                key={item.step}
                className={`py-7 md:py-8 md:px-8 ${
                  index === 0 ? "md:pl-0" : ""
                } ${index === 2 ? "md:pr-0" : ""} ${
                  index < 2
                    ? "md:border-r border-[rgba(16,16,16,0.25)] border-b md:border-b-0"
                    : ""
                }`}
              >
                <p className="spark-mono text-[11px] text-[#4f2fe0] pb-3.5">
                  {item.step}
                </p>
                <h3 className="font-[900] text-[clamp(28px,3.2vw,40px)] tracking-[-1.5px] leading-[0.95]">
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-[#3a3833] pt-3.5">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------- Services */}
        <section id="services" className={`relative ${SECTION_X} pt-14 md:pt-16`}>
          <p className="spark-mono text-[10px] md:text-[11px] tracking-[1.5px] text-[#4f2fe0] pb-6">
            SERVICES
          </p>
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 items-start pb-8">
            <h2 className="font-[900] text-[clamp(32px,4.6vw,62px)] leading-[0.94] tracking-[-1.5px] md:tracking-[-2.5px]">
              WHERE IS YOUR BUSINESS LEAVING REVENUE ON THE TABLE?
            </h2>
            <div>
              <p className="text-[17px] md:text-[18px] leading-[1.6] font-medium pb-3.5">
                Growth problems rarely live inside one department.
              </p>
              <p className="text-[15.5px] md:text-[16px] leading-[1.7] text-[#3a3833]">
                We help Founders and C-Suite leaders uncover where revenue and
                customer value are being lost across Marketing, Sales, Customer
                Success, and the customer lifecycle — then prioritise and solve
                the opportunities that matter most.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            {SERVICES.map((service, index) => (
              <article
                key={service.title}
                className={`grid lg:grid-cols-[1fr_1.35fr] gap-4 lg:gap-8 py-7 md:py-8 ${
                  index === 0
                    ? "border-t-2 border-[#101010]"
                    : "border-t border-[#101010]"
                } ${
                  index === SERVICES.length - 1
                    ? "border-b-2 border-[#101010]"
                    : ""
                }`}
              >
                <div>
                  <h3 className="font-[900] text-[clamp(23px,2.5vw,31px)] tracking-[-1px] leading-[1.03]">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#4f2fe0] font-medium pt-3">
                    {service.hook}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] md:text-[15.5px] leading-[1.7] text-[#3a3833] pb-4">
                    {service.body}
                  </p>
                  <ul className="spark-mono text-[12px] leading-[1.95] text-[#55534d] sm:columns-2 sm:gap-8">
                    {service.items.map((item) => (
                      <li key={item}>&gt; {item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------------- Mid-page CTA */}
        <section className={`relative ${SECTION_X} py-12 md:py-14`}>
          <div className="grid lg:grid-cols-[1fr_330px] bg-[#4f2fe0] text-[#eceae4]">
            <div className="p-8 md:p-12">
              <h2 className="font-[900] text-[clamp(30px,3.8vw,50px)] leading-[0.98] tracking-[-1.5px] md:tracking-[-2px]">
                NOT SURE WHERE YOUR BIGGEST GROWTH OPPORTUNITY IS?
              </h2>
              <p className="text-[16px] md:text-[16.5px] leading-[1.7] text-[rgba(236,234,228,0.88)] pt-5 max-w-[720px]">
                If you're a Founder or C-Suite leader at a B2B SaaS company,
                we'll help you identify where pipeline, customer value, or
                revenue may be leaking — and what to address first.
              </p>
            </div>
            <button
              type="button"
              onClick={toggleContactForm}
              className="bg-[#101010] flex items-center justify-center p-8 hover:bg-[#000000] transition-colors"
            >
              <span className="text-center">
                <span className="spark-mono block text-[10.5px] tracking-[1.5px] text-[#a5a2f0] pb-2.5">
                  NEXT STEP
                </span>
                <span className="font-[900] text-[22px] md:text-[23px] tracking-[-0.5px] leading-[1.15] block">
                  BOOK A GROWTH OPPORTUNITY CALL
                </span>
              </span>
            </button>
          </div>
        </section>

        {/* ------------------------------------------------------------ The studio */}
        <section className={`relative ${SECTION_X}`}>
          <p className="spark-mono text-[10px] md:text-[11px] tracking-[1.5px] text-[#4f2fe0] pb-6">
            THE STUDIO
          </p>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start border-t-2 border-[#101010] pt-7">
            <h2 className="font-[900] text-[clamp(26px,2.9vw,38px)] leading-[1.05] tracking-[-1.5px]">
              SPARK25 IS A B2B SAAS GROWTH CONSULTANCY FOCUSED ON THE
              OPPORTUNITIES BETWEEN ACQUISITION AND LONG-TERM CUSTOMER VALUE.
            </h2>
            <div className="text-[15.5px] md:text-[16px] leading-[1.75] text-[#3a3833] flex flex-col gap-4">
              <p>
                We help Founders and C-Suite leaders find where revenue is being
                lost across Marketing, Sales, Customer Success, and the customer
                lifecycle — then prioritise and execute the initiatives most
                likely to improve growth.
              </p>
              <p>
                Our work spans demand generation, lifecycle marketing, Customer
                Success, retention, expansion, GTM, analytics, executive
                interviewing, events, and cross-functional execution.
              </p>
              <p>
                With 15+ years of experience across companies including Google,
                Meta, RingCentral, ABC Fitness/Glofox, HungerRush, Aiify, and
                other technology businesses, we bring both strategic perspective
                and hands-on execution.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- Where growth breaks */}
        <section className={`relative ${SECTION_X} pt-12 md:pt-14`}>
          <h2 className="font-[900] text-[clamp(24px,2.6vw,34px)] tracking-[-1.2px] pb-6">
            WE FOCUS ON WHERE B2B SAAS GROWTH BREAKS DOWN
          </h2>
          <ol className="flex flex-col">
            {BREAKDOWNS.map((line, index) => (
              <li
                key={line}
                className={`grid grid-cols-[46px_1fr] md:grid-cols-[74px_1fr] gap-4 md:gap-8 py-4 md:py-5 border-t border-[rgba(16,16,16,0.3)] items-baseline ${
                  index === BREAKDOWNS.length - 1
                    ? "border-b-2 border-b-[#101010]"
                    : ""
                }`}
              >
                <span className="spark-mono text-[11.5px] text-[#4f2fe0]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[17px] md:text-[21px] leading-[1.45] font-medium">
                  {line}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#3a3833] pt-6 max-w-[780px]">
            Spark25 helps turn those gaps into focused, measurable growth
            opportunities.
          </p>
        </section>

        {/* ----------------------------------------------------------- Testimonial */}
        <section className={`relative ${SECTION_X} pt-12 md:pt-14`}>
          <div className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-9">
            <p
              className="spark-mono text-[11px] tracking-[2px] text-[#55534d] hidden md:block"
              style={{ writingMode: "vertical-rl" }}
            >
              TESTIMONY
            </p>
            <div
              className={`border-t-2 border-[#101010] pt-7 grid gap-10 ${
                TESTIMONIALS.length > 1 ? "md:grid-cols-2" : ""
              }`}
            >
              {TESTIMONIALS.map((item) => (
                <figure key={item.name} className="m-0">
                  <blockquote className="text-[19px] md:text-[24px] leading-[1.45] font-medium tracking-[-0.3px] m-0">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="spark-mono text-[11px] tracking-[1.5px] text-[#55534d] pt-5 leading-[1.7]">
                    {item.name}
                    <br />
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ Final CTA */}
        <section className={`relative ${SECTION_X} pt-10 md:pt-12 pb-12`}>
          <div className="grid lg:grid-cols-[1fr_320px] bg-[#101010] text-[#eceae4]">
            <div className="p-8 md:p-12">
              <h2 className="font-[900] text-[clamp(28px,3.9vw,52px)] leading-[0.98] tracking-[-1.5px] md:tracking-[-2px]">
                BUILD MORE REVENUE.
                <br />
                MORE CUSTOMER VALUE.
                <br />
                <span className="text-[#a5a2f0]">MORE ENTERPRISE VALUE.</span>
              </h2>
              <p className="text-[16px] md:text-[16.5px] leading-[1.7] text-[rgba(236,234,228,0.72)] pt-5 max-w-[640px]">
                Let's uncover the growth opportunities that can make your B2B
                SaaS company more valuable.
              </p>
            </div>
            <button
              type="button"
              onClick={toggleContactForm}
              className="bg-[#4f2fe0] flex items-center justify-center p-8 hover:bg-[#3a1fb0] transition-colors"
            >
              <span className="text-center">
                <span className="font-[900] text-[21px] md:text-[22px] tracking-[-0.5px] leading-[1.2] block">
                  UNCOVER YOUR GROWTH OPPORTUNITIES
                </span>
                <span className="spark-mono block text-[12px] pt-3.5 text-[rgba(236,234,228,0.85)]">
                  lesya@spark25.com
                </span>
              </span>
            </button>
          </div>
        </section>

        <SiteFooter />
      </main>

      <ContactUs isOpen={isContactOpen} toggleContactForm={toggleContactForm} />
    </div>
  );
};

export default HomePage;
