import React from "react";
import { useSelector } from "react-redux";
import { getFavorite } from "../../../store/favorite";
import { getByIdJobsArray } from "../../../store/jobs";
import JobCard from "../../JobCard/JobCard";
import NotFound from "../../NotFound/NotFound";
import styles from "./Favorite.module.css";

const Favorites = () => {
  const data = useSelector(getFavorite());

  const arrayId = Object.keys(data);
  const arrayJobs = useSelector(getByIdJobsArray(arrayId));
  console.log(arrayJobs);

  return (
    <div className={styles.FavoriteWrapper}>
      <div className={styles.List}>
        {arrayJobs.length > 0 ? (
          arrayJobs.map((job) => <JobCard key={job.id} {...job} />)
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default Favorites;
