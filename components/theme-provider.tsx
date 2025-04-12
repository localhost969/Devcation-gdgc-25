import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: Omit<ThemeProviderProps, 'defaultTheme' | 'forcedTheme'>) {
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
