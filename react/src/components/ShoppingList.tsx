import { Item } from "../constants";

interface myProps {
  items: Item[];
}

const ShoppingList = ({ items }: myProps): JSX.Element => {
  return (
    <div>
      <h1>ShoppingList</h1>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} -- {item.quantity}
        </li>
      ))}
    </div>
  );
};

export default ShoppingList;
