import React from 'react'
import { useState, useEffect } from 'react';
import {useLoaderData} from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(() => {
    //   fetch('https://api.github.com/users/yvrjprshr')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data);
    //   })
    // }, []);
    
  return (
    <div className='bg-gray-800 p-4 m-4 text-white text-3xl text-center flex align-items-center flex-col'>Github Followers: {data.followers}
    
    <img src={data.avatar_url} alt="git picture" width={400} />
    </div>
  )
}

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/yvrjprshr');
    return response.json();
}
