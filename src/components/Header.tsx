import Link from "next/link";
import React from "react";

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header>
      <div>
        <Link href="/">psychologists.services</Link>
        <nav></nav>
      </div>
    </header>
  );
}
