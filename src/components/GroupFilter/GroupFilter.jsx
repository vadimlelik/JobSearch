import React, { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import Button from "../Button";
import { Select, NumberInput } from "@mantine/core";
import { getVacancies, getVacanciesIsLoading } from "../../store/catalogues";
import { searchJobsList } from "../../store/jobs";
import { ReactComponent as ArrowIcon } from "./icon/arrow.svg";
import { ReactComponent as ArrowBtnIcon } from "./icon/arrow_btn.svg";
import styles from "./GroupList.module.css";
import Search from "../Search";
import { useDispatch, useSelector } from "react-redux";

const GroupFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const error = useSelector(getError()); // можно обрабытывать и ошибку !
  const dispatch = useDispatch();
  const vacancies = useSelector(getVacancies());
  const isVacanciesLoading = useSelector(getVacanciesIsLoading());
  const [vacanciesList, setVacanciesList] = useState([]);
  const [value, setValue] = useState("");
  const [paymentTo, setPaymentTo] = useState();
  const [paymentFrom, setPaymentFrom] = useState();

  useEffect(() => {
    if (!isVacanciesLoading) {
      setVacanciesList(
        vacancies.map((vac) => {
          return { value: vac.key, label: vac.title_trimmed };
        })
      );
    }
  }, [isVacanciesLoading]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(
      searchJobsList({
        paymentFrom,
        paymentTo,
        catalogues: value,
        published: 1,
        keyword: searchQuery,
      })
    );
  };
  const handleReset = () => {
    setValue("");
    setPaymentTo(0);
    setPaymentFrom(0);
    setSearchQuery("");
  };

  if (!isVacanciesLoading) {
    return (
      <>
        <form onSubmit={handleSearch} className={styles.FormWrapper}>
          <h3 className={styles.FormTitle}>Фильтры</h3>
          <Button theme="link" onClick={handleReset}>
            Cбросить все x
          </Button>
          <Select
            placeholder="Выберете отрасль "
            data={vacanciesList}
            value={value}
            onChange={setValue}
            rightSection={<ArrowIcon size="1rem" />}
            className={styles.Select}
            label="Отрасль"
          />
          <NumberInput
            placeholder="От"
            value={paymentFrom}
            onChange={setPaymentFrom}
            label="Оклад"
            className={styles.NumberInput}
            hideControls
            rightSection={<ArrowBtnIcon size="1rem" />}
          />
          <NumberInput
            placeholder="До"
            value={paymentTo}
            onChange={setPaymentTo}
            hideControls
            rightSection={<ArrowBtnIcon size="1rem" />}
          />

          <Button className={styles.BtnForm} size="M" type="submit">
            Применить
          </Button>
        </form>

        <Search
          onSearch={setSearchQuery}
          value={searchQuery}
          handleSearch={handleSearch}
        />
      </>
    );
  } else {
    return <Loader color="gray" size="xl" className={styles.Loader} />;
  }
};

export default GroupFilter;
