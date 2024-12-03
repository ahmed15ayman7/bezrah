// app/layout.tsx
import Header from "@/components/shared/header";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/shared/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "Bezra",
  description: "Sustainable and eco-friendly roofing solutions and Planting",
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
