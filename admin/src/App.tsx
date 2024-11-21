import React from "react";
import { MovieTable } from "./data-table/MovieTable";

const App: React.FC = () => {
  return (
    <div>
      <h1>映画リスト</h1>
      <MovieTable />
    </div>
  );
};

export default App;
