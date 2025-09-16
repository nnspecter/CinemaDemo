import { Skeleton } from '@mui/material'
import React from 'react'


const CardSkeleton = () => {
  return (
    <div>
        <Skeleton variant="rectangular" width={200} height={500} />
    </div>
  )
}

export default CardSkeleton