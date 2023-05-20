import { createSlice } from "@reduxjs/toolkit";
import jobService from "../service/job.service";
import industryService from "../service/industry.service";
import authService from "../service/auth.service";
import { setLocalStorage } from "../utils/localStorage";

const initialState = {
    isLoading: true,
    entities: null,
    error: null,
    isLogin: false,
    authData: null
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
            state.isLoading = true;
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
            state.isLoading = true;
        },
        loginRequested: (state) => {
            state.isLogin = false
        },
        loginReceived: (state, action) => {
            state.authData = action.payload;
            state.isLogin = true
            state.isLoading = true
        },
        loginFailed: (state, action) => {
            state.isLogin = false
            state.isLoading = true
            state.error = action.payload
        }
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
    loginRequested,
    loginReceived,
    loginFailed
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


export const login = () => async (dispatch) => {
    dispatch(loginRequested());
    try {
        const content = await authService.login();
        setLocalStorage('token', content)
        dispatch(loginReceived(content));
    } catch (error) {
        dispatch(loginFailed(error.message));
    }
};
// selectors
export const getIsLogin = () => (state) => state.jobs.isLogin
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
