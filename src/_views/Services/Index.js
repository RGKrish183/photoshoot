/**
 * @module  : Photoshoot Main Services Us Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-03-01 18:50
 */

import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { Container, useMediaQuery, Avatar } from '@material-ui/core';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const styles = theme => ({
  serv_root: {
    width: '100%'
  },
  serv_header: {
    padding: '3.5em 0 0 0'
  },
  serv_header_container: {
    fontFamily: 'Noticia Text',
    display: 'flex',
    justifyContent: 'center',
    '& h1': {
      color: '#018898'
    }
  },
  serv_pannel1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  serv_pannel2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  serv_content1: {},
  serv_content2: {},
  serv_content3: {},
  serv_text: {
    lineHeight: '28px',
    letterSpacing: '0.5px',
    flex: 8,
    [theme.breakpoints.only('xs')]: {
      flex: 12,
      margin: '5px 0px !important',
      padding: '5px 0px !important'
    }
  },
  serv_img2: {
    width: '100%',
    height: '250px'
  },
  serv_img3: {
    width: '100%',
    height: '150px',
    borderRadius: '5px'
  },
  serv_cnt3_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  serv_cnt3_header: {
    '& h2': {
      color: '#018898',
      padding: 0,
      margin: 0
    }
  },
  serv_cnt3_pannel: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  },
  serv_cnt3_items: {
    padding: '1em'
  },
  serv_cnt3_items_title: {
    color: '#018898'
  }
});

function Services(props) {
  const { classes } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <div className={classes.serv_root}>
      <div className={classes.serv_header}>
        <Container maxWidth='md' className={classes.serv_header_container}>
          <h1>
            <em>Our Services</em>
          </h1>
        </Container>
      </div>

      <div className={classes.serv_content1}>
        <Container maxWidth={matches ? 'lg' : 'md'}>
          <div className={classes.serv_pannel1}>
            <p className={classes.serv_text}>
              <FormatQuoteIcon style={{ fontSize: '22px' }} />
              Curabitur gravida arcu ac tortor. Venenatis tellus in metus
              vulputate eu scelerisque felis.
              <FormatQuoteIcon style={{ fontSize: '22px' }} />-{' '}
              <em>
                <b>Mark Zuckerberg</b>
              </em>
            </p>
          </div>
        </Container>
      </div>

      <div className={classes.serv_content2}>
        <Container maxWidth={matches ? 'lg' : 'md'}>
          <div className={classes.serv_pannel2}>
            <div>
              <img
                className={classes.serv_img2}
                src='./images/ser_computing.jpg'
              />
            </div>
            <p className={classes.serv_text}>
              Curabitur gravida arcu ac tortor. Venenatis tellus in metus
              vulputate eu scelerisque felis. Eget nunc lobortis mattis aliquam.
              Pharetra pharetra massa massa ultricies mi quis. In metus
              vulputate eu scelerisque felis. Malesuada fames ac turpis egestas.
              Malesuada fames ac turpis egestas sed tempus. Ut venenatis tellus
              in metus. Mattis nunc sed blandit libero volutpat sed cras.
              Blandit aliquam etiam erat velit scelerisque in dictum. Netus et
              malesuada fames ac turpis egestas. Pellentesque diam volutpat
              commodo sed egestas egestas fringilla. Eget est lorem ipsum dolor
              sit amet consectetur adipiscing elit. Velit dignissim sodales ut
              eu sem integer vitae. Faucibus in ornare quam viverra orci
              sagittis eu.
            </p>
          </div>
        </Container>
      </div>

      <div className={classes.serv_content3}>
        <Container
          maxWidth={matches ? 'lg' : 'md'}
          className={classes.serv_cnt3_container}
        >
          <div className={classes.serv_cnt3_header}>
            <h2>
              <em>Our Practices</em>
            </h2>
          </div>
          <div className={classes.serv_cnt3_pannel}>
            <div className={classes.serv_cnt3_items}>
              <div>
                <img className={classes.serv_img3} src='./images/slider1.jpg' />
              </div>
              <div>
                <h3 className={classes.serv_cnt3_items_title}>
                  Eget nunc lobortis mattis
                </h3>
                <p className={classes.serv_text}>
                  Curabitur gravida arcu ac tortor. Venenatis tellus in metus
                  vulputate eu scelerisque felis. Eget nunc lobortis mattis
                  aliquam. Pharetra pharetra massa massa ultricies mi quis. In
                  metus vulputate eu scelerisque felis. Malesuada fames ac
                  turpis egestas. Malesuada fames ac turpis egestas sed tempus.
                  Ut venenatis tellus in metus. Mattis nunc sed blandit libero
                  volutpat sed cras. Blandit aliquam etiam erat velit
                  scelerisque in dictum. Netus et malesuada fames ac turpis
                  egestas. Pellentesque diam volutpat commodo sed egestas
                  egestas fringilla.
                </p>
              </div>
            </div>
            <div className={classes.serv_cnt3_items}>
              <div>
                <img
                  className={classes.serv_img3}
                  src='./images/ser_implementation.png'
                />
              </div>
              <div>
                <h3 className={classes.serv_cnt3_items_title}>
                  Eget nunc lobortis mattis
                </h3>
                <p className={classes.serv_text}>
                  Curabitur gravida arcu ac tortor. Venenatis tellus in metus
                  vulputate eu scelerisque felis. Eget nunc lobortis mattis
                  aliquam. Pharetra pharetra massa massa ultricies mi quis. In
                  metus vulputate eu scelerisque felis. Malesuada fames ac
                  turpis egestas. Malesuada fames ac turpis egestas sed tempus.
                  Ut venenatis tellus in metus. Mattis nunc sed blandit libero
                  volutpat sed cras. Blandit aliquam etiam erat velit
                  scelerisque in dictum. Netus et malesuada fames ac turpis
                  egestas. Pellentesque diam volutpat commodo sed egestas
                  egestas fringilla.
                </p>
              </div>
            </div>
            <div className={classes.serv_cnt3_items}>
              <div>
                <img
                  className={classes.serv_img3}
                  src='./images/aboutus_cnt1.jpg'
                />
              </div>
              <div>
                <h3 className={classes.serv_cnt3_items_title}>
                  Eget nunc lobortis mattis
                </h3>
                <p className={classes.serv_text}>
                  Curabitur gravida arcu ac tortor. Venenatis tellus in metus
                  vulputate eu scelerisque felis. Eget nunc lobortis mattis
                  aliquam. Pharetra pharetra massa massa ultricies mi quis. In
                  metus vulputate eu scelerisque felis. Malesuada fames ac
                  turpis egestas. Malesuada fames ac turpis egestas sed tempus.
                  Ut venenatis tellus in metus. Mattis nunc sed blandit libero
                  volutpat sed cras. Blandit aliquam etiam erat velit
                  scelerisque in dictum. Netus et malesuada fames ac turpis
                  egestas. Pellentesque diam volutpat commodo sed egestas
                  egestas fringilla.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styles)(Services);
