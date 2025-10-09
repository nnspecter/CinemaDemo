import React, { useEffect, useState } from "react";
import styles from "./Catalog.module.scss";
import FilmCard from "./Card/Card";

import Loading from "../loading/Loading";
import { useCatalogQuery } from "../../api/queries";

const Catalog = () => {
  const {data, isLoading, error} = useCatalogQuery();

  if (isLoading) return <div className="Loading"><Loading/>Загрузка...</div>;
  if (error) return <p>Ошибка: {error.message}</p>;
    return (
        <div className={styles.catalog}>
          {data.data.map((el)=>(
            <div key={`баннер - ${el.id}`}>
                <FilmCard id={el.id} name={el.name} posterUrlPreview={el.posterUrlPreview} posterUrl={el.posterUrl} duration={el.duration} sessions={el.sessions} description={el.description}/>
            </div>
          ))}
        </div>
    );
};
export default Catalog