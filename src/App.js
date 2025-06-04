import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Views/Hero";
import JoinGroup from "./Components/JoinGroup";
import Mission from "./Components/Views/Mission";
import CustomMockup from "./Components/Views/CustomMockup";
import ShopMockup from "./Components/Views/ShopMockup";
import JoinWaitingList from "./Components/Views/JoinWaitingList";
import Credits from "./Components/Views/Credits";
import Footer from "./Components/Views/Footer";
import Contact  from "./Components/Views/Contact";
import AOS from "aos";
import { useLang } from "./LangProvider";
import "aos/dist/aos.css";

function HomeSections() {
  return (
    <div className="">
      <section className="min-h-screen flex items-center justify-center  bg-primary text-white lg:min-w-full">
        <Hero />
      </section>
      <section className="min-h-screen flex items-center justify-center bg-primary-light text-primary-dark">
        <ShopMockup />
      </section>
      <section className="min-h-screen flex items-center justify-center bg-secondary text-white">
        <CustomMockup />
      </section>
      <section className="min-h-screen flex items-center justify-center bg-accent text-white bg-artisan-midnight ">
        <Mission />
      </section>
      <section className="min-h-screen flex items-center justify-center bg-neutral-dark text-neutral-light">
        <JoinGroup />
      </section>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const { setLang } = useLang();
  useEffect(() => {
    AOS.init();
  }, []);

  const setLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLang(lang);
  };
const navbarBg =
  location.pathname === "/" 
    ? "bg-artisan-pearl/1"
    : "bg-artisan-midnight"

  return (
    <div className="App   mx-auto p-0 static">
      <nav
        className={`z-50 absolute inset-x-0 top-0 ${navbarBg} text-artisan-pearl p-4 lg:px-10`}
      >
        <div className="flex justify-between items-center">
          <a href="/" className="text-white text-lg font-bold">
            <p className="text-1xl lg:text-2xl">talentmakes</p>
          </a>

          <div className="relative">
            <select
              onChange={(e) => setLanguage(e.target.value)}
              className="text-sm text-artisan-pearl rounded px-2 py-1 focus:outline-none bg-artisan-sunbeam/5"
              defaultValue=""
              aria-label="Select language"
            >
              <option value="" disabled>
                🌐
              </option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">ع</option>
            </select>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomeSections />} />
        <Route path="/join-waiting-list" element={<JoinWaitingList />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </div>
  );
}
