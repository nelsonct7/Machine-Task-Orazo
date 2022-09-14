import React,{useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import {useSelector,useDispatch} from 'react-redux'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,

} from "@mui/material"; 
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    
  return ( 
    <AppBar position="sticky" 
    
    style={{backgroundColor:"navy"}}>
      <CssBaseline /> 
      <Toolbar>
        <Typography variant="h5" className={classes.logo} style={{display:"flex"}}>
          <div style={{backgroundColor:'black',color:'white',borderRadius:20,marginRight:50}}>FS</div>
          Form Submission
        </Typography>
        
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <>
          <div className={classes.navlinks}>
            <Link to='/' className={classes.link}>
              <HomeIcon/>
            </Link>
          </div>
          </>
        )}
       
        
      </Toolbar>
      
    </AppBar>
  );
}
export default Navbar;