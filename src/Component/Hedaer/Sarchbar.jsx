import React from 'react'
import {FiSearch} from "react-icons/fi";
import {RxCross1} from "react-icons/rx";
 

const Sarchbar = ({searchbar,setSearchbar}) => {
  return (
    <div>
      <div className={searchbar ?  'searchbar show_sidebar' : " searchbar"}>
        {/* --------left_search */}
        <div className='left_search'>
     <FiSearch/>
       {/* ------- serach in[ut ] */}
       <div className='search_input'>
            <input type='text' placeholder='What are you looking for?'/>
        </div>
        </div>
       

      

        {/* ------- right searchbar  */}
        <div className='right_searchbar'>
            <RxCross1 onClick={()=> setSearchbar(!searchbar)} style={{color : "white"}}/>
        </div>
     </div>
    </div>
  )
}

export default Sarchbar
