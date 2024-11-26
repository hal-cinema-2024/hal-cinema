import React from "react";
import { Routes, Route } from "react-router-dom";
import { MovieTable } from "./data-table/MovieTable";
import { Home } from "./routes/Home";
import { Schedules } from "./routes/Schedules";
import { Movies } from "./routes/Movies";
import { Layout } from "./components/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Layout />} >
      <Route path='/movies' element={<MovieTable />} />
      <Route path='/movies/:movieId' element={<Movies />} />
      <Route path='/schedules' element={<Schedules />} />
    </Route>
    </Routes>
  );
};

export default App;
