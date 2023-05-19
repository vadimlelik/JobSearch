import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/localStorage";
import { omit } from "lodash";

const initialState = {
    entities: getLocalStorage("jobId"),
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        favoriteAdd: (state, action) => {
            state.entities = {
                ...state.entities,
                [action.payload]: action.payload,
            };
        },
        favoriteRemove: (state, action) => {
            state.entities = omit(state.entities, [action.payload]);
        },
    },
});

const { reducer: favoritesReducer, actions } = favoriteSlice;
export const { favoriteAdd, favoriteRemove } = actions;

export const getFavorite = () => (state) => state.favorites.entities;

export default favoritesReducer;
