import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getIsLogin,
  getJobsIsLoading,
  loadJobsList,
  login,
} from "../../store/jobs";
import { getVacanciesIsLoading, loadCatalogList } from "../../store/catalogues";
import { Loader } from "@mantine/core";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const isVacanciesLoading = useSelector(getVacanciesIsLoading());
  const isJobsLoading = useSelector(getJobsIsLoading());
  const isLogin = useSelector(getIsLogin());

  useEffect(() => {
    if (!isLogin) {
      dispatch(login());
    } else {
      dispatch(loadCatalogList());
      dispatch(loadJobsList());
    }
  }, [dispatch, isLogin]);

  if (isJobsLoading && isVacanciesLoading) {
    return <Loader />;
  } else {
    return children;
  }
};

export default AppLoader;
