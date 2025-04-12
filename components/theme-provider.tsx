import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Force theme to light on first load
  useEffect(() => {
    // Set initial theme to light
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    
    // Check local storage for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
    
    setMounted(true);
  }, []);

  return (
    <NextThemesProvider 
      {...props}
      // These settings override any conflicting props
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
      storageKey="theme"
      value={{
        light: "light",
        dark: "dark",
        system: "light", // Force system to be light
      }}
    >
      {!mounted ? (
        <div style={{ visibility: "hidden" }}>{children}</div>
      ) : (
        children
      )}
    </NextThemesProvider>
  )
}
