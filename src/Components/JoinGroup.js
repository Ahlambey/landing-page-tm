import React from "react";
import { useLang } from "../LangProvider";

export default function JoinGroup() {
  const { t } = useLang();

  const btnClick = () => {
    //google analytics
    window.gtag("event", "click", {
      event_category: "CTA",
      event_label: "join group btn",
    });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-light text-neutral-dark px-4">
      {/* SVG Illustration */}
      <img
        src="./Group-Chat-amico.svg"
        alt="Join Group Illustration"
        className="w-64 h-64 mb-8"
      />
      {/* Invitation Text */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-artisan-midnight">
        {t("joinGroupTitle")}
      </h2>
      <p className="text-lg md:text-xl mb-8 text-center max-w-md text-artisan-midnight">
        {t("joinGroupText")}
      </p>
      {/* WhatsApp Button */}
      <a
        href="https://chat.whatsapp.com/Ic0o5N2Ec1FKoVWholdavV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{ backgroundColor: "#25D366", color: "#fff" }}
          className="px-8 py-4 font-bold rounded-full hover:brightness-90 transition"
          onClick={() => btnClick()}
        >
          {t("joinGroupCTA")}
        </button>
      </a>
    </div>
  );
}
