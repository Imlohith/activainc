import React from 'react'
import {
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
import useStyles from './styles'

import { Inbox as InboxIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

function SidebarLink({label, icon, link }) {
    const classes = useStyles();
    console.log(label)
    return (
        <>
             <ListItem
                button
                component={link && Link}
                className={classes.link}
                to={link}
                disableRipple
            >
                <ListItemIcon>
                {icon ? icon : <InboxIcon />}
                </ListItemIcon>
                <ListItemText
                primary={label}
                />
      </ListItem>
        </>
    )
}

export default SidebarLink
