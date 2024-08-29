import React from "react";
import CharacterCard from "./CharacterCard.tsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store.js";
import { useNavigate } from "react-router-dom";

export const CharacterPage = () => {
  const characters = useSelector((state: RootState) => state.characters.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="pl-20">
        <button onClick={goBack}>Back</button>
      </div>
      <div className="w-full  flex flex-row  gap-6 p-20">
        {characters.map((element) => {
          return <CharacterCard currentCharacter={element} />;
        })}
      </div>
    </div>
  );
};
