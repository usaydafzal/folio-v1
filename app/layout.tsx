import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sea Socials — Marketing Co.",
  description:
    "Spark the Buzz, Seal the Deal: Sea Socials,Your Brand's Best Appeal!",
  generator: "Next.js",
  applicationName: "Sea Socials",
  keywords: [
    "sea socials",
    "digital marketing",
    "social media management",
    "search engine optimization",
    "website design",
    "frontend developer",
    "frontend engineer",
    "creative",
    "advertisement",
    "creative engineer",
    "tech",
    "india",
    "bangalore",
    "karnataka",
    "marketing",
    "creators",
    "portfolio",
    "best digital marketing",
    "top digital marketing",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Sea Socials — Marketing Co.",
    description:
      "Spark the Buzz, Seal the Deal: Sea Socials,Your Brand's Best Appeal!",
    url: "https://www.seasocials.in/",
    siteName: "www.seasocials.in",
    images: [
      {
        url: "https://raw.githubusercontent.com/usaydafzal/folio-v1/c65aa0856b29f7c643c396f9bfc37b0eaf49db3a/public/Sea%20Socials.png",
        width: 1200,
        height: 630,
        alt: "Sea Socials — Marketing Co.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sea Socials — Marketing Co.",
    description:
      "Spark the Buzz, Seal the Deal: Sea Socials,Your Brand's Best Appeal!",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://private-user-images.githubusercontent.com/45708152/316801509-362bb975-db1c-428f-b615-cc253145f770.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE0NDUzMTcsIm5iZiI6MTcxMTQ0NTAxNywicGF0aCI6Ii80NTcwODE1Mi8zMTY4MDE1MDktMzYyYmI5NzUtZGIxYy00MjhmLWI2MTUtY2MyNTMxNDVmNzcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzI2VDA5MjMzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU0ZWRjMjE4MzE3NDUxYjcxMTAxZDY3YTEyZjU2MDYzNWNkZGZiN2FjMWEzYjYyNzYyNWNlMDU5MDFkMWEwMjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DgN7Vn2z6bCrZGdoD8lwz2Igj-X8vaLIOZCRoIWbrN0",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
