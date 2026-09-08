import { useEffect, useState } from "react";

import SiteHeader from "../components/site-header.component";
import SiteFooter from "../components/site-footer.component";

const SECTION_X = "px-5 md:px-12";

const PrivacyPolicyPage = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    const fetchHtmlContent = async () => {
      try {
        const response = await fetch("/legal/privacy-notice.html");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const text = await response.text();
        // A missing file falls through to the SPA shell, which would otherwise
        // be injected as the policy body.
        if (text.includes("<div id=\"root\">") || !text.includes("data-custom-class")) {
          throw new Error("Policy document unavailable");
        }
        if (!cancelled) {
          setHtmlContent(text);
          setStatus("ready");
        }
      } catch (error) {
        console.error("Error loading privacy policy:", error);
        if (!cancelled) setStatus("error");
      }
    };

    fetchHtmlContent();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="spark-page min-h-screen">
      <SiteHeader />

      <main className="relative overflow-hidden">
        <div
          className="spark-grid-lines absolute inset-0 pointer-events-none hidden md:block"
          aria-hidden="true"
        />

        <section className={`relative ${SECTION_X} pt-10 md:pt-12 pb-8`}>
          <p className="spark-mono text-[10px] md:text-[11px] tracking-[1.5px] text-[#4f2fe0] pb-6">
            00 — LEGAL
          </p>
          <h1 className="font-[900] leading-[0.92] tracking-[-2px] md:tracking-[-3.5px] text-[clamp(38px,6.4vw,88px)]">
            PRIVACY
            <br />
            <span className="text-[#4f2fe0]">POLICY</span>
          </h1>
          <div className="spark-bar h-[6px] md:h-[10px] bg-[#101010] mt-4 md:mt-5" />
        </section>

        <section className={`relative ${SECTION_X} pb-14`}>
          {status === "loading" && (
            <p className="spark-mono text-[12px] tracking-[1.5px] text-[#55534d] py-10">
              LOADING POLICY…
            </p>
          )}

          {status === "error" && (
            <div className="border-2 border-[#101010] p-7 md:p-9 max-w-[760px]">
              <p className="font-[900] text-[20px] tracking-[-0.5px] pb-3">
                THE POLICY DOCUMENT COULD NOT BE LOADED
              </p>
              <p className="text-[15.5px] leading-[1.7] text-[#3a3833]">
                Please email{" "}
                <a
                  href="mailto:lesya@spark25.com"
                  className="text-[#4f2fe0] underline"
                >
                  lesya@spark25.com
                </a>{" "}
                and we will send you a copy directly.
              </p>
            </div>
          )}

          {status === "ready" && (
            <div
              className="spark-legal max-w-[900px]"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}
        </section>

        <SiteFooter />
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
