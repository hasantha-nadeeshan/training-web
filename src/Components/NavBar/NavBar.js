import React from 'react';
import {useState} from 'react';
import { fade, makeStyles,createMuiTheme ,ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CropFreeIcon from '@material-ui/icons/CropFree';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './NavBar.css';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
      
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      color: trigger? 'primary': 'transparent',
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#02A9DE',
      },
      secondary: {
        main: '#FFFFFF',
      }
    }
  })
  

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    display: 'none',
    borderRadius: '25px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    width: 'auto',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot:{
    color:'white',
    fontSize:14,
    
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  }
  
}));

const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const [isFullScreen, setIsFullscreen] = useState(false);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const goExitFullScreen = () => {
    const elem = document.getElementById('home');
    if (isFullScreen){
        if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
        } 
        else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        } 
        else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }
        setIsFullscreen(false);  
    }
    else{
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } 
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } 
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } 
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        setIsFullscreen(true);
    }


  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  var icon = ['none', 'block'];
  const homeInset = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  })
  if (homeInset) {
    icon = (['block','none'])
  }


  return (
   
    <div className={classes.grow}>
        <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme = {theme}>
        <ElevationScroll >
        <AppBar position="fixed" >
            <Toolbar>
                <Typography  align="left" variant='h5' style={{ display:icon[0] ,color: 'white' , margin:15}} >Home</Typography >

                <IconButton
                edge="start"
                className={classes.menuButton}
                color="secondary"
                onClick={goExitFullScreen}
                style={{display:icon[1]}}
                >
            <CropFreeIcon />
            </IconButton>
            <div className={classes.grow} />

            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon color="secondary" />
                </div>
                <InputBase
                placeholder="Search UI"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="isecondary">
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="default"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      </ThemeProvider>
    </React.Fragment>
      {renderMenu}
    </div>
    
  );
}
 
export default NavBar;