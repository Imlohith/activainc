import React from 'react'
import {
    Home as HomeIcon,
    BorderAll as TableIcon,
  } 
  from "@material-ui/icons";
import DoneIcon from '@material-ui/icons/Done';
import ExploreIcon from '@material-ui/icons/Explore';

export const menus = [
        {
          id: 0,
          label: "Overview",
          link: "/dashboard",
          icon: <HomeIcon style={{ color: "#fff" }} />
        },
      
        {
          id: 1,
          label: "profile",
          link: "/profile",
          icon: <TableIcon style={{ color: "#fff" }} />
        },
      
        {
          id: 3,
          label: "projects",
          link: "/projects",
          icon: <ExploreIcon style={{ color: "#fff" }} />
        },
        
        {
          id: 4,
          label: "settings",
          link: "/settings",
          icon: <DoneIcon style={{ color: "#fff" }} />
        }
]