// import FilmPropertyes from "./filmPropertyes/FilmPropertyes"

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FilmPropertyes from "./filmPropertyes/FilmPropertyes";
import Loading from "../loading/Loading";
import FilmSessions from "./sessions/FilmSessions";
import { useFilmStore } from "../../store/useFilmStore";


const FilmPage = () => {
    const router =useRouter();
    const idParam = router.query.id;
    const intId = idParam ? parseInt(Array.isArray(idParam) ? idParam[0] : idParam) : null;


    const {loadFilm, film} = useFilmStore();

    useEffect(()=>{
      if (!intId) return
      loadFilm(intId)
      
    }, [intId]);


  return (
    <div>
      {film ? (
        <>
        <FilmPropertyes/>
        <FilmSessions/>
        </>
      ) : (
        <div className="Loading"><Loading/></div>
      )}
    </div>
  )
}

export default FilmPage