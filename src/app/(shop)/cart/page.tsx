import { OrderSummary } from "@/cart/components/order-summary/OrderSummary";
import ProductsInCart from "@/cart/components/products-in-cart/ProductsInCart";
import { Title } from "@/components/title/Title";

export default function CartPage() {
  return (
    <main>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <Title title="Carrito" />

        <div className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ProductsInCart />
          </section>

          <OrderSummary />
        </div>
      </div>
    </main>
  );
}
