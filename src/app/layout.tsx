import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/general/theme-provider";
import { ClientLayout } from "@/components/general/client-layout";
import { Navbar } from "@/components/general/navbar";
import { MaintenanceMode } from "@/components/general/maintenance-mode";
import { ModeToggle } from "@/components/general/mode-toggle";
import { pathname } from "next-extra/pathname";
import { getMetadata } from "@/actions/getMetadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata = await getMetadata() as { title: string, description: string };
  return {
    title: metadata.title,
    description: metadata.description,
    icons: {
      icon: "/favicon.ico",
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const maintenance = process.env.MAINTENANCE === "true";

  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientLayout>
            <div className="flex flex-col min-h-screen p-2 sm:p-4 md:p-8 max-w-full w-full font-[family-name:var(--font-geist-sans)]">
              { maintenance ? <ModeToggle /> : <Navbar /> }
              <main className="flex-grow flex flex-col items-center justify-center gap-8">
                {maintenance && !pathname().startsWith("/admin") ? <MaintenanceMode /> : children}
              </main>
              <footer className="mt-8 text-center">
                EL OUAZIZI Walid - 2024 ©
              </footer>
            </div>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
