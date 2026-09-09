import SiteHeader from "../components/site-header.component";
import SiteFooter from "../components/site-footer.component";

import lesyaPhoto from "../imgs/lesya.jpg";

const TAGLINE =
  "Marketing \u0026 Growth Strategist with a Journalist\u2019s Curiosity";

const LEAD =
  "Lesya Pishchevskaya is the Founder of Spark25, a B2B SaaS growth consultancy helping Founders and C-Suite leaders uncover revenue leaks, activate high-impact growth opportunities, and build more valuable businesses. Her work spans growth strategy, lifecycle marketing, Customer Success, customer engagement, retention, expansion, AI and automation, and cross-functional execution across Marketing, Sales, and Customer Success.";

const BIO = [
  {
    label: "GROWTH",
    text: "Lesya is a senior marketing and growth leader with 15+ years of experience across global technology companies, high-growth startups, nonprofits, and entrepreneurial ventures. Her career includes work with Meta, Google, RingCentral, ABC Fitness/Glofox, Dollar Shave Club, HungerRush, Aiify, and other technology companies. She also served as Head of Marketing for Women in Automation from 2025–2026. Through Spark25, she works with B2B SaaS companies to identify the growth opportunities most likely to increase revenue, customer value, and enterprise value, including opportunities to use AI and automation to improve efficiency, personalization, customer engagement, and execution.",
  },
  {
    label: "JOURNALISM",
    text: "Alongside her consulting work, Lesya has a background in journalism, interviewing, video, and storytelling. She earned a Master of Science in Journalism from Columbia University and has produced journalism, video, and interview work for AlleyWatch, BayFashion Magazine, and the Silicon Valley Open Doors International Startup Investment Conference. Her interviewing style combines a journalist’s curiosity with a marketer’s understanding of audience, positioning, brand, and cultural relevance.",
  },
  {
    label: "OFF THE CLOCK",
    text: "Outside of work, Lesya enjoys traveling and exploring different cultures, mentoring UC Berkeley alumni, and performing stand-up comedy.",
  },
];

const CREDENTIALS = [
  ["M.S. JOURNALISM", "COLUMBIA UNIVERSITY"],
  ["B.S. BUSINESS ADMINISTRATION", "UC BERKELEY"],
  ["B.A. MASS COMMUNICATIONS", "UC BERKELEY"],
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

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-14 items-start pb-12 md:pb-14">
          <div>
            <p className="text-[clamp(19px,2.1vw,26px)] leading-[1.35] font-medium max-w-[760px] tracking-[-0.3px]">
              {TAGLINE}
            </p>
            <p className="text-[15.5px] md:text-[17px] leading-[1.75] text-[#3a3833] max-w-[720px] pt-6">
              {LEAD}
            </p>

            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6 border-t-2 border-[#101010] pt-6 mt-8">
              {CREDENTIALS.map(([term, detail]) => (
                <div key={term}>
                  <dt className="font-[900] text-[clamp(17px,1.7vw,22px)] tracking-[-0.7px] leading-[1.1]">
                    {term}
                  </dt>
                  <dd className="spark-mono text-[10.5px] tracking-[1.2px] text-[#55534d] pt-2 leading-[1.6]">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>

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
