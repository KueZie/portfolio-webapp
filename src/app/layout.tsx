import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { SocialIcon } from "react-social-icons";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <Analytics />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="hidden md:block fixed z-50 right-10 top-0 h-dvh w-0.5 bg-primary/20" />
        <div className="hidden md:block fixed z-50 right-10 top-1/2 transform translate-x-1/2">
          <div className="flex flex-col space-y-4">
            <div className="h-0.5 w-8 bg-primary/20 -rotate-45" />
            <div className="h-0.5 w-8 bg-primary/20 -rotate-45" />
            <div className="h-0.5 w-8 bg-primary/20 -rotate-45" />
            <div className="h-0.5 w-8 bg-primary/20 -rotate-45" />
          </div>
        </div>
        <div className="hidden md:block fixed z-50 right-10 bottom-12 transform translate-x-1/2">
          <div className="flex flex-col space-y-2">
            <SocialIcon
              url="https://github.com/KueZie"
              style={{ height: "32px", width: "32px" }}
              target="_blank"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/hunter-goram-96355a168/"
              style={{ height: "32px", width: "32px" }}
              target="_blank"
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
