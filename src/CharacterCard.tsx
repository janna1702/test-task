import React from "react";
import { useEffect, useState, FC } from "react";
import { CharacterType } from "./CharacterType";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";

type CardProps = {
  setCharacters: Function;
  characters: CharacterType[];
  currentCharacter: CharacterType;
  onChangeLike: Function;
};

const CharacterCard: FC<CardProps> = (props) => {
  const deleteCard = () => {
    props.setCharacters(
      props.characters.filter(
        (element) => element.id !== props.currentCharacter.id
      )
    );
  };

  return (
    <div className="flex flex-col w-[380px] h-[550px] gap-1 items-center ">
      <img
        className="min-w-[380px] min-h-[550px]"
        src={props.currentCharacter.image}
      />
      <h1>{props.currentCharacter.name}</h1>
      {/* <h1>{props.patronus}</h1>
      <h1>{props.ancestry}</h1>
      <h1>{props.house}</h1>
      <h1>{props.gender}</h1> */}
      {/* <button onClick={changeLike()}>like</button> */}
      <button onClick={deleteCard}>Delete</button>
      {!props.currentCharacter.like ? (
        <LikeOutlined
          onClick={() => {
            props.onChangeLike(props.currentCharacter.id);
          }}
        />
      ) : (
        <LikeFilled
          onClick={() => {
            props.onChangeLike(props.currentCharacter.id);
          }}
        />
      )}
    </div>
  );
};
export default CharacterCard;
