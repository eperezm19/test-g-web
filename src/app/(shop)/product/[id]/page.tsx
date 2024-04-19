interface Props {
  params: {
    id: string;
  };
}

import { AddToCart } from "@/product/add-to-cart/AddToCart";
import { Product } from "@/products/interfaces/product.interfaces";
import { initialData } from "@/seed/seed";
import { CheckIcon } from "@heroicons/react/24/outline";

const products = initialData.products;

export default function ProductPage({ params }: Props) {
  const product = products.find((product) => product.id === params.id);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product?.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {product?.pricePerPound}
              </p>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product?.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                {product?.stockInPounds} lbs disponible(s)
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={`/images/products/${product?.imgUrl}`}
              alt={product?.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>
            <AddToCart product={product || ({} as Product)} />
          </section>
        </div>
      </div>
    </div>
  );
}
