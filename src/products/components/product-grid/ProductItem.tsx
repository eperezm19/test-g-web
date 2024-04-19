"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../../interfaces/product.interfaces";
import { useState } from "react";
import { displayCurrencyQuetzal } from "@/utils/currency";

interface Props {
  product: Product;
}

export const ProductItem = ({ product }: Props) => {
  return (
    <>
      <div key={product.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Link href={`/product/${product.id}`}>
            <img
              src={`/images/products/${product.imgUrl}`}
              alt={product.name}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </Link>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-lg text-gray-700">
              <Link
                className="hover:text-blue-600"
                href={`/product/${product.id}`}
              >
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              disponibles {product.stockInPounds} lbs
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {displayCurrencyQuetzal(+product.pricePerPound)}
          </p>
        </div>
      </div>
    </>
  );
};
