import React, { useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'
const Slider = () => {


    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies = () =>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp)
        })
    }
  return (
    <div>Slider</div>
  )
}

export default Slider