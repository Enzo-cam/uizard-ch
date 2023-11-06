import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid grid-rows-[60px_1fr] h-screen">
        <header className="bg-yellow-400 grid place-content-center font-semibold text-black">
          UIZard Hackernews Reader
        </header>
        <main className="grid grid-cols-[320px_1fr]">
          <aside>Leftbar</aside>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
