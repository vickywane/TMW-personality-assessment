"use client";
import Link from "next/link";
import React from "react";

export default function Header() {

  
  return (
    <header className="bg-white h-[45px] flex items-center w-full">
      <nav className="flex flex-row justify-between w-full px-12">
        <div>
          <Link href={"/"}>
            <p className="font-semibold" > Persoanlity Trait Checker</p>
          </Link>
        </div>



        <div>
          <p> Start Questions </p>
        </div>
      </nav>
    </header>
  );
}
