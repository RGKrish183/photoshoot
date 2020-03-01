/**
 * @module  : Photoshoot Main Abouts Us Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { Container, useMediaQuery, Avatar } from '@material-ui/core';
import classnames from 'classnames';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const styles = theme => ({
  abt_root: {
    width: '100%'
  },
  abt_header: {
    padding: '3.5em 0 0 0'
  },
  abt_headerContainer: {
    fontFamily: 'Noticia Text',
    display: 'flex',
    justifyContent: 'center',
    '& h1': {
      color: '#018898'
    }
  },
  hme_abt_pannel1: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '& p': {
      margin: '5px',
      textAlign: 'justify',
      lineHeight: '28px',
      letterSpacing: '0.5px',
      padding: '1em'
    },
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column-reverse'
    }
  },
  hme_abt_pannel: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '& p': {
      margin: '5px',
      textAlign: 'justify',
      lineHeight: '28px',
      letterSpacing: '0.5px',
      padding: '1em'
    },
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column-reverse'
    },
    backgroundColor: '#f0f8ff',
    borderRadius: '5px',
    boxShadow: '0px 0px 2px 0px #cccccce0;'
  },
  hme_abt_pannel2: {
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column !important'
    }
  },
  abt_content1: {
    margin: '5px',
    padding: '1em 0'
  },
  abt_contentContainer: {
    borderRadius: '5px'
  },
  hme_abt_text: {
    flex: 8,
    margin: '0px !important',
    padding: '0px !important',
    [theme.breakpoints.only('xs')]: {
      flex: 12,
      margin: '5px 0px !important',
      padding: '5px 0px !important'
    }
  },
  hme_abt_text2: {
    // backgroundColor: '#f0f8ff',
    // borderRadius: '5px',
    // boxShadow: '0px 0px 2px 0px #cccccce0;'
  },
  hme_abt_text3: {
    // backgroundColor: '#f0f8ff',
    // borderRadius: '5px',
    // boxShadow: '0px 0px 2px 0px #cccccce0;'
  },
  hme_abt_img: {
    display: 'flex',
    '& img': {
      width: 'calc(100% - 5px)'
    },
    flex: 4,
    [theme.breakpoints.only('xs')]: {
      flex: 12,
      margin: '5px 0px !important',
      padding: '5px 0px !important'
    }
  },
  hme_abt_avatar: {
    width: '220px',
    height: '220px'
  },
  abt_content2: {
    margin: '5px',
    padding: '1em 0'
  },
  abt_content3: {
    margin: '5px',
    padding: '1em 0'
  }
});

function AboutUs(props) {
  const { classes } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <div className={classes.abt_root}>
      <div className={classes.abt_header}>
        <Container maxWidth='md' className={classes.abt_headerContainer}>
          <h1>
            <em>About Us</em>
          </h1>
        </Container>
      </div>

      <div className={classes.abt_content1}>
        <Container
          maxWidth={matches ? 'lg' : 'md'}
          className={classes.abt_contentContainer}
        >
          <div className={classes.hme_abt_pannel1}>
            <p className={classes.hme_abt_text}>
              <FormatQuoteIcon style={{ fontSize: '22px' }} />
              Curabitur gravida arcu ac tortor. Venenatis tellus in metus
              vulputate eu scelerisque felis. Eget nunc lobortis mattis aliquam.
              Pharetra pharetra massa massa ultricies mi quis. In metus
              vulputate eu scelerisque felis. Malesuada fames ac turpis egestas.
              Malesuada fames ac turpis egestas sed tempus. Ut venenatis tellus
              in metus. Mattis nunc sed blandit libero volutpat sed cras.
              Blandit aliquam etiam erat velit scelerisque in dictum. Netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        </Container>
      </div>

      <div className={classes.abt_content2}>
        <Container
          maxWidth={matches ? 'lg' : 'md'}
          className={classes.abt_contentContainer2}
        >
          <div
            className={classnames(
              classes.hme_abt_pannel,
              classes.hme_abt_pannel2
            )}
          >
            <p className={classes.hme_abt_img}>
              <Avatar
                className={classes.hme_abt_avatar}
                src='./images/aboutus_cnt3.jpg'
              ></Avatar>
            </p>
            <p className={classes.hme_abt_text2}>
              <h3>
                <em>Curabitur gravida arcu ac</em>
              </h3>
              Curabitur gravida arcu ac tortor. Venenatis tellus in metus
              vulputate eu scelerisque felis. Eget nunc lobortis mattis aliquam.
              Pharetra pharetra massa massa ultricies mi quis. In metus
              vulputate eu scelerisque felis. Malesuada fames ac turpis egestas.
              Malesuada fames ac turpis egestas sed tempus. Ut venenatis tellus
              in metus. Mattis nunc sed blandit libero volutpat sed cras.
              Blandit aliquam etiam erat velit scelerisque in dictum. Netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        </Container>
      </div>

      <div className={classes.abt_content3}>
        <Container
          maxWidth={matches ? 'lg' : 'md'}
          className={classes.abt_contentContainer3}
        >
          <div className={classes.hme_abt_pannel}>
            <p className={classes.hme_abt_text3}>
              <h3>
                <em>Curabitur gravida arcu ac</em>
              </h3>
              Curabitur gravida arcu ac tortor. Venenatis tellus in metus
              vulputate eu scelerisque felis. Eget nunc lobortis mattis aliquam.
              Pharetra pharetra massa massa ultricies mi quis. In metus
              vulputate eu scelerisque felis. Malesuada fames ac turpis egestas.
              Malesuada fames ac turpis egestas sed tempus. Ut venenatis tellus
              in metus. Mattis nunc sed blandit libero volutpat sed cras.
              Blandit aliquam etiam erat velit scelerisque in dictum. Netus et
              malesuada fames ac turpis egestas.
            </p>
            <p className={classes.hme_abt_img}>
              <Avatar
                className={classes.hme_abt_avatar}
                src='./images/aboutus_cnt1.jpg'
              ></Avatar>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styles)(AboutUs);
