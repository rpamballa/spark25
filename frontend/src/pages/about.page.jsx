import { useSelector } from "react-redux";
import Header from "../components/header.component";

import lesyaPhoto from "../imgs/lesya.jpg";

const bioParagraphs = [
  "Lesya Pishchevskaya, Founder of Spark25 LLC, is a marketing, video interview, and media consultant and host partnering with Francine Mbvoumbo, Founder of Mothers to Daughters (M2D), for events throughout New York Fashion Week Fall 2026. As a special media liaison for M2D, Lesya helps bring conversations with designers, founders, creatives, and industry leaders to life through on-camera interviews and video storytelling. Their collaboration explores creatives’ and designers’ positioning in the age of AI, followed by broader conversations about fashion, creativity, technology, mentorship, and intergenerational connection.",
  "Lesya earned a Master of Science in Journalism from Columbia University and has produced journalism, video, and interview work for AlleyWatch, BayFashion Magazine, and the Silicon Valley Open Doors International Startup Investment Conference. Her interviewing style combines a journalist’s curiosity with a marketer’s understanding of audience, brand, and cultural relevance. In 2017, Lesya acted as Julia, a fashion house owner, in the independent film The Reditus, produced by Christiano Evans.",
  "Professionally, Lesya is a senior marketing and growth leader with experience spanning global technology companies, high-growth startups, nonprofits, and entrepreneurial ventures. Her career includes work with Meta, Google, Apple, Disney, Dollar Shave Club, and Fuel: Print on Demand, and she served as Head of Marketing for Women in Automation from 2025–2026. Through Spark25, she focuses on SaaS and SMB marketing, ecommerce, and personal brands, advising organizations on marketing strategy, brand positioning, digital and lifecycle marketing, customer engagement, content, events, and growth, with hands-on experience building and scaling online businesses and brands.",
  "Outside of work, Lesya enjoys traveling and exploring different cultures, mentoring UC Berkeley alumni, and performing stand-up comedy.",
];

const AboutPage = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <Header />
      <main
        className={`min-h-screen ${
          theme == "light"
            ? "bg-white text-black"
            : "bg-gradient-to-r from-[#030313] via-[#190638] to-[#2a0952] text-white"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-14 md:py-24">
          <div className="grid md:grid-cols-[380px_1fr] grid-cols-1 gap-10 md:gap-16 items-start">
            <div className="mx-auto md:mx-0 w-full max-w-[380px]">
              <img
                src={lesyaPhoto}
                alt="Lesya Pishchevskaya, Founder of Spark25"
                className="w-full rounded-2xl bg-[#e9deff] object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl text-purple leading-tight pb-3">
                Lesya Pishchevskaya
              </h1>
              <p
                className={`text-xl md:text-2xl pb-8 ${
                  theme == "light" ? "text-dark-grey" : "text-gray-300"
                }`}
              >
                Founder of Spark25 &mdash; Marketing &amp; Media Consultant,
                Video Interview Host, Journalist &amp; Storyteller
              </p>

              {bioParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-[16px] md:text-xl leading-relaxed pb-6"
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="mailto:lesya@spark25.com"
                  className={`px-6 py-2 rounded-full ring-1 ring-fuchsia-700 text-xl ${
                    theme == "light" ? "text-black" : "text-white"
                  }`}
                >
                  lesya@spark25.com
                </a>
                <a
                  href="https://www.linkedin.com/in/lesyap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 rounded-full ring-1 ring-fuchsia-700 text-xl ${
                    theme == "light" ? "text-black" : "text-white"
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/spark25agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 rounded-full ring-1 ring-fuchsia-700 text-xl ${
                    theme == "light" ? "text-black" : "text-white"
                  }`}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
