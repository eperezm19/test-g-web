"use client";
import { use, useState } from "react";
import { QuantitySelector } from "../quantity-selector/QuantitySelector";
import { Product } from "@/products/interfaces/product.interfaces";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { CartProduct } from "@/product/interfaces/cart-product.interfaces";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const addToCart = () => {
    const cartProduct: CartProduct = {
      name: product.name,
      id: product.id,
      description: product.description,
      stockInPounds: product.stockInPounds,
      pricePerPound: product.pricePerPound,
      imgUrl: product.imgUrl,
      quantity,
    };

    addProductToCart(cartProduct);
  };

  return (
    <>
      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={setQuantity}
        maxQuantity={+product.stockInPounds}
      />
      <div className="flex  mt-8">
        <Button onClick={addToCart} disabled={quantity === 0}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};
