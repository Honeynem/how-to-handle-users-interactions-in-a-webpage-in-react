import Skeleton from "react-loading-skeleton";
import React from 'react'

const loadingUsers = () => {
  return Array(6).fill({}).map(()=>{
    return (
        <div className="col-4 text-center p-5">
            <Skeleton className="mb-4" circle={true} height={100} width={100}/>
            <Skeleton className="mb-2" height={30} count={2}/>
        </div>
    )
  })
}

export default loadingUsers;
