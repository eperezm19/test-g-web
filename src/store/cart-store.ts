import { CartProduct } from "@/product/interfaces/cart-product.interfaces";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  getTotalItems: () => number;
  getSummaryInformation: () => {
    subTotal: number;
    total: number;
    itemsInCart: number;
  };
}

export const useCartStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],

        getTotalItems: () => {
          const { cart } = get();
          return cart.length;
        },

        getSummaryInformation: () => {
          const { cart } = get();

          const subTotal = cart.reduce(
            (subTotal, product) =>
              product.quantity * +product.pricePerPound + subTotal,
            0
          );

          const total = subTotal;
          const itemsInCart = cart.reduce(
            (total, item) => total + item.quantity,
            0
          );

          return {
            subTotal,
            total,
            itemsInCart,
          };
        },
        addProductToCart: (product) => {
          set((state) => {
            const productIndex = state.cart.findIndex(
              (cartProduct) => cartProduct.id === product.id
            );
            if (productIndex === -1) {
              return {
                cart: [...state.cart, product],
              };
            }
            const newCart = [...state.cart];
            newCart[productIndex].quantity = product.quantity;
            return {
              cart: newCart,
            };
          });
        },
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
