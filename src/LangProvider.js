import React, { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const LangContext = createContext();

export function LangProvider({ children }) {
  const selectedLanguage = localStorage.getItem("language");

  const [lang, setLang] = useState(selectedLanguage || "ar"); // Default language is Arabic
  const t = (key) => translations[lang][key] || key;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
