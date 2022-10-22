import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";
import StateContext from "../context/stateContext";
const Nav = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");
  const { setState } = useContext(StateContext);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <nav className="lg:mx-64 lg:py-6">
      <div className="flex flex-row justify-between">
        <p className="font-light text-4xl tracking-[-0.05em] px-2 py-1">
          Tailwind Palette
        </p>
        <div className="flex flex-row my-auto space-x-4">
          {theme === "dark" ? (
            <button
              aria-label="Toggle To Light Mode"
              title="Toggle To Light Mode"
              type="button"
              onClick={() => setTheme("light")}
              className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center border-2 border-neutral-700 hover:border-neutral-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
          ) : (
            <button
              aria-label="Toggle To Dark Mode"
              title="Toggle To Dark Mode"
              type="button"
              className="w-10 h-10 bg-neutral-300 rounded-lg flex items-center justify-center border-2 border-neutral-300 hover:border-neutral-800"
              onClick={() => setTheme("dark")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>
          )}
          <a
            href="https://github.com/kaartik2611"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-full p-1 transition duration-200 hover:scale-125 hover:text-purple-600 hover:outline-none focus:scale-125 focus:text-neutral-200 focus:outline-none"
          >
            <span className="sr-only">Github</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
          <select
            onChange={(e) => setState(e.target.value)}
            className="rounded bg-neutral-400 dark:bg-neutral-700"
          >
            <option key={"CSS"} value="CSS">
              Tailwind
            </option>
            <option key={"HEX"} value="HEX">
              HEX
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
