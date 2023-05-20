import { createSlice } from "@reduxjs/toolkit";
import industryService from "../service/industry.service";
import jobService from '../service/job.service'
const initialState = {
    isLoading: true,
    entities: null,
    error: null,
};

const vacanciesSlice = createSlice({
    name: "vacancies",
    initialState,
    reducers: {
        vacanciesRequested: (state) => {
            state.isLoading = true;
        },
        vacanciesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        vacanciesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = true;
        },

    },
});
const { reducer: vacanciesReducer, actions } = vacanciesSlice;
const { vacanciesRequested, vacanciesReceived, vacanciesRequestFailed } =
    actions;

export const loadCatalogList = () => async (dispatch) => {
    dispatch(vacanciesRequested());
    try {
        const content = await industryService.get();
        dispatch(vacanciesReceived(content));
    } catch (error) {
        dispatch(vacanciesRequestFailed(error.message));
    }
};


// selector

export const getVacancies = () => (state) => state.vacancies.entities;
export const getVacanciesIsLoading = () => (state) => state.vacancies.isLoading;
export const getError = () => (state) => state.vacancies.error;

export default vacanciesReducer;
