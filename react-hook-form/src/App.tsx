import { Link, Route, Routes } from "react-router-dom";
import Form1 from "./components/Form1";
import Material from "./components/Material";

const App = () => {
  return (
    <>
      <Link to='/form1'>Form 1</Link> &nbsp;&nbsp;&nbsp; 
      <Link to='/material'>Material</Link>
      <Routes>
        <Route path="/form1" element={<Form1 />} />
        <Route path="/material" element={<Material />} />
      </Routes>
    </>
  );
};

export default App;
