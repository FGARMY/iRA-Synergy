import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatingActionMenu from "@/components/FloatingActionMenu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "iRA Synergy — Innovative Solutions for Infrastructure & Sustainability",
    template: "%s | iRA Synergy",
  },
  description:
    "iRA Synergy Private Limited is a leading infrastructure and sustainability solutions company. Smart city infrastructure, renewable energy, waste management, public health, fitness equipment — partnering with government and communities across India.",
  keywords: [
    "infrastructure solutions India",
    "smart city equipment",
    "renewable energy solutions",
    "waste management systems",
    "public health infrastructure",
    "open gym equipment",
    "solar tree",
    "smart pole",
    "iRA Synergy",
    "Make in India",
    "GeM registered",
    "government supply",
  ],
  authors: [{ name: "iRA Synergy Private Limited" }],
  creator: "iRA Synergy Private Limited",
  metadataBase: new URL("https://www.irasynergy.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.irasynergy.com",
    siteName: "iRA Synergy",
    title: "iRA Synergy — Innovative Solutions for Infrastructure & Sustainability",
    description:
      "Smart city, renewable energy, waste management, and public health infrastructure solutions. Partnering with government and communities for a sustainable India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "iRA Synergy — Infrastructure & Sustainability Solutions",
    description: "Building a Smarter, Cleaner & Sustainable India",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#0A3D24" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "iRA Synergy Private Limited",
              url: "https://www.irasynergy.com",
              logo: "https://www.irasynergy.com/images/logo.jpg",
              description:
                "Innovative Solutions for Infrastructure & Sustainability",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nashik",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-75880-15401",
                contactType: "sales",
                email: "info@irasynergy.com",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [],
              founder: {
                "@type": "Person",
                name: "Dinesh Anand",
                jobTitle: "Director",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <FloatingActionMenu />
        {children}
      </body>
    </html>
  );
}
