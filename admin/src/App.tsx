import React from "react";
import { Routes, Route } from "react-router-dom";
import { MovieTable } from "./data-table/MovieTable";
import { Home } from "./routes/Home";
import { Layout } from "./components/Layout";

const App: React.FC = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />}/>
          <Route  element={<Layout />} >
          <Route path="movies" element={<MovieTable />} />
          <Route path="movies/:movieId" element={<MovieTable />} />
        </Route>
      </Routes>
  );
};

export default App;
