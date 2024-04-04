import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/costumerSlice";

interface customerCard {
  id: number;
  name: string;
  food: string[];
}

const CustomerCard = ({ name, id, food }: customerCard): JSX.Element => {
  const [myFood, setFood] = useState<string>("");
  const dispatch = useDispatch();
  const addFoodToArray = () => {
    dispatch(addFoodToCustomer({ id, food: myFood }));
    setFood("");
    console.log("RRR");
  };
  return (
    <div key={id} className="customer-food-card-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{name}</p>
        <div className="customer-food-input-container">
          <input
            type="text"
            value={myFood}
            onChange={(e) => setFood(e.target.value)}
          />
          <button onClick={addFoodToArray}>Add</button>
        </div>
      </div>
      <div className="customer-foods-container">
        {food.map((item, index) => (
          <div className="customer-food">
            <li key={index}>{item}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCard;
