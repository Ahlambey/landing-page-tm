import React from "react";
import { useLang } from "../../LangProvider";

export default function Contact() {
  const phone = "+213 657 68 59 61";
    const { t } = useLang();

  const handleCopy = () => {
    navigator.clipboard.writeText(phone);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-light text-neutral-dark px-4">
      <h1 className="text-2xl font-bold text-center mt-20">{t("contactUs")}</h1>
      <p className="text-center mt-4">
        {t("contactDescription")}{" "}
      </p>
      <div className="flex items-center gap-2 justify-center">
        <span className="font-bold select-all">{phone}</span>
        <button
          onClick={handleCopy}
          className="ml-2 px-2 py-1 text-xs bg-artisan-gold text-white rounded"
        >
         {t("copy")}
        </button>
      </div>
      <p className="mt-4">{t("contactOnWhatsApp")}</p>
      <a
        href="https://wa.me/213657685961"
        target="_blank"
        rel="noopener noreferrer"
          style={{ backgroundColor: "#25D366", color: "#fff" }}
          className="px-8 py-4 font-bold rounded-full brightness-90 transition mt-3"
      >
        {t("whatsapp")}
      </a>
    </div>
  );
}