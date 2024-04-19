import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <ShoppingCartIcon className="mx-5 w-24 h-24" />

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Tu carrito está vacío</h1>

        <Link href="/" className="text-blue-500 mt-2 text-4xl">
          Regresar
        </Link>
      </div>
    </div>
  );
}
