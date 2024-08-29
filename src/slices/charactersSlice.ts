import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CharacterType } from "../CharacterType";
import axios from "axios";

export const fetchContent = createAsyncThunk(
  "characters/fetchContent",
  async () => {
    const res = await axios("https://hp-api.onrender.com/api/characters/staff");
    const data = await res.data;
    return data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    value: new Array<CharacterType>(),
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
  extraReducers: (builder) => {
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { remove, updateLike } = charactersSlice.actions;

export default charactersSlice.reducer;
