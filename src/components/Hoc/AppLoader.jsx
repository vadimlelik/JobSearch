import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getJobsIsLoading, loadJobsList } from "../../store/jobs";
import { getVacanciesIsLoading, loadCatalogList } from "../../store/catalogues";
import { Loader } from "@mantine/core";
import authService from "../../service/auth.service";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  const authLogin = async () => {
    const data = await authService.login();
    localStorage.setItem("token", JSON.stringify(data));
  };
  const isVacanciesLoading = useSelector(getVacanciesIsLoading());
  const isJobsLoading = useSelector(getJobsIsLoading());
  // let token = localStorage.getItem("token");
  // token = JSON.parse(token);

  useEffect(() => {
    authLogin();
    dispatch(loadJobsList());
    dispatch(loadCatalogList());
  }, []);

  if (isJobsLoading && isVacanciesLoading) return <Loader />;
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppLoader;
