import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      defaultTheme="light" 
      forcedTheme="light" 
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
