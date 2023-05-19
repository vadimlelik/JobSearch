import React from "react";
import style from "./JobListPage.module.css";
import GroupFilter from "../../GroupFilter/GroupFilter";
import JobList from "../../JobList/JobList";

const JobListPage = () => {
  return (
    <div className={style.JobListContainer}>
      <GroupFilter />
      <JobList />
    </div>
  );
};

export default JobListPage;
