/**
 * @module  : Photoshoot Main Home Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Avatar } from '@material-ui/core';
import classnames from 'classnames';

// Importing Components
import ImageScrollComponent from '../../_components/ImageScrollComponent';

// Importing Icons
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

const useStyles = makeStyles(theme => ({
  hme_root: {
    width: '100%'
  },
  hme_banner: {
    background: `url(./images/homebanner.jpg) no-repeat scroll #fff`,
    backgroundSize: 'cover',
    textAlign: 'center'
  },
  hme_content: {
    display: 'table',
    height: '590px',
    margin: 0,
    verticalAlign: 'middle',
    width: '100%'
  },
  hme_imgcontent: {
    display: 'table-cell',
    verticalAlign: 'middle',
    color: '#fff',
    textAlign: 'center',
    '& h1': {
      color: '#fff',
      margin: '.64em 0',
      font: '400 56px/1.2 Roboto,sans-serif',
      [theme.breakpoints.only('xs')]: {
        font: '300 56px/1.2 Roboto,sans-serif'
      }
    },
    '& h2': {
      color: '#fff',
      margin: '2.8em 0 2.4em',
      font: '400 20px/1.2 Roboto,sans-serif',
      [theme.breakpoints.only('xs')]: {
        font: '200 20px/1.2 Roboto,sans-serif'
      }
    }
  },
  hme_content2: {
    backgroundColor: '#018898'
  },
  hme_cnt2_pannel: {
    textAlign: 'center',
    padding: '4em 0px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& h1': {
      textTransform: 'uppercase'
    },
    '& p': {
      margin: '5px',
      textAlign: 'justify',
      lineHeight: '28px',
      letterSpacing: '0.5px'
    }
  },
  hme_content3: {
    margin: '5px'
  },
  hme_cnt3_pannel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '4em 0',
    [theme.breakpoints.only('xs')]: {
      padding: '2em 0'
    },
    [theme.breakpoints.only('lg')]: {
      padding: '3em 2em',
      margin: '1em 2em'
    }
  },
  hme_cnt3_header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em',
    [theme.breakpoints.only('xs')]: {
      padding: '1em'
    },
    '& h1': {
      color: '#018898',
      fontWeight: '100'
    },
    '& h3': {
      fontWeight: '100',
      lineHeight: '28px',
      letterSpacing: '0.5px'
    }
  },

  hme_cnt3_section: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  hme_cnt3_section_item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1em',
    margin: '5px',
    flexBasis: '26%',
    [theme.breakpoints.only('xs')]: {
      flexBasis: '90%'
    },
    color: '#fff',
    borderRadius: '5px',
    boxShadow: '0px 1px 3px 2px #ccc',
    '& p': {
      lineHeight: '28px',
      letterSpacing: '0.5px'
    }
  },
  hme_cnt3_sitem1: {
    background: '#f4a412'
  },
  hme_cnt3_sitem2: {
    background: '#1e87e3'
  },
  hme_cnt3_sitem3: {
    background: '#b4428c'
  },
  hme_cnt3_avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: '#fff',
    '& svg': {
      fontSize: '2em'
    }
  },
  hme_cnt3_avt1: {
    color: '#f4a412'
  },
  hme_cnt3_avt2: {
    color: '#1e87e3'
  },
  hme_cnt3_avt3: {
    color: '#b4428c'
  },
  hme_cnt4_pannel: {
    padding: '4em 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& h1': {
      textTransform: 'uppercase'
    },
    '& p': {
      margin: '5px',
      textAlign: 'justify',
      lineHeight: '28px',
      letterSpacing: '0.5px'
    }
  }
  // hme_content5: {
  //   background: '#444',
  //   backgroundColor: 'transparent'
  // },
  // hme_cnt5_pannel: {
  //   position: 'relative',
  //   backgroundColor: '#1a1a1aba',
  //   padding: '7em 0em'
  // },
  // hme_cnt5_fixedimg: {
  //   filter: 'opacity(0.5)',
  //   opacity: '0.6',
  //   background: 'url(./images/ourdna.jpg)',
  //   backgroundAttachment: 'fixed',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'top center',
  //   backgroundSize: 'cover'
  // }
}));

export default function Home() {
  const classes = useStyles();
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 3000,
  //   autoplaySpeed: 3000,
  //   cssEase: 'linear'
  // };

  return (
    <div className={classes.hme_root}>
      <div className={classes.hme_banner}>
        <div className={classes.hme_content}>
          <div className={classes.hme_imgcontent}>
            <h1>Hello</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
        </div>
      </div>

      <div className={classes.hme_content2}>
        <Container maxWidth='md'>
          <div className={classes.hme_cnt2_pannel}>
            <h1>Curabitur gravida arcu ac</h1>
            <p>
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

      <div className={classes.hme_content3}>
        <Container maxWidth='lg'>
          <div className={classes.hme_cnt3_pannel}>
            <div className={classes.hme_cnt3_header}>
              <h1>The foundation of digital marketing</h1>
              <h3>
                A high converting website design is the foundation to all
                successful digital marketing campaigns. There is a big
                difference between having website and having a website that
                ranks well, attracts internet visitors, and converts those
                visitors into inbound qualified leads. All digital marketing
                must start with a solid website design!
              </h3>
            </div>
            <div className={classes.hme_cnt3_section}>
              <div
                className={classnames(
                  classes.hme_cnt3_section_item,
                  classes.hme_cnt3_sitem1
                )}
              >
                <Avatar
                  className={classnames(
                    classes.hme_cnt3_avatar,
                    classes.hme_cnt3_avt1
                  )}
                >
                  <LibraryBooksOutlinedIcon />
                </Avatar>
                <h2>Content Marketing</h2>
                <p>
                  A high converting website is essential in content marketing.
                  These days, the future of a business depends on an effective
                  website design and online content strategy. At the Ad Company,
                  we care about you, your business and your potential clients.
                  So we work tirelessly towards the successful development and
                  attainment of your goals.
                </p>
              </div>
              <div
                className={classnames(
                  classes.hme_cnt3_section_item,
                  classes.hme_cnt3_sitem2
                )}
              >
                <Avatar
                  className={classnames(
                    classes.hme_cnt3_avatar,
                    classes.hme_cnt3_avt2
                  )}
                >
                  <EmojiObjectsOutlinedIcon />
                </Avatar>
                <h2>Creative</h2>
                <p>
                  Are you looking for the best marketing gurus and graphic
                  designers to handle the creative aspects of your project,
                  brand or business? Look no further than The Ad Company! As a
                  full-service website design agency company, we have proven our
                  creativity and forward thinking to gets results for our
                  clients.
                </p>
              </div>
              <div
                className={classnames(
                  classes.hme_cnt3_section_item,
                  classes.hme_cnt3_sitem3
                )}
              >
                <Avatar
                  className={classnames(
                    classes.hme_cnt3_avatar,
                    classes.hme_cnt3_avt3
                  )}
                >
                  <MonetizationOnOutlinedIcon />
                </Avatar>
                <h2>Paid Search</h2>
                <p>
                  Paid search has become an invaluable form of marketing that
                  links businesses to their prospective audiences through
                  website landing pages. We provide a competitive edge using the
                  latest in high converting website design for our clients to
                  quickly reach out to their potential customers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* <div className={classes.hme_content5}>
        <div className={classes.hme_cnt5_pannel}>
          <div className={classes.hme_cnt5_fixedimg}></div>
        </div>
      </div> */}

      <ImageScrollComponent />

      <div className={classes.hme_content4}>
        <Container maxWidth='md'>
          <div className={classes.hme_cnt4_pannel}>
            <h1>MEASURE YOUR SUCCESS</h1>
            <div>
              <p>
                On many occasions, brands are confused with website traffic
                metrics. In digital marketing, the website traffic numbers do
                matter but sometimes the numbers can be misleading. Let us help
                you navigate the maze of website traffic metrics and measure the
                success of your business internet campaigns in order to drive
                quality website traffic to your business. We guide you in
                understanding the overall value of your business’ worth to your
                audiences. We put our website design expertise to work for your
                business to make you comfortable while we measure your success
                with ease. Still confused about how to handle the figures in
                your business? Let us do the job!
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
