import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdJobsData, getJobsIsLoading } from "../../../store/jobs";
import parse from "html-react-parser";
import styles from "./JobPage.module.css";
import JobCard from "../../JobCard/JobCard";
import { Loader } from "@mantine/core";

const JobPage = () => {
  const { id } = useParams();
  const data = useSelector(getByIdJobsData(id));
  const isJobsLoading = useSelector(getJobsIsLoading());

  return (
    <div className={styles.JobPageWrapper}>
      {isJobsLoading ? (
        <Loader />
      ) : (
        <div>
          <JobCard {...data} />

          <div className={styles.Info}>{parse(data?.vacancyRichText)}</div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
