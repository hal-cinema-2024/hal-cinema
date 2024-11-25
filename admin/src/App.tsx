import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieTable } from "./data-table/MovieTable";
import { Home } from "./routes/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<div></div>} />
          <Route path="movies" element={<MovieTable />} />
          <Route path="movies/:movieId" element={<MovieTable />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
