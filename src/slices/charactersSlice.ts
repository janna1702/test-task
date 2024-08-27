import { createSlice } from "@reduxjs/toolkit";
import { CharacterType } from "../CharacterType";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    value: new Array<CharacterType>(
      {
        name: "urmat",
        id: "1",
        image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
        patronus: "dasdasd",
        house: "house",
        ancestry: "acn",
        gender: "los",
        like: false,
      },
      {
        name: "jandos",
        id: "2",
        image: "https://ik.imagekit.io/hpapi/snape.jpg",
        patronus: "dasdasd",
        house: "house",
        ancestry: "acn",
        gender: "los",
        like: false,
      }
    ),
  },
  reducers: {
    remove: (state, action) => {
      const id: String = action.payload;

      state.value = state.value.filter((character) => character.id != id);
    },

    updateLike: (state, action) => {
      const id: String = action.payload;
      const characterToLike = state.value.find((element) => element.id === id);
      if (characterToLike === undefined) {
        return;
      }
      characterToLike.like = !characterToLike.like;
    },
  },
});

export const { remove, updateLike } = charactersSlice.actions;

export default charactersSlice.reducer;
