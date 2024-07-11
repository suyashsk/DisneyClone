import React, { useEffect, useRef, useState } from 'react'
import {HiChevronLeft , HiChevronRight} from 'react-icons/hi2'
import GlobalApi from '../services/GlobalApi'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;
const Slider = () => {

  const[movieList ,setMovieList] = useState([]);
  const elementRef = useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies = () =>{
        GlobalApi.getTrendingVideos.then(resp=>{
            // console.log(resp)
            // console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
        
    }

    console.log(movieList);

    function sliderRight(e){
      e.scrollLeft += screenWidth-110;
    }

    function sliderLeft(e){
      e.scrollLeft -= screenWidth-110;
    }
  return (
    <div>
      <HiChevronLeft className='hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
      <HiChevronRight className='hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
    
    <div className='flex overflow-x-auto w-full px-16 py-4 scroll-smooth scrollbar-hide'ref={elementRef}>
      {
        movieList.map((item,index)=>(
          <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover mr-4 rounded-md hover:border-[4px] border-gray-100 transition-all duration-100 ease-in ' />
        ))
      }
    </div>
    </div>
  )
}

export default Slider