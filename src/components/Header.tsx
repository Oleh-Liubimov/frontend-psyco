import Link from "next/link";
import React from "react";

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header>
      <div>
        <Link href="/">
          <span className="text-primary ">psychologists</span>.services
        </Link>
        <nav></nav>
      </div>
    </header>
  );
}
