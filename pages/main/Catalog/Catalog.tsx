import React, { useEffect, useState } from "react";
import styles from "./Catalog.module.scss";
import FilmCard from "./Card/Card";
import { fetchFilms } from "../../../features/films/filmsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../app/store";
import { useFetch } from "../../../customHooks/useFetch";

const Catalog = () => {
  const { data, loading, error } = useFetch("/api/cinema/movies");
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  console.log(data.data)
    return (
        <div className={styles.catalog}>
          {data.data.map((el)=>(
            <div key={`баннер - ${el.id}`}>
                <FilmCard name={el.name} imageUrl={el.imageLink} duration={el.duration}/>
            </div>
          ))}
          

        </div>
    );
};
export default Catalog