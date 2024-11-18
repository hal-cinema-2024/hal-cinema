import React from "react";
import "./App.css";
import { DataTable } from "./data-table/DataTable"; // DataTable をインポート

function App() {
  return (
    <div className="App">
      <h1>Data Table Example</h1>
      <DataTable tableColumns={[]} data={[]} /> {/* テーブルデータは空のまま */}
    </div>
  );
}

export default App;
