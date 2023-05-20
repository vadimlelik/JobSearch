import React from "react";
import { useParams } from "react-router-dom";
import JobPage from "../components/Page/JobPage/JobPage";
import JobListPage from "../components/Page/JobsListPage";

const JobLayout = () => {
  const { id, edit } = useParams();

  return (
    <>{id ? edit ? <h1>Редоктировать</h1> : <JobPage /> : <JobListPage />}</>
  );
};

export default JobLayout;
