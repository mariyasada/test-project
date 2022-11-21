import React from 'react'
import {Tab, Tabs, useMediaQuery, useTheme} from '@mui/material';

const TabComponent = ({view,setView}) => {
    const theme=useTheme();
    const breakpoints=useMediaQuery(theme.breakpoints.down("sm"));

    const handleChange=(e,newView)=>{
        setView(newView);
      }
    
  return (
    <Tabs aria-label="monthly plan"  onChange={handleChange} value={view}
            TabIndicatorProps={{hidden:true}}
            sx={{ "& button.Mui-selected":{backgroundColor:"#60a5fa",borderRadius:"11px",fontWeight:"700",color:"black"}}}>
             
              <Tab label="Grid" value="Grid" sx={{width:breakpoints ?"50px":"160px"}}/>
              <Tab label="List" value="List" sx={{width:breakpoints ?"50px":"160px"}} />
            
     </Tabs>
  )
}

export default TabComponent