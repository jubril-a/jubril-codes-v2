import { MonaSansWide } from "./fontloader";
import "./globals.css";

export const metadata = {
  title: "Jubril Abdulsalam",
  description: "Jubril Abdul is a frontend developer and tutor at Gatech Integrated Services, building responsive websites with React, Next.js, and Tailwind CSS. Explore his portfolio and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={MonaSansWide.className}>
        {children}
      </body>
    </html>
  );
}
