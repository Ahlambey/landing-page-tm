import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../LangProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="w-full bg-artisan-midnight text-artisan-pearl py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <Link to="/" className="hover:underline">
          {t("home")}
        </Link>
        <Link to="/join-waiting-list" className="hover:underline">
          {t("joinWaitingList")}
        </Link>
        <a
          href="https://chat.whatsapp.com/Ic0o5N2Ec1FKoVWholdavV"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {t("joinGroupCTA")}
        </a>
                <Link to="/contact" className="hover:underline">
          {t("contactUs")}
        </Link>
        <Link to="/credits" className="hover:underline">
          {t("Credits")}
        </Link>

      </div>
      <div className="text-center text-xs mt-4 opacity-80">
        &copy; {new Date().getFullYear()} talentmakes. {t("allRightsReserved")}
      </div>
    </footer>
  );
}
