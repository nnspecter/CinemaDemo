import React, { useState } from 'react'
import { useSeansStore } from '../../../store/useSeansStore';
import Loading from '../../loading/Loading';
import styles from "./Seans.module.scss"

interface Sit {
  id: string;
  row: number;
  col: number;
  state: string;
}

const Seans = () => {
  const {sits, loading, error} = useSeansStore();
  let col = 1
  if(sits===null) return <></>
  const groupedByRow = sits.reduce((acc: Record<number, Sit[]>, sit)=>{
    if(!acc[sit.row]) acc[sit.row]=[];
    acc[sit.row].push(sit)
    return acc;
  }, {})
  return (
    <div>
      {Object.keys(groupedByRow)
        .sort((a, b) => Number(a) - Number(b)) // сортировка по рядам
        .map((row) => (
          <div key={row} style={{ display: "flex", marginBottom: "8px" }}>
            {groupedByRow[Number(row)]
              .sort((a, b) => a.col - b.col) // сортировка по колонкам
              .map((sit) => (
                <div
                  key={sit.id}
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "5px",
                    background: sit.state === "FREE" ? "lightgreen" : "tomato",
                  }}
                >
                  {sit.col}
                </div>
              ))}
          </div>
        ))}
    </div>
  );

}

export default Seans