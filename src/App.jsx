import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { appRoutes } from "./Logic/routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
