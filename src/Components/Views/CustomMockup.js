import React from "react";
import { useLang } from "../../LangProvider";
import { useNavigate } from "react-router-dom";

export default function CustomMockup() {
  const navigate = useNavigate();
  const { t } = useLang();

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
    <div className="min-h-screen flex flex-col items-center justify-start lg:flex-row lg:justify-between bg-neutral-light text-neutral-dark px-4">
      {/* GIF Mockup */}
      <img
        src="/custom-mockup.gif" // Place your GIF in the public folder and use the correct filename
        alt="custom Mockup"
        className="w-80 h-auto   lg:w-2/4"
        loading="lazy"
        data-aos="fade-up"
      />
      {/* Title */}
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-center">
          {t("customMockupTitle")}
        </h2>
        {/* Small Text */}
        <p className="text-md md:text-lg mb-2 text-center max-w-md">
          {t("customMockupText")}
        </p>
        {/* CTA Button */}
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-artisan-gold font-bold rounded-full hover:bg-artisan-sunbeam transition"
        >
          {t("cta")}
        </button>
      </div>
    </div>
  );
}
