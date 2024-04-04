import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import ReservCard from "./components/ReservCard";
import { useState } from "react";
import { addReserv } from "./features/reserVationSlice";
import CustomerCard from "./components/CustomerCard";

const App = () => {
  const [reserv, setReserv] = useState<string>("");
  const reserVations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);
  const dispatch = useDispatch();

  const addReservAtion = () => {
    if (!reserv) return;
    dispatch(addReserv(reserv));
    setReserv("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reserVations.map((item, index) => (
                <ReservCard key={index} person={item} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reserv} onChange={(e) => setReserv(e.target.value)} />
            <button onClick={addReservAtion}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
        <h5 className="reservation-header" style={{marginLeft: '25px'}}>Customers & Foods</h5>
          {customers.map((item) => (
            <CustomerCard id={item.id} name={item.name} food={item.food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
