import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVacanciesIsLoading, loadCatalogList } from "../../store/catalogues";
import { getIsLogin, getJobsIsLoading, loadJobsList } from "../../store/jobs";
import { Loader } from "@mantine/core";

const AppLoadData = ({ children }) => {
  const isLogin = useSelector(getIsLogin());
  const dispatch = useDispatch();
  const isVacanciesLoading = useSelector(getVacanciesIsLoading());
  const isJobsLoading = useSelector(getJobsIsLoading());
  useEffect(() => {
    if (isLogin) {
      dispatch(loadCatalogList());
      dispatch(loadJobsList());
    }
  }, [isLogin]);

  if (isVacanciesLoading && isJobsLoading) {
    return <Loader />;
  } else {
    return children;
  }
};

export default AppLoadData;
