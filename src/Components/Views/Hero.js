import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../LangProvider";
export default function Hero() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { t } = useLang();

  useEffect(() => {
    setTimeout(() => setActive(true), 1000); // Delay for effect
  }, []);

  const handleClick = () => {
    //google analytics
    window.gtag("event", "click", {
      event_category: "CTA",
      event_label: "join waiting list btn",
    });

    //go to the waiting list page
    navigate("/join-waiting-list");
  };

  return (
    <section className="relative min-h-screen flex items-end justify-center lg:min-w-full">
      {/* Background Image */}
      <img
        src="/hero.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50 "
      />
      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4 py-4 md:px-16 md:py-24 ">
        <h1 className="text-4xl md:text-7xl font-extrabold text-artisan-pearl mb-6">
          {t("heroTitle1")}{" "}
          <span className={`animated-underline${active ? " active" : ""}`}>
            {t("heroHand")}{" "}
          </span>
          {t("heroTitle2")} <br />
          <span className={`animated-underline${active ? " active" : ""}`}>
            {t("heroConfidence")}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-artisan-pearl mb-8">
          {t("heroSubtitle")}

          <br />
          <span className="mt-4 text-xs text-artisan-pearl">
            {t("heroNote")}
          </span>
        </p>

        <button
          onClick={handleClick}
          className="px-8 py-4 bg-artisan-gold text-artisan-midnight font-bold rounded-full hover:bg-artisan-sunbeam transition border-2 border-artisan-gold hover:border-artisan-midnight focus:border-artisan-midnight "
        >
          {t("cta")}
        </button>

        {/* Decorative Arrows */}
        <div className="mt-2 flex justify-center">
          <svg
            className="w-8 h-8 text-artisan-sunbeam animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
