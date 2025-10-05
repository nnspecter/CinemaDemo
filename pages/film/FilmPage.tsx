// import FilmPropertyes from "./filmPropertyes/FilmPropertyes"

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FilmPropertyes from "../../ui/filmPropertyes/FilmPropertyes";
import Loading from "../../ui/loading/Loading";
import FilmSessions from "../../ui/sessions/FilmSessions";
import { useFilmStore } from "../../store/useFilmStore";
import { useSeansStore } from "../../store/useSeansStore";
import Recomendations from "../../ui/Recomendations/Recomendations";
import RecPanel from "../../ui/Recomendations/RecPanel";
import styles from "./FilmPage.module.scss"

const FilmPage = () => {
    const router =useRouter();
    const idParam = router.query.id;
    const intId = idParam ? parseInt(Array.isArray(idParam) ? idParam[0] : idParam) : null;


    const {clearFilm, loadFilm, film} = useFilmStore();
    const {clearSeans} = useSeansStore();

    useEffect(()=>{
      return()=>{
        clearFilm()
        clearSeans()
      }
    }, [])

    useEffect(()=>{
      if (!intId) return
      loadFilm(intId);
    }, [intId]);


  return (
    <div>
      {film ? (
        <div className={styles.FilmPage}>
        <FilmPropertyes/>
        <FilmSessions/>
        <RecPanel/>
        <Recomendations/>
        </div>
      ) : (
        <div className="Loading"><Loading/></div>
      )}
    </div>
  )
}

export default FilmPage