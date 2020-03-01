/**
 * @module  : Photoshoot Main Footer Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';

// Importing Icons
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  foot_root: {
    background: '#1a1a1af7', //#1a1a1a
    color: '#fff',
    fontFamily: 'Noticia Text',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    textAlign: 'center'
  },
  foot_menuHolder: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    [theme.breakpoints.only('xs')]: {
      padding: '1em 1em'
    },
    padding: '1em 5em',
    margin: '1em'
  },
  foot_logoHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  foot_sociallinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px'
  },
  foot_socialmedia: {
    margin: '5px'
  },
  foot_company_address: {
    margin: '5px',
    '& div': {
      margin: '5px 0px'
    }
  },
  foot_services: {
    '& h2': {
      textDecoration: 'underline',
      textDecorationColor: '#f4a412',
      textDecorationStyle: 'dotted'
    },
    '& p': {
      margin: '5px, 0px',
      fontSize: '14px',
      textAlign: 'justify'
    }
  },
  foot_links: {
    '& h2': {
      textDecoration: 'underline',
      textDecorationColor: '#f4a412',
      textDecorationStyle: 'dotted'
    },
    '& p': {
      margin: '5px, 0px',
      fontSize: '14px',
      textAlign: 'justify'
    }
  },
  foot_contactus: {
    '& h2': {
      textDecoration: 'underline',
      textDecorationColor: '#f4a412',
      textDecorationStyle: 'dotted'
    },
    '& p': {
      margin: '5px, 0px',
      fontSize: '14px',
      width: '210px',
      wordBreak: 'break-word',
      textAlign: 'justify'
    }
  }
}));

export default function FooterComponent() {
  const classes = useStyles();

  return (
    <Grid container className={classes.foot_root}>
      <div className={classes.foot_menuHolder}>
        <div className={classes.foot_services}>
          <h2>Our Services</h2>
          <p>Video production</p>
          <p>Motion Graphics Animation</p>
          <p>Business explainer Video</p>
          <p>Educational Video</p>
          <p>E-Learning Video Course</p>
        </div>
        <div className={classes.foot_links}>
          <h2>Our Sectors</h2>
          <p>Healthcare & Pharma</p>
          <p>Software As A Service</p>
          <p>Social Justice</p>
          <p>Internal Communication</p>
          <p>Financial Services</p>
        </div>
        <div className={classes.foot_contactus}>
          <h2>Recent Posts</h2>
          <p>Why Is Video So Important In Marketing?</p>
          <p>2019 Video Marketing Stats (7 Data Points You Need To Know)</p>
          <p>What To Consider Before Creating a Whiteboard Animation Video</p>
          <p>Why Video Marketing Is So Effective (5 Strong Cases)</p>
          <p>Why You Need An Explainer Video (3 Compelling Reasons)</p>
        </div>
      </div>
      <div className={classes.foot_logoHolder}>
        <div className={classes.foot_company_name}>
          <h1>
            <em>Photoshoot</em>
          </h1>
        </div>
        <div className={classes.foot_company_address}>
          <div>Lorem ipsum dolor sit amet</div>
          <div>consectetur adipiscing elit</div>
          <div>eiusmod tempor</div>
          <div>987-654-3210</div>
        </div>
        <div className={classes.foot_sociallinks}>
          <Avatar className={classes.foot_socialmedia}>
            <FacebookIcon />
          </Avatar>
          <Avatar className={classes.foot_socialmedia}>
            <TwitterIcon />
          </Avatar>
          <Avatar className={classes.foot_socialmedia}>
            <LinkedInIcon />
          </Avatar>
          <Avatar className={classes.foot_socialmedia}>
            <InstagramIcon />
          </Avatar>
        </div>
      </div>
    </Grid>
  );
}
