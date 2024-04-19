"use client";
import { titleFont } from "@/config/fonts";

import Link from "next/link";
import React, { SVGProps } from "react";
import { Button } from "../ui/button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface NavigationItem {
  label: string;
  link: string;
}

const navigation: NavigationItem[] = [
  {
    label: "Individual",
    link: "/category/individual",
  },
  {
    label: "Combos",
    link: "/category/combos",
  },
];

export const TopMenu = () => {
  return (
    <div className="flex px-5 py-4 justify-between items-center w-full bg-black">
      {/* Logo */}
      <div>
        <Link href="/" className="flex items-center gap-2 uppercase">
          <span
            className={`${titleFont.className} antialiased font-bold text-slate-100 mr-2`}
          >
            Mariscos Store
          </span>
          <span className="text-primary-500 text-slate-100">|</span>
          <Button variant="ghost" className="text-slate-100 uppercase">
            Shop
          </Button>
        </Link>
      </div>
      {/* Navigation */}
      <ul className="hidden sm:flex gap-2">
        {navigation.map((item) => (
          <li key={item.link}>
            <Button asChild variant="ghost" className="text-slate-100">
              <Link href={item.link}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Button variant="ghost" className="text-slate-100">
          <ShoppingBagIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
