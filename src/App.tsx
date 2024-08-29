import { CardList } from "./CardList.tsx";
import { CharacterPage } from "./CharacterPage.tsx";
import { Route, Routes } from "react-router-dom";

import React from "react";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-100">
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/page/:id" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
