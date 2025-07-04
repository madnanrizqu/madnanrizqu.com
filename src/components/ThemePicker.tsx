import { useEffect, useState } from "react";

type ThemeVariant = "system" | "light" | "dark";

const ThemePicker = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeVariant>("system");

  useEffect(() => {
    const currentTheme =
      localStorage.getItem("data-theme-mode") === "auto"
        ? "system"
        : localStorage.getItem("data-theme");

    setActiveTheme((currentTheme || "system") as ThemeVariant);
  }, [document.documentElement.getAttribute("data-theme")]);

  const handleClickTheme = (theme: ThemeVariant) => {
    if (theme === "system") {
      localStorage.setItem(
        "data-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
      localStorage.setItem("data-theme-mode", "auto");
      document.documentElement.setAttribute(
        "data-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
      setActiveTheme(theme);
    } else {
      localStorage.setItem("data-theme", theme);
      localStorage.setItem("data-theme-mode", "manual");
      document.documentElement.setAttribute("data-theme", theme);
      setActiveTheme(theme);
    }
  };

  return (
    <section className="flex flex-col pb-[4.8rem] gap-[2.4rem]">
      <span className="text-headline-3 font-bold inline-block">
        Pick a theme
      </span>

      <ul className="flex flex-col gap-[1.4rem]">
        <li>
          <button
            className={`
              w-full border-[3px] rounded-[4px] p-[2.4rem]
              inline-flex justify-center flex-col items-center gap-[1.2rem]
              transition-colors duration-200 ease-in-out
              ${
                activeTheme === "system"
                  ? "border-secondary bg-secondary-100 text-white"
                  : "border-grey hover:border-secondary-100"
              }
            `}
            onClick={() => handleClickTheme("system")}
          >
            <span className="text-[1.6rem]">Detect system</span>
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
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
                activeTheme === "light"
                  ? "border-secondary bg-secondary-100 text-white"
                  : "border-grey hover:border-secondary-100"
              }
            `}
            onClick={() => handleClickTheme("light")}
          >
            <span className="text-[1.6rem]">Light Mode</span>
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
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
                activeTheme === "dark"
                  ? "border-secondary bg-secondary-100 text-white"
                  : "border-grey hover:border-secondary-100"
              }
            `}
            onClick={() => handleClickTheme("dark")}
          >
            <span className="text-[1.6rem]">Dark Mode</span>
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ThemePicker;
