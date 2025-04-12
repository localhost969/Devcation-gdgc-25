import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: false
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
