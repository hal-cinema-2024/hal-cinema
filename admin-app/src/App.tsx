import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Schedules } from "./routes/Schedules";
import { Movies } from "./routes/Movies";
import { Layout } from "./components/Layout";
import { Users } from "./routes/Users";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Layout />}>
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<Movies />} />
        <Route path='/schedules' element={<Schedules />} />
        <Route path='/schedules/:id' element={<Schedules />} />

        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<Users />} />

      </Route>
    </Routes>
  );
};

export default App;
