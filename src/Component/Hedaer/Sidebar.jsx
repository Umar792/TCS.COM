import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {RxCross1} from "react-icons/rx";
import "./Sidebar.css"
import Accordian from './Accordian/Accordian';
const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: '#1E2222',
    padding: '20px',
    color: 'white',
    width : "350px"
  },
}));






const Sidebar = ({drawer,setDrawer}) => {
    const classes = useStyles();
   
  return (
    <>
       <Drawer anchor="right" open={drawer} onClose={()=> setDrawer(false)}  classes={{ paper: classes.drawer }}>
        <div className='sidebar'>
        <RxCross1 onClick={()=> setDrawer(!drawer)} style={{color : "white"}}/>
      
      {/* --------------------- Accordian  */}
      <Accordian/>


        </div>
      </Drawer>
    </>
  )
}

export default Sidebar
