import React from "react";
import CharacterCard from "./CharacterCard.tsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store.js";
import { useNavigate, useParams } from "react-router-dom";

export const CharacterPage = () => {
  const characters = useSelector((state: RootState) => state.characters.value);
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const goBack = () => {
    navigate("/test-task");
  };

  const filteredCharacters = characters.find((element) => element.id === id);
  if (filteredCharacters === undefined) {
    return;
  }
  return (
    <div className="flex flex-col w-full ">
      <div className="pl-20">
        <button onClick={goBack}>Back</button>
      </div>
      <div className="w-full  flex flex-row  gap-10 p-20">
        <CharacterCard currentCharacter={filteredCharacters} />
        <div>
          <h1>{filteredCharacters.ancestry}</h1>
          <h1>{filteredCharacters.gender}</h1>
          <h1>{filteredCharacters.house}</h1>
          <h1>{filteredCharacters.patronus}</h1>
        </div>
      </div>
    </div>
  );
};
