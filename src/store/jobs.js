import { createSlice } from "@reduxjs/toolkit";
import jobService from "../service/job.service";
import industryService from "../service/industry.service";

const initialState = {
    isLoading: true,
    entities: null,
    error: null,
};

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        jobsRequested: (state) => {
            state.isLoading = true;
        },
        jobsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        jobsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        searchRequested: (state) => {
            state.isLoading = true;
        },
        searchReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        searchRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: jobsReducer, actions } = jobsSlice;
const {
    jobsRequested,
    jobsReceived,
    jobsRequestFailed,
    searchRequested,
    searchReceived,
    searchRequestFailed,
} = actions;

export const loadJobsList = () => async (dispatch) => {
    dispatch(jobsRequested());
    try {
        const content = await jobService.get();
        dispatch(jobsReceived(content));
    } catch (error) {
        dispatch(jobsRequestFailed(error.message));
    }
};
export const searchJobsList = (payload) => async (dispatch) => {
    dispatch(searchRequested());
    try {
        const content = await jobService.search(payload);
        dispatch(searchReceived(content));
    } catch (error) {
        dispatch(searchRequestFailed(error.message));
    }
};

// selectors
export const getJobs = () => (state) => state.jobs.entities;
export const getJobsIsLoading = () => (state) => state.jobs.isLoading;

export const getByIdJobsData = (id) => (state) => {
    return state.jobs.entities
        ? state.jobs.entities.objects.find((u) => {
            return u.id === +id;
        })
        : null;
};
export const getByIdJobsArray = (jobsId) => (state) => {
    if (state.jobs.entities) {
        const jobsArray = [];
        for (const id of jobsId) {
            for (const jobs of state.jobs.entities.objects) {
                if (jobs.id === Number(id)) {
                    jobsArray.push(jobs);
                    break;
                }
            }
        }
        return jobsArray;
    }
    return [];
};

export default jobsReducer;
