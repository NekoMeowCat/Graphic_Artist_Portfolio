// components/Header.tsx or Header.jsx depending on your setup

import React from "react";

export default function Header() {
  return (
    <header className="max-w-full border-4 h-20 flex justify-center items-center">
      <div className="w-full bg-green-200 flex items-center h-full">
        <div className="w-1/2 sm:w-1/5 h-16 bg-blue-200 flex items-center justify-center rounded-full">
          logo goes here
        </div>
        <div className="hidden md:flex w-full bg-violet-200 m-2 h-10 items-center rounded-md space-x-2">
          <span className="font-bold tracking-tight uppercase">
            sample@graphic.com
          </span>
          <span className="font-bold tracking-tight uppercase">$</span>
          <span className="font-bold tracking-tight uppercase">
            available always
          </span>
        </div>
      </div>
      <div className="w-full bg-red-200 text-center flex justify-end items-center space-x-4 m-2 h-10">
        <div className="font-bold tracking-tight uppercase">About</div>
        <div className="font-bold tracking-tight uppercase">Archive</div>
        <div className="font-bold tracking-tight uppercase">Contact</div>
      </div>
    </header>
  );
}
