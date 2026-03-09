import { useEffect, useState } from "react";

type PatternVariant = "topographic" | "constellation" | "none";

const PatternPicker = () => {
  const [activePattern, setActivePattern] = useState<PatternVariant>("constellation");

  useEffect(() => {
    const currentPattern = localStorage.getItem("data-pattern") as PatternVariant | null;
    setActivePattern(currentPattern || "constellation");
  }, []);

  const handleClickPattern = (pattern: PatternVariant) => {
    localStorage.setItem("data-pattern", pattern);
    document.documentElement.setAttribute("data-pattern", pattern);
    setActivePattern(pattern);
  };

  return (
    <section className="flex flex-col pb-[4.8rem] gap-[2.4rem]">
      <span className="text-headline-3 font-bold inline-block">
        Pick a pattern
      </span>

      <ul className="flex flex-col gap-[1.4rem]">
        <li>
          <button
            className={`
              w-full border-[3px] rounded-[4px] p-[2.4rem]
              inline-flex justify-center flex-col items-center gap-[1.2rem]
              transition-colors duration-200 ease-in-out
              ${
                activePattern === "topographic"
                  ? "border-secondary bg-secondary-100 text-white"
                  : "border-grey hover:border-secondary-100"
              }
            `}
            onClick={() => handleClickPattern("topographic")}
          >
            <span className="text-[1.6rem]">Topographic</span>
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeWidth="2"/>
              <path d="M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeWidth="2"/>
              <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeWidth="2"/>
            </svg>
          </button>
        </li>
        <li>
          <button
            className={`
              w-full border-[3px] rounded-[4px] p-[2.4rem]
              inline-flex justify-center flex-col items-center gap-[1.2rem]
              transition-colors duration-200 ease-in-out
              ${
                activePattern === "constellation"
                  ? "border-secondary bg-secondary-100 text-white"
                  : "border-grey hover:border-secondary-100"
              }
            `}
            onClick={() => handleClickPattern("constellation")}
          >
            <span className="text-[1.6rem]">Constellation</span>
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="4" cy="4" r="2"/>
              <circle cx="20" cy="8" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="6" cy="18" r="2"/>
              <circle cx="18" cy="18" r="2"/>
              <line x1="4" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth="1"/>
              <line x1="20" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1"/>
              <line x1="12" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="1"/>
              <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </button>
        </li>
        <li>
          <button
            className={`
              w-full border-[3px] rounded-[4px] p-[2.4rem]
              inline-flex justify-center flex-col items-center gap-[1.2rem]
              transition-colors duration-200 ease-in-out
              ${
                activePattern === "none"
                  ? "border-secondary bg-secondary-100 text-white"
                  : "border-grey hover:border-secondary-100"
              }
            `}
            onClick={() => handleClickPattern("none")}
          >
            <span className="text-[1.6rem]">None</span>
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect x="3" y="3" width="18" height="18" strokeWidth="2" rx="2"/>
              <line x1="3" y1="3" x2="21" y2="21" strokeWidth="2"/>
            </svg>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default PatternPicker;
