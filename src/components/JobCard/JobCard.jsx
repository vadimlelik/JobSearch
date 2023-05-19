import React, { useEffect, useState } from "react";
import style from "./JobCard.module.css";
import { ReactComponent as LocationIcon } from "./icon/location_icon.svg";
import { ReactComponent as BookmarkIcon } from "./icon//bookmark _icon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoriteAdd, getFavorite, favoriteRemove } from "../../store/favorite";
import cn from "classnames";

const JobCard = ({
  profession,
  town,
  firm_name,
  currency,
  type_of_work,
  payment_to,
  payment_from,
  id,
}) => {
  const [personFavorite, setPersonFavorite] = useState(false);
  const dispatch = useDispatch();
  const storeData = useSelector(getFavorite());

  const setCardFavorite = (id) => {
    if (id === storeData[id]) {
      dispatch(favoriteRemove(id));
    } else {
      dispatch(favoriteAdd(id));
    }
  };

  useEffect(() => {
    storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
  }, [storeData[id]]);

  return (
    <li className={style.JobCard}>
      <Link className={style.JobCardProfession} to={`/${id}`}>
        {profession}
        {firm_name}
      </Link>
      <p className={style.JobCardCurrency}>
        {payment_from
          ? `з/п от ${payment_from} до ${payment_to} - ${currency}`
          : ""}

        <span className={style.JobCardType}>
          {type_of_work?.title && type_of_work?.title}
        </span>
      </p>
      <div className={style.JobCardLocation}>
        <LocationIcon />
        <span className={style.JobCardCity}>{town.title}</span>
      </div>
      <BookmarkIcon
        className={cn(style.JobCardBookmark, {
          [style.ActiveBookmark]: personFavorite,
        })}
        onClick={() => setCardFavorite(id)}
      />
    </li>
  );
};

export default JobCard;
