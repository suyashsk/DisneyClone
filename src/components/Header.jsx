import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv, HiOutlineAdjustmentsVertical} from 'react-icons/hi2'
import { BsThreeDotsVertical } from "react-icons/bs";
import HeaderItem from './HeaderItem'
import user from '../assets/Images/userimg.jpg'
const Header = () => {

  const menu=[
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },{
      name:'SERIES',
      icon:HiTv
    }

  ]

  const[toggle,setToggle] = useState(false);
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
      <img src={logo} alt='Disney+hotstar' 
      className='w-[80px] md:w-[120px] object-cover'/>
      <div className='hidden md:flex gap-8'>
      {
        menu.map((item) =>{
          return(
            <HeaderItem name={item.name} Icon={item.icon} />
          )
        })
      }
      </div>
      <div className='flex md:hidden gap-8'>
      {
        menu.map((item,index)=>index<3 && 
        (<HeaderItem name={''} Icon={item.icon} />)    
      )}

      <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        <HeaderItem name={''} Icon={BsThreeDotsVertical} />
        { toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px]
        border-gray-700 p-3 px-5 py-4 rounded-md'>
        {
        menu.map((item,index)=>index>=3 && 
        (<HeaderItem name={item.name} Icon={item.icon} />)    
      )}
        </div> : null}
      </div>
      </div>
      </div>
      <img src={user} className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header