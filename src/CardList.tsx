import React from "react";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard.tsx";
import { CharacterType } from "./CharacterType";
import { RootState } from "./store.js";
import { useSelector, useDispatch } from "react-redux";

export const CardList = () => {
  const characters = useSelector((state: RootState) => state.characters.value);
  const dispatch = useDispatch();

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const onFilter = () => {
    setIsFilterOpen(true);

    if (isFilterOpen === true) {
      setIsFilterOpen((prev) => !prev);
    }
  };

  // async function fetchCharacters() {
  //   const response = await fetch(
  //     `https://hp-api.onrender.com/api/characters/staff`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   setCharacters(data);
  // }

  return (
    <>
      <button
        onClick={() => {
          onFilter();
        }}
      >
        filter
      </button>
      {isFilterOpen ? (
        <>
          {characters
            .filter((element) => {
              return element.like === true;
            })
            .map((element) => {
              return <CharacterCard currentCharacter={element} />;
            })}
        </>
      ) : (
        <div className="w-full  flex flex-row  gap-6 p-20">
          {characters.map((character, index) => {
            return (
              <>
                <CharacterCard key={index} currentCharacter={character} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
