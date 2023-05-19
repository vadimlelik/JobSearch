import React from "react";
import img from "./img/not_found.png";
import Button from "../Button/Button";
import style from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate("/");
  };
  return (
    <div className={style.NotFound}>
      <img src={img} />
      <h2 className={style.Title}>Упс, здесь еще ничего нет!</h2>
      <Button appearence="transparentM" onClick={goToBack}>
        Поиск Вакансий
      </Button>
    </div>
  );
};

export default NotFound;
