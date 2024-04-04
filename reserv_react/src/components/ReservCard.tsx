import { useDispatch } from "react-redux";
import { removeReserv } from "../features/reserVationSlice";
import { addCustomer } from "../features/costumerSlice";
import { v4 } from "uuid";

interface resCard {
  person: string;
  index: number;
}

const ReservCard = ({ person, index }: resCard): JSX.Element => {
  const dispatch = useDispatch();
  const removeReservation = () => {
    dispatch(removeReserv(index));
  };

  const addCustomers = () => {
    dispatch(removeReserv(index));
    dispatch(
      addCustomer({
        id: parseInt(v4()),
        name: person,
        food: [],
      })
    );
  };
  return (
    <div
      onClick={addCustomers}
      style={{ display: "flex", justifyContent: "space-between" }}
      className="reservation-card-container"
    >
      {person}
      <span
        style={{ fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}
        onClick={removeReservation}
      >
        X
      </span>
    </div>
  );
};

export default ReservCard;
