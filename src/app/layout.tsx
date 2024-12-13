import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psychologists.Services",
  description:
    "We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
