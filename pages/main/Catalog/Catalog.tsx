import React, { useEffect, useState } from "react";
import styles from "./Catalog.module.scss";
import FilmCard from "./Card/Card";
import { useStore } from "../../../store/useStore";

const Catalog = () => {
  const { object, loading, error, loadData } = useStore();
  const movies = object?.data || [];
  useEffect(() => {
      loadData("api/cinema/movies")
  }, [loadData])

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
    return (
        <div className={styles.catalog}>
          {object != null && object.data.map((el)=>(
            <div key={`баннер - ${el.id}`}>
                <FilmCard name={el.name} imageUrl={el.imageLink} duration={el.duration}/>
            </div>
          ))}
          

        </div>
    );
};
export default Catalog