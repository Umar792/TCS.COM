import React, { useEffect, useState } from 'react';
import "./Header.css"
import {FiSearch} from "react-icons/fi";
import {HiMenuAlt1} from "react-icons/hi";
import Backdrop from '@mui/material/Backdrop';
import Sarchbar from './Sarchbar';
import Sidebar from './Sidebar';
// import CircularProgress from '@mui/material/CircularProgress';

const Header = () => {
    const [searchbar , setSearchbar] = useState(false)
    const [drawer , setDrawer] = useState(false)
  return (
    <header className='header'>
 {/* ------------------Backdrop */}
 <Backdrop
        sx={{ color: "rgba(0,0,0,1)", zIndex: -1}}
        open={searchbar}
      >
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>

{/* ---------------- left-header  */}
    <div className='left_header'>
     <FiSearch onClick={()=> setSearchbar(!searchbar)}/>
     <Sarchbar searchbar={searchbar}  setSearchbar={setSearchbar} />
    </div>


    {/* --------------- middlehrader  */}
    <div className='middleheader'>
        <img src='./logo.PNG' alt='Logo'/>
    </div>

    {/* ---------- right headr  */}
    <div className='right_header'>
        <HiMenuAlt1 onClick={()=> setDrawer(true)}/>
        <Sidebar drawer={drawer} setDrawer={setDrawer}/>
    </div>
    
      
    </header>
  )
}

export default Header
