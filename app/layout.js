import { MonaSansWide } from "./fontloader";
import "./globals.css";

export const metadata = {
  title: "Jubril Abdul",
  description: "Jubril Abdulsalam Porfolio",
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
