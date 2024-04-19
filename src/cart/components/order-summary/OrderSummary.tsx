"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartStore } from "@/store/cart-store";
import { displayCurrencyQuetzal } from "@/utils/currency";
import Link from "next/link";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const getSummaryInformation = useCartStore(
    (state) => state.getSummaryInformation
  );

  const [loaded, setLoaded] = useState(false);

  const { subTotal } = getSummaryInformation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded)
    return (
      <div className="flex items-center space-x-4 mt-10">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );

  return (
    <section aria-labelledby="summary-heading" className="mt-10">
      <h2 id="summary-heading" className="sr-only">
        Order summary
      </h2>

      <div>
        <dl className="space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-base font-medium text-gray-900">Subtotal</dt>
            <dd className="ml-4 text-base font-medium text-gray-900">
              {displayCurrencyQuetzal(subTotal)}
            </dd>
          </div>
        </dl>
        <dl className="space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-base font-medium text-gray-900">Subtotal</dt>
            <dd className="ml-4 text-base font-medium text-gray-900">
              {displayCurrencyQuetzal(subTotal)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-10">
        <Button className="w-full" asChild>
          <Link href="/">Finalizar compra</Link>
        </Button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          or
          <Link
            href="/"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continuar comprando
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </p>
      </div>
    </section>
  );
};
