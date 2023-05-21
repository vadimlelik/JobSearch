import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getIsLogin, login } from "../../store/jobs";
import { Loader } from "@mantine/core";

const AppAuth = ({ children }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLogin());

  useEffect(() => {
    if (!isLogin) {
      dispatch(login());
    }
  }, [dispatch, isLogin]);

  if (!isLogin) {
    return <Loader />;
  } else {
    return children;
  }
};

export default AppAuth;
