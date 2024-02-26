import React from 'react'
import {useParams} from 'react-router-dom';
function User() {
    const {id} = useParams();
  return (
    <div className='bg-gray-600 p-5 text-white text-center text-xl font-bold m-7'>User: {id}</div>
  )
}

export default User