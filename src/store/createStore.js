import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobsReducer from "./jobs";
import vacanciesReducer from "./catalogues";
import favoritesReducer from "./favorite";
import { setLocalStorage } from "../utils/localStorage";

const rootReducer = combineReducers({
    jobs: jobsReducer,
    vacancies: vacanciesReducer,
    favorites: favoritesReducer,
});

function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}

const store = createStore();

store.subscribe(() => {
    setLocalStorage("jobId", store.getState().favorites.entities);
});

export default store;
