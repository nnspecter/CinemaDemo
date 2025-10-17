// import FilmPropertyes from "./filmPropertyes/FilmPropertyes"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FilmPropertyes from "../../ui/filmPropertyes/FilmPropertyes";
import Loading from "../../ui/loading/Loading";
import FilmSessions from "../../ui/sessions/FilmSessions";
import Recomendations from "../../ui/Recomendations/Recomendations";
import RecPanel from "../../ui/Recomendations/RecPanel";
import styles from "./FilmPage.module.scss"
import { useIdStore } from "../../store/useIdStore";
import { useFilmQuery } from "../../api/queries";

const FilmPage = () => {
  const router = useRouter();    
  const { setFilmId, filmId } = useIdStore();

  // id из роутера
  const idParam = router.query.id;
  const intId = idParam ? parseInt(Array.isArray(idParam) ? idParam[0] : idParam) : 1;
  
  useEffect(() => {
    if (intId) setFilmId(intId);
  }, [intId]);

  const { data: film, isLoading } = useFilmQuery(filmId ?? 0);

  if (isLoading || !film) return <div className="Loading"><Loading /></div>;

  return (
    <div className={styles.FilmPage}>
    {isLoading ? (
      <div className="Loading"><Loading /></div>
    ) : (
      <>
        <FilmPropertyes film={film.data}/>  
        <FilmSessions sessions={film.data.sessions}/>
        <RecPanel/>
        <Recomendations/>
      </>
    )}
  </div>
  );
};

export default FilmPage;
