import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Евгения Фиалковская | UX/UI Designer",
  description:
    "Портфолио UX/UI дизайнера Евгении Фиалковской: продуктовые кейсы для логистики, финтеха, банковских сервисов и EdTech."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
