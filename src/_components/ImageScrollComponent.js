/**
 * @module  : Photoshoot Main Home Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const styles = theme => ({
  imgs_root: {
    width: '100%'
  },
  imgs_content: {
    background: '#444',
    backgroundColor: 'transparent'
  },
  imgs_pannel: {
    position: 'relative',
    backgroundColor: '#1a1a1aba',
    padding: '7em 0em'
  },
  imgs_fixedimg: {
    filter: 'opacity(0.5)',
    opacity: '0.6',
    background: 'url(./images/ourdna.jpg)',
    backgroundAttachment: 'fixed',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover'
  }
});

function ImageScrollComponent({ classes }) {
  console.log(classes);

  return (
    <div className={classes.imgs_root}>
      <div className={classes.imgs_content}>
        <div className={classnames(classes.imgs_pannel, classes.bgimg_pannel)}>
          <div
            className={classnames(classes.imgs_fixedimg, classes.bgimg)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(ImageScrollComponent);
