import React from 'react'
import { useStore } from '../../../store/useStore';
import styles from "./FilmSessions.module.scss"
const FilmSessions = () => {
    const {film} = useStore();
    if (film === null) return(<></>)
  return (
    <div>FilmSessions</div>
  )
}

export default FilmSessions