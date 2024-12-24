// app/layout.tsx
import Header from "@/components/shared/header";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/shared/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "Bezrah | Eco-Friendly Roofing & Planting Solutions",
  description:
    "Discover sustainable, eco-friendly roofing solutions and innovative planting techniques with Bezrah. Elevate your spaces with green, energy-efficient designs.",
  keywords: [
    "eco-friendly roofing",
    "sustainable roofing solutions",
    "green roofs",
    "energy-efficient designs",
    "planting techniques",
  ],
  author: "Bezrah Team",
  openGraph: {
    title: "Bezrah | Sustainable Roofing & Planting",
    description:
      "Bezrah offers innovative, sustainable, and eco-friendly roofing and planting solutions to transform your spaces.",
    url: "https://www.bezrah.org",
    images: [
      {
        url: "https://www.bezrah.org/images/LOGO.png",
        width: 1200,
        height: 630,
        alt: "Bezrah - Sustainable Roofing Solutions",
      },
    ],
    siteName: "Bezrah",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon */}
        <link rel="icon" href="/images/logo.jpeg" type="image/x-icon" />
        {/* Optional: Add Apple touch icon for iOS */}
        {/* <link rel="apple-touch-icon" href="/images/logo.jpeg" /> */}
        {/* Optional: Add a manifest file for Progressive Web App */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lalezar&family=Oswald:wght@200..700&family=Rakkas&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="google62bbac5407f85471"
        />
      </head>

      <body>
        {/* Add the Header here */}
        <Header />

        {/* Render the children (main content of each page) */}
        <main className="mt-12">{children}</main>

        {/* Add the Footer here */}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
