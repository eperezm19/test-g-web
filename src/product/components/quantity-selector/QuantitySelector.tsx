"use client";

interface Props {
  quantity: number;
  onQuantityChanged: (value: number) => void;
  maxQuantity: number;
}

export const QuantitySelector = ({
  quantity,
  onQuantityChanged,
  maxQuantity,
}: Props) => {
  const onValueChanged = (value: number) => {
    const newQuantity = quantity + value;
    if (newQuantity < 0 || newQuantity > maxQuantity) return;

    onQuantityChanged(newQuantity);
  };

  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        onClick={() => onValueChanged(-0.5)}
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        -
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        {quantity} lbs
      </button>
      <button
        onClick={() => onValueChanged(+0.5)}
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        +
      </button>
    </span>
  );
};
