import React from "react";
import style from "./JobList.module.css";
import { useSelector } from "react-redux";
import { getJobs, getJobsIsLoading } from "../../store/jobs";
import JobCard from "../JobCard/JobCard";
import { Loader } from "@mantine/core";

const JobList = () => {
  const data = useSelector(getJobs());
  const isJobsLoading = useSelector(getJobsIsLoading());
  console.log(isJobsLoading);
  return (
    <div className={style.JobList}>
      {isJobsLoading ? (
        <Loader color="gray" size="xl" className={style.Loader} />
      ) : (
        <ul>
          {data.objects.map((job) => {
            return <JobCard key={job.id} {...job} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default JobList;
