import React from "react";
import { useEffect, useState, FC } from "react";
import { CharacterType } from "./CharacterType";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { remove, updateLike } from "./slices/charactersSlice.ts";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

type CardProps = {
  currentCharacter: CharacterType;
};

const CharacterCard: FC<CardProps> = (props) => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page");
  };
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-[330px] h-[550px] gap-1 ">
      <img
        onClick={handleClick}
        className="min-w-[330px] min-h-[500px] rounded-xl"
        src={props.currentCharacter.image}
      />
      <div className="flex flex-row  w-full  justify-between ">
        <Title level={4}>{props.currentCharacter.name}</Title>
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
      <div>
        <button
          onClick={() => {
            dispatch(remove(props.currentCharacter.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default CharacterCard;
