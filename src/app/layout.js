import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X-APP",
  description: "A clone of X website built with Next.js and Tailwind CSSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="flex justify-between max-w-6xl mx-auto">
        <div>
          <Sidebar />
        </div>
        {children}
        <div>
          <News />
        </div>
      </div>

      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
