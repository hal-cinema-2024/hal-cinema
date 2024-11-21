import React from "react";
import { MovieTable } from "./routes/MovieTable";
import { Route, Routes } from "react-router";
import { Home } from "./routes/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<MovieTable />} />
      <Route path='/movies/:movieId' element={<MovieTable />} />
    </Routes>
  );
};

export default App;
