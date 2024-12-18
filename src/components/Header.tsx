import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="bg-white mx-auto pt-6 px-32 ">
      <div className="flex items-center justify-between gap-32">
        <nav className=" flex gap-32 items-center">
          <Link href="/" className=" font-bold text-xl">
            <span className="text-primary font-bold text-xl">
              psychologists
            </span>
            .services
          </Link>
          <div className="flex gap-10">
            <Link className="text-dark_secondary" href="/">
              Home
            </Link>
            <Link className="text-dark_secondary" href="/psychologists">
              Psychologists
            </Link>
          </div>
        </nav>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="rounded-3xl font-medium text-base py-6"
            size="lg"
          >
            Log In
          </Button>
          <Button
            size="lg"
            className="hover:bg-emerald-500 rounded-3xl py-6 px-10 font-medium text-base"
          >
            Registration
          </Button>
        </div>
      </div>
    </header>
  );
}
