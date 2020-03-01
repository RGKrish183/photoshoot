/**
 * @module  : Photoshoot Main Header Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-29 16:29
 */

import React, { Fragment, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, AppBar, Toolbar, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popover from '@material-ui/core/Popover';

import MenuItem from '@material-ui/core/MenuItem';

// Importing Routes
import CommonRoutes from '../_routes/index';

const useStyles = makeStyles(theme => ({
  lout_root: {
    width: '100%'
  },
  lout_show: {
    backgroundColor: '#1a1a1af7', //'#414040',
    transform: 'translateY(0)',
    transition: 'transform 2s'
  },
  lout_hide: {
    background: 'transparent',
    boxShadow: 'none',
    transition: 'transform 2s'
  },
  lout_headerholder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lout_link: {
    margin: '15px',
    padding: '5px',
    [theme.breakpoints.only('xs')]: {
      margin: '0px',
      padding: '0px'
    }
  },
  lout_company: {
    fontFamily: 'Noticia Text',
    [theme.breakpoints.only('xs')]: {
      fontSize: '22px'
    }
  },
  lout_weblinkholder: {
    display: 'block',
    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
  },
  lout_moblinkholder: {
    display: 'none',
    [theme.breakpoints.only('xs')]: {
      display: 'block'
    }
  },
  lout_menuButton: {
    margin: '5px'
  },
  lout_menuItem: {
    borderBottom: '1px solid #fff',
    '&:last-child': {
      border: 'none'
    }
  },
  lout_menu: {},
  lout_menu_paper: {
    width: '100%',
    backgroundColor: '#171717f0',
    color: '#fff'
  }
}));

export default function HeaderComponent(props) {
  console.log(props);
  const { location } = props;
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY;
      setNavBackground(show);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navBackground]);

  return (
    <Fragment>
      <div className={classes.lout_root}>
        <AppBar
          className={
            navBackground === 0 && location.pathname === '/home'
              ? classes.lout_hide
              : classes.lout_show
          }
        >
          <Toolbar className={classes.lout_headerholder}>
            <Typography className={classes.lout_company} variant='h4'>
              <em>PhotoShoot</em>
            </Typography>
            <Typography className={classes.lout_weblinkholder}>
              {CommonRoutes.map((item, key) => {
                return (
                  <Link
                    key={key}
                    className={classes.lout_link}
                    to={item.URL}
                    component={RouterLink}
                    color='inherit'
                    underline='none'
                  >
                    {item.DISPLAYNAME}
                  </Link>
                );
              })}
            </Typography>
            <Typography className={classes.lout_moblinkholder}>
              <IconButton
                edge='start'
                className={classes.lout_menuButton}
                color='inherit'
                aria-label='menu'
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClickMenu}
              >
                <MenuIcon />
              </IconButton>
              <Grid>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleCloseMenu}
                  className={classes.lout_menu}
                  anchorPosition={{ top: 58, left: 0 }}
                  classes={{ paper: classes.lout_menu_paper }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  anchorReference='anchorPosition'
                >
                  <Grid>
                    {CommonRoutes.map((item, key) => {
                      return (
                        <MenuItem
                          className={classes.lout_menuItem}
                          onClick={handleCloseMenu}
                          key={key}
                        >
                          <Link
                            key={key}
                            className={classes.lout_link}
                            to={item.URL}
                            component={RouterLink}
                            color='inherit'
                            underline='none'
                          >
                            {item.DISPLAYNAME}
                          </Link>
                        </MenuItem>
                      );
                    })}
                  </Grid>
                </Popover>
              </Grid>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
}
