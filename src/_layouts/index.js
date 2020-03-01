/**
 * @module  : Photoshoot Main Layout Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Importing Layout Components
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const useStyles = makeStyles(theme => ({
  lout_root: {
    width: '100%'
  }
}));

export default function InitialLayout(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.lout_root}>
        <HeaderComponent {...props} />
        <div>{children}</div>
        <FooterComponent />
      </div>
    </Fragment>
  );
}
