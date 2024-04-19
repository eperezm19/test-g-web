"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { QuantitySelector } from "@/product/components/quantity-selector/QuantitySelector";
import { CartProduct } from "@/product/interfaces/cart-product.interfaces";
import { useCartStore } from "@/store/cart-store";
import { displayCurrencyQuetzal } from "@/utils/currency";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsInCart() {
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const removeProduct = useCartStore((state) => state.removeProduct);

  const updateProductQuantity = (product: CartProduct, quantity: number) => {
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

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="flex space-x-3">
        <Skeleton className="h-[125px] w-[150px] rounded-xl" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-[350px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-b border-t border-gray-200"
    >
      {productsInCart.map((product) => (
        <li key={product.id} className="flex py-6">
          <div className="flex-shrink-0">
            <img
              src={`/images/products/${product.imgUrl}`}
              alt={product.name}
              className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col sm:ml-6">
            <div>
              <div className="flex justify-between">
                <h4 className="text-sm">
                  <Link
                    href={`/product/${product.id}`}
                    className="font-medium text-gray-700 hover:text-gray-800"
                  >
                    {product.name}
                  </Link>
                </h4>
                <QuantitySelector
                  quantity={product.quantity}
                  onQuantityChanged={(quantity) =>
                    updateProductQuantity(product, quantity)
                  }
                  maxQuantity={+product.stockInPounds}
                />
                <p className="ml-4 text-sm font-medium text-gray-900">
                  {displayCurrencyQuetzal(+product.pricePerPound)}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-1 items-end justify-between">
              <p className="flex items-center space-x-2 text-sm text-gray-700">
                {+product.stockInPounds > 0 ? (
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ClockIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />
                )}

                <span>
                  {+product.stockInPounds > 0
                    ? `${product.stockInPounds} Disponible(s)`
                    : `Agotado(s)`}
                </span>
              </p>
              <div className="ml-4">
                <button
                  onClick={() => removeProduct(product)}
                  type="button"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
