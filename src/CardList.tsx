import React from "react";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard.tsx";
import { CharacterType } from "./CharacterType";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "antd";
import { fetchContent } from "./slices/charactersSlice.ts";
import { AppDispatch, RootState } from "./store.ts";

export const CardList = () => {
  const [mode, setMode] = useState<"vertical" | "Your Faves">("Your Faves");
  const characters = useSelector((state: RootState) => state.characters.value);
  const dispatch = useDispatch<AppDispatch>();
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "Your Faves");
  };

  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  const onFilter = () => {
    setIsFilterOpen(true);

    if (isFilterOpen === true) {
      setIsFilterOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="pl-20 indent-2">
        <Switch
          onChange={changeMode}
          onClick={() => {
            onFilter();
          }}
          unCheckedChildren="Liked"
        />
      </div>
      {isFilterOpen ? (
        <div className="w-full h-full  flex flex-row  gap-6 p-20">
          {characters
            .filter((element) => {
              return element.like === true;
            })
            .map((element) => {
              return <CharacterCard currentCharacter={element} />;
            })}
        </div>
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
    </div>
  );
};
