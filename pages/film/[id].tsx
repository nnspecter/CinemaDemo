import { useRouter } from 'next/router';
import React from 'react'
import FilmPage from './FilmPage';

const IdFilmPage = () => {
    const router = useRouter();
    const id = router.query;
  return (
    <div>
        <FilmPage id={id.id}/>
    </div>
  )
}

export default IdFilmPage