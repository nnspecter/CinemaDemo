// import FilmPropertyes from "./filmPropertyes/FilmPropertyes"

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import FilmPropertyes from "./filmPropertyes/FilmPropertyes";
import Loading from "../loading/Loading";
import FilmSessions from "./sessions/FilmSessions";

interface movie {
  id: number | string;
  name: string;
  genre: string;
  imageLink: string;
  duration: string;
  year: number;
  description: string;
  sessions: any
}

const FilmPage = () => {
    const router =useRouter();
    const intId = router.query.id;
    const {updateFilm, film} = useStore();
    const [data, setData] = useState<movie | null>(null);

    useEffect(()=>{
      if (!intId) return
      axios.get(`https://bush-cinema.onrender.com/api/cinema/movies/${intId}`)
      .then((res)=> {setData(res.data.data); updateFilm(res.data.data)})
      .catch((err) => console.error(err));
      
    }, [intId]);

    useEffect(() => {
      if (data) {
        console.log("Загружен фильм:", data);
      }
    }, [data]);

  return (
    <div>
      {data && film ? (
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