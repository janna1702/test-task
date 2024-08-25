import React from "react";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard.tsx";
import { CharacterType } from "./CharacterType";
// to do
//filter state back
// character card to use again for filtered cards

export const CardList = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const onFilter = () => {
    setIsFilterOpen(true);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const response = await fetch(
      `https://hp-api.onrender.com/api/characters/staff`
    );
    const data = await response.json();
    console.log(data);
    setCharacters(data);
  }

  const onChangeLike = (id: string) => {
    const newCharacters = [...characters];
    const characterToLike = newCharacters.find((element) => element.id === id);
    if (characterToLike === undefined) {
      return;
    }
    characterToLike.like = !characterToLike.like;
    setCharacters(newCharacters);
  };
  return (
    <>
      <button onClick={onFilter}>filter</button>
      {isFilterOpen ? (
        <>
          {characters
            .filter((element) => {
              return element.like === true;
            })
            .map((element) => {
              return <h1>{element.name}</h1>;
            })}
        </>
      ) : (
        <div className="w-full  flex flex-row  gap-6 p-20">
          {characters.map((character, index) => {
            return (
              <>
                <CharacterCard
                  key={index}
                  currentCharacter={character}
                  characters={characters}
                  setCharacters={setCharacters}
                  onChangeLike={onChangeLike}
                  // patronus={element.patronus}
                  // ancestry={element.ancestry}
                  // house={element.house}
                  // gender={element.gender}
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
