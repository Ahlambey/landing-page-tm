import React from "react";
import { useLang } from "../../LangProvider";

export default function ShopMockup() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-neutral-light text-neutral-dark px-4 lg:justify-between lg:flex-row-reverse">
      {/* GIF Mockup */}
      <img
        src="/shop-mockup.gif" // Place your GIF in the public folder and use the correct filename
        alt="Shop Mockup"
        className="w-80 h-auto lg:w-2/4"
        loading="lazy"
        data-aos="fade-up"
      />
      {/* Title */}
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          {t("shopMockupTitle")}
        </h2>
        {/* Small Text */}
        <p className="text-md md:text-lg mb-8 text-center max-w-md">
          {t("shopMockupText")}
        </p>
      </div>
    </div>
  );
}
