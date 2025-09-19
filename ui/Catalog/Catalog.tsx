import React, { useEffect, useState } from "react";
import styles from "./Catalog.module.scss";
import FilmCard from "./Card/Card";
import { useStore } from "../../store/useStore";
import Link from "next/link";
import Loading from "../loading/Loading";

const Catalog = () => {
  const { object, loading, error, loadData } = useStore();
  const movies = object?.data || [];
  useEffect(() => {
      loadData("https://bush-cinema.onrender.com/api/cinema/movies")
  }, [loadData])

  if (loading) return <div className="Loading"><Loading/>Загрузка...</div>;
  if (error) return <p>Ошибка: {error}</p>;
    return (
        <div className={styles.catalog}>
          {object != null && object.data.map((el)=>(
            <div key={`баннер - ${el.id}`}>
                <FilmCard id={el.id} name={el.name} posterUrlPreview={el.posterUrlPreview} duration={el.duration} sessions={el.sessions} description={el.description}/>
            </div>
          ))}
          

        </div>
    );
};
export default Catalog