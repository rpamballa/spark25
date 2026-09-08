import { Link } from "react-router-dom";

/** Shared footer for the marketing pages, matching the Brutalist Grid design. */
const SiteFooter = () => (
  <footer className="relative px-5 md:px-12 border-t border-[#101010] py-5 flex flex-col md:flex-row md:justify-between gap-2 spark-mono text-[10px] md:text-[10.5px] tracking-[1.5px] text-[#55534d]">
    <p>SPARK25 LLC — B2B SAAS GROWTH, LIFECYCLE &amp; CUSTOMER SUCCESS</p>
    <p className="flex flex-wrap gap-x-2">
      <Link to="/" className="hover:text-[#4f2fe0]">
        HOME
      </Link>
      <span aria-hidden="true">/</span>
      <Link to="/about" className="hover:text-[#4f2fe0]">
        ABOUT
      </Link>
      <span aria-hidden="true">/</span>
      <Link to="/privacy-policy" className="hover:text-[#4f2fe0]">
        PRIVACY
      </Link>
      <span aria-hidden="true">/</span>
      <a
        href="https://www.linkedin.com/in/lesyap"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#4f2fe0]"
      >
        LINKEDIN
      </a>
      <span aria-hidden="true">/</span>
      <a
        href="https://www.instagram.com/spark25agency"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#4f2fe0]"
      >
        INSTAGRAM
      </a>
    </p>
  </footer>
);

export default SiteFooter;
