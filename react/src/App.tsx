// import Greeter from "./components/Greeter";
import { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import { Item } from "./constants";
import ShoppingForm from "./components/ShoppingForm";
import { v4 as getId } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getId(), name: product, quantity: quantity }]);
  };

  return (
    <>
      {/* <Greeter name='Alie' /> */}
      <ShoppingForm addItem={addItem} />
      <ShoppingList items={items} />
    </>
  );
}

export default App;
