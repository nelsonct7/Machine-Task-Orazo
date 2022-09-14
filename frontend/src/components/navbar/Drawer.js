import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@mui/material";
import { Link } from "react-router-dom";



const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent(props) {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>

      </IconButton>
    </>
  );
}
export default DrawerComponent;