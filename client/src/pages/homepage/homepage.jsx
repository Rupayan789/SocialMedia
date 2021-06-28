import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import './styles.scss'
import { Toolbar , Typography , IconButton } from '@material-ui/core';
import  MoreIcon from '@material-ui/icons/MoreVert'
import {  makeStyles ,createMuiTheme ,ThemeProvider } from '@material-ui/core/styles';
import Landing from './landing/landing'
const useStyles=makeStyles((theme)=>({
    menuItem:{
        [theme.breakpoints.up("md")]:{
            marginRight:theme.spacing(5),
            padding:theme.spacing(1,2),
            transition:"none .3s ease-in",
            "&:hover":{
                color:"#f7217d",
                backgroundColor:"#fff",
                boxShadow:"-1px 4px 17px 2px rgba(3,3,3,0.43)",
                borderRadius:"40px",
                cursor:"pointer"
            }
        },
        [theme.breakpoints.down("md")]:{
            marginRight:theme.spacing(2)
        }
        
    },
    desktopView:{
        [theme.breakpoints.down('sm')]:{
            display:"none"
        }
    },
    mobileView:{
        [theme.breakpoints.up('md')]:{
            display:"none"
        }
    }
    
}));

const Homepage = () => {

    const classes=useStyles();

    const theme=createMuiTheme({
        typography:{
            fontFamily:"Open Sans, sans-serif",
        },
        palette:{
            primary:{
                main:"#fff"
            }
        }
    })
    return (
        <div className="homepage-body">
            <div>
                <ThemeProvider theme={theme}>

                
                <AppBar className="appbar-container" position="static">
                    <Toolbar className="toolbar-container">
                        <div className="menu-logo">
                            <Typography variant="h4" color="primary">
                                Reckon
                            </Typography>
                        </div>
                        <div className={classes.desktopView}>
                            <div className="menu-items">
                                <Typography variant="h6" className={classes.menuItem} color="primary">
                                    About
                                </Typography >
                                <Typography variant="h6" className={classes.menuItem} color="primary">  
                                    Services
                                </Typography >
                                <Typography variant="h6" className={classes.menuItem} color="primary">
                                    Features
                                </Typography >
                                <Typography variant="h6" className={classes.menuItem} color="primary">
                                    Blog
                                </Typography >
                                <Typography variant="h6" className={classes.menuItem} color="primary">
                                    Get Started
                                </Typography >
                            </div>
                        </div>
                        <div className={classes.mobileView}>
                        <IconButton
                            color="primary" >
                            <MoreIcon fontSize="large" color="primary"/>
                        </IconButton>
                        </div>
                        
                    </Toolbar>
                </AppBar>
                </ThemeProvider>
            </div>
            <Landing/>
        </div>
    )
}

export default Homepage
