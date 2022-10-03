import { Routes, Route } from "react-router-dom";

import Premium from "./Premium";
import HomePage from "./HomePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/premium" element={<Premium/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
