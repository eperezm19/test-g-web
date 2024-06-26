"use client";
import { titleFont } from "@/config/fonts";

import Link from "next/link";
import React, { SVGProps, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";

interface NavigationItem {
  label: string;
  link: string;
}

const navigation: NavigationItem[] = [
  {
    label: "Individual",
    link: "/",
  },
  {
    label: "Combos",
    link: "/",
  },
];

export const TopMenu = () => {
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
        <Button asChild variant="ghost" className="text-slate-100">
          <Link href={totalItemsInCart === 0 && loaded ? "/empty" : "/cart"}>
            <div className="relative">
              {loaded && totalItemsInCart > 0 && (
                <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                  {totalItemsInCart}
                </span>
              )}
              <ShoppingBagIcon className="w-6 h-6" />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};
