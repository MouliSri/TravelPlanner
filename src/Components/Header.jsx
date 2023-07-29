import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {SiYourtraveldottv} from "react-icons/si"


const Header = () => {
  const[menu,setMenu]=useState(false);
  const handleClick=()=>{
    setMenu(!menu)
    
   }
  return (
    <div>
  
 <nav class="bg-teal-500 border-gray-200 text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
  <Link to="/" className="font-custom text-xl font-bold flex " >
    <SiYourtraveldottv className='text-3xl mx-2 hover:animate-spin' />
      Travel Planner 
      
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={handleClick} >
        <span class="sr-only">Open main menu</span>
        <svg   class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    <div className=" space-x-6">
    <Link className='text-lg font-sans hover:text-gray-200' to="/TripForm">Trip Form</Link>
      <Link className='text-lg font-sans hover:text-gray-200' to="/TripList">Trip List</Link>
      <Link className='text-lg font-sans hover:text-gray-200' to="/ActivityForm">Activity Form</Link>
      <Link className='text-lg font-sans hover:text-gray-200'  to="/ActivityList">Activity List</Link>
    </div>
    
    
    </div>
  </div>
</nav> 
{menu ? 
  <div className=' md:hidden  flex  flex-col font-serif bg-teal-600 text-white text-center'>
    <Link className='text-lg font-medium font-sans shadow py-2' to="/TripList">Trip List</Link>
      <Link className='text-lg font-medium font-sans shadow py-2' to="/TripForm">Trip Form</Link>
      <Link className='text-lg font-medium font-sans shadow py-2' to="/ActivityForm">Activity Form</Link>
      <Link className='text-lg  font-medium font-sans shadow py-2'  to="/ActivityList">Activity List</Link>
      </div>:<div></div>
}
    </div>
  )
}

export default Header

 


