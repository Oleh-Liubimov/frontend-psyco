import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";
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
    <html lang="en" className="w-full h-full">
      <body className=" bg-white w-full h-full mx-auto">
        <div className="max-w-[1440px] mx-auto h-screen">
          <div>
            <Header />
            <Separator className="absolute left-0 w-screen mt-5"></Separator>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
