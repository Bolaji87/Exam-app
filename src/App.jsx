import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Home/Homepage";
import AppLayout from "./pages/AppLayout/AppLayout";
import { QuizProvider } from "./contexts/QuizContext";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/app" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
