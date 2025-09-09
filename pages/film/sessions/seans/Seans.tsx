import React from 'react'
import { useSeansStore } from '../../../../store/useSeansStore';
import Loading from '../../../loading/Loading';

const Seans = () => {
  const {sits, loading, error} = useSeansStore();
  return (
    <div>
        {(sits===null || loading) ? <Loading/> : 
        <div>
            {sits.map((el)=>(
                <div key={el.id}>
                    Ряд {el.col} Место {el.row} Статус {el.state}
                </div>
            ))}
        </div>
        }
    </div>
    
  )
}

export default Seans