import SiteHeader from "../components/site-header.component";
import SiteFooter from "../components/site-footer.component";

import lesyaPhoto from "../imgs/lesya.jpg";

const LEAD =
  "Lesya Pishchevskaya, Founder of Spark25 LLC, is a marketing, video interview, and media consultant and host partnering with Francine Mbvoumbo, Founder of Mothers to Daughters (M2D), for events throughout New York Fashion Week Fall 2026. As a special media liaison for M2D, Lesya helps bring conversations with designers, founders, creatives, and industry leaders to life through on-camera interviews and video storytelling. Their collaboration explores creatives' and designers' positioning in the age of AI, followed by broader conversations about fashion, creativity, technology, mentorship, and intergenerational connection.";

const BIO = [
  {
    label: "JOURNALISM",
    text: "Lesya earned a Master of Science in Journalism from Columbia University and has produced journalism, video, and interview work for AlleyWatch, BayFashion Magazine, and the Silicon Valley Open Doors International Startup Investment Conference. Her interviewing style combines a journalist's curiosity with a marketer's understanding of audience, brand, and cultural relevance. In 2017, Lesya acted as Julia, a fashion house owner, in the independent film The Reditus, produced by Christiano Evans.",
  },
  {
    label: "GROWTH",
    text: "Professionally, Lesya is a senior marketing and growth leader with experience spanning global technology companies, high-growth startups, nonprofits, and entrepreneurial ventures. Her career includes work with Meta, Google, Apple, Disney, Dollar Shave Club, and Fuel: Print on Demand, and she served as Head of Marketing for Women in Automation from 2025–2026. Through Spark25, she focuses on SaaS and SMB marketing, ecommerce, and personal brands, advising organizations on marketing strategy, brand positioning, digital and lifecycle marketing, customer engagement, content, events, and growth, with hands-on experience building and scaling online businesses and brands.",
  },
  {
    label: "OFF THE CLOCK",
    text: "Outside of work, Lesya enjoys traveling and exploring different cultures, mentoring UC Berkeley alumni, and performing stand-up comedy.",
  },
];

const CREDENTIALS = [
  ["M.S. JOURNALISM", "COLUMBIA UNIVERSITY"],
  ["SENIOR MARKETING", "META / GOOGLE"],
  ["15+ YEARS", "B2B SAAS & TECHNOLOGY"],
];

const SECTION_X = "px-5 md:px-12";

const AboutPage = () => (
  <div className="spark-page min-h-screen">
    <SiteHeader />

    <main className="relative overflow-hidden">
      <div
        className="spark-grid-lines absolute inset-0 pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      {/* ------------------------------------------------------------- Masthead */}
      <section className={`relative ${SECTION_X} pt-10 md:pt-12`}>
        <p className="spark-mono text-[10px] md:text-[11px] tracking-[1.5px] text-[#4f2fe0] pb-6 md:pb-7">
          THE FOUNDER
        </p>

        <h1 className="font-[900] leading-[0.9] tracking-[-2px] md:tracking-[-4px] text-[clamp(40px,7vw,98px)]">
          LESYA
          <br />
          <span className="text-[#4f2fe0]">PISHCHEVSKAYA</span>
        </h1>
        <div className="spark-bar h-[6px] md:h-[10px] bg-[#101010] my-4 md:my-5" />

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-14 items-start pb-10 md:pb-12">
          <div>
            <p className="text-[18px] md:text-[22px] leading-[1.45] font-medium max-w-[720px]">
              Founder of Spark25. Marketing and media consultant, video
              interview host, journalist and storyteller.
            </p>
            <p className="text-[15.5px] md:text-[17px] leading-[1.75] text-[#3a3833] max-w-[720px] pt-6">
              {LEAD}
            </p>

          </div>

          <figure className="m-0">
            <img
              src={lesyaPhoto}
              alt="Lesya Pishchevskaya, Founder of Spark25"
              className="w-full h-auto block grayscale contrast-[1.05]"
            />
            <figcaption className="spark-mono text-[10px] tracking-[1.5px] text-[#55534d] pt-3 leading-[1.7] border-t border-[rgba(16,16,16,0.3)] mt-3">
              LESYA PISHCHEVSKAYA
              <br />
              FOUNDER, SPARK25 LLC
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ----------------------------------------------------------- Credentials */}
      <section className={`relative ${SECTION_X} pb-12 md:pb-14`}>
        <dl className="grid sm:grid-cols-3 gap-6 border-t-2 border-[#101010] pt-7">
          {CREDENTIALS.map(([term, detail]) => (
            <div key={term}>
              <dt className="font-[900] text-[clamp(20px,2.2vw,28px)] tracking-[-1px] leading-[1.1]">
                {term}
              </dt>
              <dd className="spark-mono text-[10.5px] tracking-[1.2px] text-[#55534d] pt-2.5 leading-[1.6]">
                {detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------------------ Bio */}
      <section className={`relative ${SECTION_X}`}>
        <div className="flex flex-col">
          {BIO.map((entry, index) => (
            <article
              key={entry.label}
              className={`grid lg:grid-cols-[190px_1fr] gap-3 lg:gap-10 py-7 md:py-8 ${
                index === 0
                  ? "border-t-2 border-[#101010]"
                  : "border-t border-[#101010]"
              } ${
                index === BIO.length - 1 ? "border-b-2 border-[#101010]" : ""
              }`}
            >
              <p className="spark-mono text-[11px] tracking-[1.5px] text-[#4f2fe0] lg:pt-1.5">
                {entry.label}
              </p>
              <p className="text-[15.5px] md:text-[17px] leading-[1.75] text-[#3a3833] max-w-[900px]">
                {entry.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------- Contact */}
      <section className={`relative ${SECTION_X} py-12 md:py-14`}>
        <div className="grid lg:grid-cols-[1fr_320px] bg-[#101010] text-[#eceae4]">
          <div className="p-8 md:p-12">
            <h2 className="font-[900] text-[clamp(28px,3.6vw,48px)] leading-[0.98] tracking-[-1.5px] md:tracking-[-2px]">
              WORK WITH
              <br />
              <span className="text-[#a5a2f0]">SPARK25.</span>
            </h2>
            <p className="text-[16px] md:text-[16.5px] leading-[1.7] text-[rgba(236,234,228,0.72)] pt-5 max-w-[620px]">
              Growth strategy, lifecycle marketing and Customer Success for B2B
              SaaS companies — plus interview and event work for brands that
              need a stronger story.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-7 spark-mono text-[11px] tracking-[1.5px]">
              <a
                href="https://www.linkedin.com/in/lesyap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a5a2f0] hover:text-[#eceae4]"
              >
                LINKEDIN ↗
              </a>
              <a
                href="https://www.instagram.com/spark25agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a5a2f0] hover:text-[#eceae4]"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </div>
          <a
            href="mailto:lesya@spark25.com"
            className="bg-[#4f2fe0] flex items-center justify-center p-8 hover:bg-[#3a1fb0] transition-colors no-underline"
          >
            <span className="text-center">
              <span className="spark-mono block text-[10.5px] tracking-[1.5px] text-[rgba(236,234,228,0.8)] pb-2.5">
                GET IN TOUCH
              </span>
              <span className="font-[900] text-[20px] md:text-[21px] tracking-[-0.5px] leading-[1.2] block text-[#eceae4]">
                lesya@spark25.com
              </span>
            </span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  </div>
);

export default AboutPage;
