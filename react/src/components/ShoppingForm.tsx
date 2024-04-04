import React, { useRef } from "react";

interface AddItem {
  addItem: (prod: string, quantity: number) => void;
}

const ShoppingForm = ({ addItem }: AddItem): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    const quant = parseInt(quantRef.current!.value);
    addItem(newProduct, quant);
    inputRef.current!.value = "";
    quantRef.current!.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <h1>Add Item</h1>
        <label htmlFor="name">Item Name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Add Name"
          ref={inputRef}
        />{" "}
        <br /> <br />
        <label htmlFor="quantity">Quantity</label>
        <br />
        <input
          type="number"
          min={0}
          id="quantity"
          placeholder="Add Quantity"
          ref={quantRef}
        />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default ShoppingForm;
