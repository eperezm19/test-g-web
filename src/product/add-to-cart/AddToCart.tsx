"use client";
import { useState } from "react";
import { QuantitySelector } from "../quantity-selector/QuantitySelector";
import { Product } from "@/products/interfaces/product.interfaces";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div>
      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={setQuantity}
        maxQuantity={+product.stockInPounds}
      />
    </div>
  );
};
