import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme") as Theme | null;
    return stored ?? "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (ctx) return ctx;
  // Fallback: read/write directly so the hook never crashes if used outside provider
  // (e.g., during HMR or isolated renders).
  const isLight =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("light");
  return {
    theme: isLight ? "light" : "dark",
    toggleTheme: () => {
      if (typeof document === "undefined") return;
      const root = document.documentElement;
      const next = root.classList.contains("light") ? "dark" : "light";
      root.classList.toggle("light", next === "light");
      try {
        window.localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
    },
  };
};