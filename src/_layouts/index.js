/**
 * @module  : Photoshoot Main Layout Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React, { Fragment, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Container, AppBar, Toolbar, Link } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Fab, Zoom } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Importing Routes
import CommonRoutes from '../_routes/index';

const useStyles = makeStyles(theme => ({
  lout_root: {
    width: '100%'
  },
  lout_show: {
    backgroundColor: '#414040',
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
    margin: '5px',
    padding: '5px',
    [theme.breakpoints.only('xs')]: {
      margin: '0px',
      padding: '0px'
    }
  },
  lout_company: {
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
  lout_menuItem: {},
  lout_menu: {},
  lout_zoomscroll: {
    margin: '10px'
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger} className={classes.lout_zoomscroll}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function InitialLayout(props) {
  console.log(props);
  const { children, location } = props;
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
              PhotoShoot
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
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                className={classes.lout_menu}
              >
                {CommonRoutes.map((item, key) => {
                  return (
                    <MenuItem
                      className={classes.lout_menuItem}
                      onClick={handleCloseMenu}
                    >
                      <Link
                        key={key}
                        className={classes.lout_link}
                        to={item.URL}
                        component={RouterLink}
                        color='inherit'
                      >
                        {item.DISPLAYNAME}
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar id='back-to-top-anchor' />
        <div>{children}</div>
        <ScrollTop {...props}>
          <Fab color='secondary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </Fragment>
  );
}
