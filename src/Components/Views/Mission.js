import React from "react";
import { useLang } from "../../LangProvider";
import { useNavigate } from "react-router-dom";

export default function Mission() {
  const navigate = useNavigate();
  const { t } = useLang();

  const handleClick = () => {
    //go to the waiting list page
    navigate("/join-waiting-list");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-light text-neutral-dark px-4 lg:flex-row lg:justify-between lg:w-2/3">
      {/* SVG Illustration */}
      <img
        src="./Team-goals-cuate.svg" // Replace with your actual SVG file path
        alt="Join Group Illustration"
        className="w-64 h-64 mb-8 lg:w-2/4 lg:h-2/4 lg:mr-20"
      />
      {/* Invitation Text */}
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-artisan-pearl">
          {t("missionTitle")}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-center max-w-md text-artisan-pearl">
          {t("missionText")}
        </p>

        {/* Call to Action Button */}
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-artisan-gold text-artisan-midnight font-bold rounded-full hover:bg-artisan-sunbeam transition border-2 border-artisan-gold hover:border-artisan-midnight focus:border-artisan-midnight relative inline-flex items-center"
        >
          {t("missionCTA")}
        </button>
      </div>
    </div>
  );
}
