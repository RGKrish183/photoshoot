/**
 * @module  : Photoshoot Main Contact Us Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-03-01 21:10
 */

import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { Container, useMediaQuery, Avatar } from '@material-ui/core';

import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const styles = theme => ({
  cnts_root: {
    width: '100%'
  },
  cnts_header: {
    padding: '3.5em 0 0 0'
  },
  cnts_header_container: {
    fontFamily: 'Noticia Text',
    display: 'flex',
    justifyContent: 'center',
    '& h1': {
      color: '#018898'
    }
  },
  cnts_pannel: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  },

  cnts_img: {
    flex: 6,
    padding: '1em',
    [theme.breakpoints.only('xs')]: {
      flex: 12,
      padding: '1em'
    }
  },
  cnts_section: {
    flex: 6,
    padding: '0em 5em',
    [theme.breakpoints.only('xs')]: {
      flex: 12,
      padding: '1em'
    }
  },
  cnts_bgimg: {
    width: '100%',
    borderRadius: '5px'
  },
  cnts_icons: {
    fontSize: '15px',
    margin: '0 5px',
    color: 'red'
  },
  cnts_email: {
    fontWeight: 'bold'
  }
});

function ContactUs(props) {
  const { classes } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <div className={classes.cnts_root}>
      <div className={classes.cnts_header}>
        <Container maxWidth='md' className={classes.cnts_header_container}>
          <h1>
            <em>Contact Us</em>
          </h1>
        </Container>
      </div>

      <div className={classes.cnts_content2}>
        <Container maxWidth='lg' className={classes.cnts_container2}>
          <div className={classes.cnts_pannel}>
            <div className={classes.cnts_img}>
              <img className={classes.cnts_bgimg} src='./images/contact.jpg' />
            </div>
            <div className={classes.cnts_section}>
              <h3>
                <em>Photoshoot</em>
              </h3>
              <p>Curabitur gravida arcu ac tortor</p>
              <p>Venenatis tellus in metus</p>
              <p>vulputate</p>
              <br />

              <p className={classes.cnts_email}>
                <AlternateEmailIcon className={classes.cnts_icons} />
                support@photoshoot.com
              </p>
              <p className={classes.cnts_email}>
                <PhoneForwardedIcon className={classes.cnts_icons} />
                098-765-43-21
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styles)(ContactUs);
