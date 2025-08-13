import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../LangProvider";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  HeartCrack,
  HeartHandshake,
} from "lucide-react";

export default function CarouselWithDrawer({ title, cards }) {
  const [current, setCurrent] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cardRefs = useRef([]);
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

  const scrollToCard = (index) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const next = () => {
    const newIndex = (current + 1) % cards.length;
    setCurrent(newIndex);
    scrollToCard(newIndex);
  };

  const prev = () => {
    const newIndex = (current - 1 + cards.length) % cards.length;
    setCurrent(newIndex);
    scrollToCard(newIndex);
  };

  return (
    <div className="w-full max-w-md mx-auto  mt-16 lg:max-w-full ">
      <h2 className="text-2xl font-semibold  lg:text-[56px] mb-8 text-left">
        {title}
        {/* wesh rah y3atal fik? */}
      </h2>

      <div className="hide-scrollbar overflow-x-auto flex snap-x snap-mandatory h-[540px] lg:h-[800px] lg:items-center ">
        <div className="flex gap-4  w-max">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="snap-center  relative h-[500px] w-[260px] lg:h-[748px] lg:w-[409px] lg:mr-4 flex-shrink-0 rounded-3xl shadow-lg transition-transform duration-300 ease-in hover:scale-[1.02] hover:shadow-xl "
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-start items-start rounded-3xl">
                <p
                  className={`${
                    card.textColor === "dark"
                      ? "text-artisan-midnight"
                      : "text-artisan-lighterGray"
                  }  text-sm opacity-80 mb-1 lg:text-xl lg:mt-4`}
                >
                  {card.title}
                </p>
                <p
                  className={`${
                    card.textColor === "dark"
                      ? "text-artisan-midnight"
                      : "text-artisan-lighterGray"
                  }   font-semibold text-lg lg:text-2xl leading-tight text-left`}
                >
                  {card.subtitle}
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrent(index);
                  setDrawerOpen(true);
                }}
                className="absolute bottom-3 right-3 bg-artisan-gold text-black rounded-full  flex items-center justify-center text-lg py-2 px-3"
              >
                <span className="mr-1">{t("seeSolution")}</span>
                <Eye />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation arrows (optional) */}
      <div className="flex justify-end mt-4 px-6 text-gray-600 lg:justify-center">
        <button
          className="text-xl mr-1 bg-artisan-lightGray text-black rounded-full w-8 h-8 flex items-center justify-center"
          onClick={prev}
        >
          <ChevronLeft />
        </button>
        <button
          className="text-xl ml-1 bg-artisan-lightGray text-black rounded-full w-8 h-8 flex items-center justify-center"
          onClick={next}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <div className="lg:flex lg:justify-center ">
          <div
            className="fixed inset-0 bg-artisan-ocean/75 z-40 lg:flex lg:justify-center lg:items-center"
            onClick={() => setDrawerOpen(false)} // close when clicking outside
          />
          <AnimatePresence>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 bg-artisan-pearl p-6 shadow-2xl overflow-scroll
              max-h-[80%] bottom-0 left-0 right-0 lg:left-auto lg:right-auto rounded-t-3xl lg:w-[900px] lg:max-h-fit "
            >
              <div className="flex justify-between items-center mb-4 ">
                <h3 className="text-xl font-semibold lg:text-3xl lg:mb-8">
                  {cards[current].title}
                </h3>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className=" bg-artisan-lightGray text-black rounded-full w-8 h-8 flex items-center justify-center text-lg"
                >
                  <X />
                </button>
              </div>
              <div className=" relative p-3 bg-artisan-lighterGray mb-2 rounded-3xl lg:mb-8">
                <p className="text-artisan-ocean text-lg text-left lg:text-2xl">
                  {cards[current].problem}
                </p>
                <div className="absolute -top-3 -left-3 z-10  bg-artisan-teaRose text-black rounded-full w-8 h-8 flex items-center justify-center text-lg lg:text-2xl">
                  <HeartCrack color="#FF5454" size={24} />
                </div>
              </div>
              <div className="relative p-3 bg-artisan-teaGreenLight mb-2 rounded-3xl lg:mb-8">
                <div className="absolute -top-3 -left-3 z-10 bg-artisan-teaGreen rounded-full w-8 h-8 flex items-center justify-center text-lg lg:text-2xl">
                  <HeartHandshake color="#407101" size={24} />
                </div>
                <p className="text-artisan-ocean text-lg lg:text-2xl text-left">
                  {cards[current].solutionPart1}
                </p>
                <br />
                <p className="text-artisan-ocean text-lg lg:text-2xl text-left">
                  {cards[current].solutionPart2}
                </p>
                <br />
                <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-4">
                  <img
                    className="border border-artisan-teaGreen rounded-xl mb-2 w-80"
                    src={cards[current].solImg1}
                    alt="solution"
                    loading="lazy"
                  />
                  <br />
                  {cards[current].solImg2 !== "" && (
                    <img
                      className=" border border-artisan-teaGreen rounded-xl w-80"
                      src={cards[current].solImg2}
                      alt="solution"
                      loading="lazy"
                    />
                  )}
                </div>
                <br />
                <div className="text-artisan-steel lg:text-2xl text-left ">
                  <p>
                    <a
                      href={cards[current].link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {cards[current].link1text}
                    </a>
                  </p>
                  <p>
                    <a
                      href={cards[current].link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {cards[current].link2text}
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <button onClick={handleClick} className=" bg-artisan-gold text-black rounded-full  flex items-center justify-center text-lg py-2 px-3">
                  {t("wantToJoin")}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
