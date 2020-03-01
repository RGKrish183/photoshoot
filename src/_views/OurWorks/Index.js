/**
 * @module  : Photoshoot Main Services Us Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-03-01 20:50
 */

import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { Container, useMediaQuery } from '@material-ui/core';
import YouTube from 'react-youtube';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const styles = theme => ({
  ourw_root: {
    width: '100%'
  },
  ourw_header: {
    padding: '3.5em 0 0 0'
  },
  ourw_header_container: {
    fontFamily: 'Noticia Text',
    display: 'flex',
    justifyContent: 'center',
    '& h1': {
      color: '#018898'
    }
  },
  ourw_pannel1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ourw_pannel2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  ourw_content1: {},
  ourw_content2: {},
  ourw_content3: {},
  ourw_text: {
    lineHeight: '28px',
    letterSpacing: '0.5px',
    flex: 8,
    [theme.breakpoints.only('xs')]: {
      flex: 12,
      margin: '5px 0px !important',
      padding: '5px 0px !important'
    }
  },
  ourw_img2: {
    width: '100%',
    height: '250px'
  },
  ourw_cnt3_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  ourw_cnt3_header: {
    '& h2': {
      color: '#018898',
      padding: 0,
      margin: 0
    }
  },
  ourw_cnt3_pannel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  ourw_cnt3_items: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1em',
    margin: '1em',
    '& div': {
      flex: 6
    },
    '& div:nth-of-type(2)': {
      padding: '0 2em'
    }
  },
  ourw_cnt3_videos: {
    borderRadius: '5px',
    boxShadow: '1px 1px 4px 1px #000;'
  },
  ourw_cnt3_items_title: {
    padding: 0,
    margin: 0,
    color: '#018898'
  }
});

function Ourworks(props) {
  const { classes } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('xs'));
  const opts = {
    height: '250',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };

  const onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div className={classes.ourw_root}>
      <div className={classes.ourw_header}>
        <Container maxWidth='md' className={classes.ourw_header_container}>
          <h1>
            <em>Our Works</em>
          </h1>
        </Container>
      </div>

      <div className={classes.ourw_content1}>
        <Container maxWidth={matches ? 'lg' : 'md'}>
          <div className={classes.ourw_pannel1}>
            <p className={classes.ourw_text}>
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

      <div className={classes.ourw_content2}>
        <Container maxWidth={matches ? 'lg' : 'md'}>
          <div className={classes.ourw_pannel2}>
            <div>
              <img
                className={classes.ourw_img2}
                src='./images/ser_computing.jpg'
              />
            </div>
            <p className={classes.ourw_text}>
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

      <div className={classes.ourw_content3}>
        <Container
          maxWidth={matches ? 'lg' : 'md'}
          className={classes.ourw_cnt3_container}
        >
          <div className={classes.ourw_cnt3_pannel}>
            <div className={classes.ourw_cnt3_items}>
              <div>
                <YouTube
                  videoId='2g811Eo7K8U'
                  className={classes.ourw_cnt3_videos}
                  opts={opts}
                  onReady={onReady}
                />
              </div>
              <div>
                <h3 className={classes.ourw_cnt3_items_title}>
                  Eget nunc lobortis mattis
                </h3>
                <p className={classes.ourw_text}>
                  Curabitur gravida arcu ac tortor. Venenatis tellus in metus
                  vulputate eu scelerisque felis. Eget nunc lobortis mattis
                  aliquam. Pharetra pharetra massa massa ultricies mi quis. In
                  metus vulputate eu scelerisque felis. Malesuada fames ac
                  turpis egestas. Malesuada fames ac turpis egestas sed tempus.
                  Ut venenatis tellus in metus. Mattis nunc sed blandit libero
                  volutpat sed cras.
                </p>
              </div>
            </div>
            <div className={classes.ourw_cnt3_items}>
              <div>
                <YouTube
                  videoId='2g811Eo7K8U'
                  className={classes.ourw_cnt3_videos}
                  opts={opts}
                  onReady={onReady}
                />
              </div>
              <div>
                <h3 className={classes.ourw_cnt3_items_title}>
                  Eget nunc lobortis mattis
                </h3>
                <p className={classes.ourw_text}>
                  Curabitur gravida arcu ac tortor. Venenatis tellus in metus
                  vulputate eu scelerisque felis. Eget nunc lobortis mattis
                  aliquam. Pharetra pharetra massa massa ultricies mi quis. In
                  metus vulputate eu scelerisque felis. Malesuada fames ac
                  turpis egestas. Malesuada fames ac turpis egestas sed tempus.
                  Ut venenatis tellus in metus. Mattis nunc sed blandit libero
                  volutpat sed cras.
                </p>
              </div>
            </div>
            <div className={classes.ourw_cnt3_items}>
              <div>
                <YouTube
                  videoId='2g811Eo7K8U'
                  className={classes.ourw_cnt3_videos}
                  opts={opts}
                  onReady={onReady}
                />
              </div>
              <div>
                <h3 className={classes.ourw_cnt3_items_title}>
                  Eget nunc lobortis mattis
                </h3>
                <p className={classes.ourw_text}>
                  Curabitur gravida arcu ac tortor. Venenatis tellus in metus
                  vulputate eu scelerisque felis. Eget nunc lobortis mattis
                  aliquam. Pharetra pharetra massa massa ultricies mi quis. In
                  metus vulputate eu scelerisque felis. Malesuada fames ac
                  turpis egestas. Malesuada fames ac turpis egestas sed tempus.
                  Ut venenatis tellus in metus. Mattis nunc sed blandit libero
                  volutpat sed cras.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default withStyles(styles)(Ourworks);
