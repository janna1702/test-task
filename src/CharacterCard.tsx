import React from "react";
import { useEffect, useState, FC } from "react";
import { CharacterType } from "./CharacterType";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { remove, updateLike } from "./slices/charactersSlice.ts";

type CardProps = {
  currentCharacter: CharacterType;
};

const CharacterCard: FC<CardProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-[380px] h-[550px] gap-1 items-center ">
      <img
        className="min-w-[380px] min-h-[550px]"
        src={props.currentCharacter.image}
      />
      <h1>{props.currentCharacter.name}</h1>
      <button
        onClick={() => {
          dispatch(remove(props.currentCharacter.id));
        }}
      >
        Delete
      </button>
      {!props.currentCharacter.like ? (
        <LikeOutlined
          onClick={() => {
            dispatch(updateLike(props.currentCharacter.id));
          }}
        />
      ) : (
        <LikeFilled
          onClick={() => {
            dispatch(updateLike(props.currentCharacter.id));
          }}
        />
      )}
    </div>
  );
};
export default CharacterCard;
