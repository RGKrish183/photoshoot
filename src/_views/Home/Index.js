/**
 * @module  : Photoshoot Main Home Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  hme_root: {
    width: '100%'
  },
  hme_content: {
    backgroundImage: `url(./images/products.jpg)`,
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    position: 'absolute',
    transform: 'translate3d(0px, -16px, 0px)',
    transformOrigin: '0% 0% 0px'
  },
  hme_imgcontent: {
    color: '#fff',
    textAlign: 'center',
    '& h1': {
      position: 'absolute',
      fontSize: '100px',
      top: '35%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      [theme.breakpoints.only('xs')]: {
        fontSize: '80px',
        top: '35%'
      }
    },
    '& p': {
      fontSize: '30px',
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      [theme.breakpoints.only('xs')]: {
        fontSize: '22px'
      }
    }
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.hme_root}>
      <div className={classes.hme_main}>
        <div className={classes.hme_content}></div>
        <div className={classes.hme_imgcontent}>
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis
        aliquam malesuada bibendum arcu vitae. Faucibus vitae aliquet nec
        ullamcorper sit amet risus nullam. Velit euismod in pellentesque massa
        placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis
        ullamcorper velit sed. Iaculis nunc sed augue lacus viverra vitae congue
        eu. Placerat vestibulum lectus mauris ultrices eros in cursus. Maecenas
        pharetra convallis posuere morbi leo urna. Velit scelerisque in dictum
        non consectetur a erat nam at. Ultrices neque ornare aenean euismod
        elementum nisi quis. Suscipit adipiscing bibendum est ultricies integer
        quis auctor. Eget gravida cum sociis natoque penatibus. Egestas maecenas
        pharetra convallis posuere morbi. Enim sit amet venenatis urna. Auctor
        elit sed vulputate mi sit amet mauris. Mauris pellentesque pulvinar
        pellentesque habitant morbi tristique senectus et netus. Malesuada
        bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat
        mauris nunc congue nisi vitae suscipit tellus mauris a. Nisi scelerisque
        eu ultrices vitae auctor eu augue ut lectus. Senectus et netus et
        malesuada. Quis hendrerit dolor magna eget est lorem ipsum dolor.
      </div>

      <p>
        Curabitur gravida arcu ac tortor. Venenatis tellus in metus vulputate eu
        scelerisque felis. Eget nunc lobortis mattis aliquam. Pharetra pharetra
        massa massa ultricies mi quis. In metus vulputate eu scelerisque felis.
        Malesuada fames ac turpis egestas. Malesuada fames ac turpis egestas sed
        tempus. Ut venenatis tellus in metus. Mattis nunc sed blandit libero
        volutpat sed cras. Blandit aliquam etiam erat velit scelerisque in
        dictum. Netus et malesuada fames ac turpis egestas. Pellentesque diam
        volutpat commodo sed egestas egestas fringilla. Eget est lorem ipsum
        dolor sit amet consectetur adipiscing elit. Velit dignissim sodales ut
        eu sem integer vitae. Faucibus in ornare quam viverra orci sagittis eu.
        Justo eget magna fermentum iaculis eu non. Congue mauris rhoncus aenean
        vel elit scelerisque. Dictum fusce ut placerat orci nulla pellentesque
        dignissim enim sit. Eget est lorem ipsum dolor sit amet consectetur
        adipiscing elit. Tempus iaculis urna id volutpat lacus laoreet non
        curabitur. Dignissim enim sit amet venenatis urna cursus eget nunc
        scelerisque. Ultricies tristique nulla aliquet enim tortor at auctor
        urna. Amet porttitor eget dolor morbi non arcu risus. Enim lobortis
        scelerisque fermentum dui faucibus in ornare quam viverra. Nec sagittis
        aliquam malesuada bibendum arcu vitae. Tristique senectus et netus et
        malesuada fames ac. Sit amet consectetur adipiscing elit. Non pulvinar
        neque laoreet suspendisse interdum. Mauris commodo quis imperdiet massa
        tincidunt nunc pulvinar sapien. Placerat vestibulum lectus mauris
        ultrices eros. Posuere ac ut consequat semper viverra. In egestas erat
      </p>

      <p>
        imperdiet sed euismod nisi porta. Adipiscing enim eu turpis egestas
        pretium aenean pharetra. Tristique senectus et netus et. Enim sit amet
        venenatis urna cursus eget nunc. Eget gravida cum sociis natoque
        penatibus et magnis. Tortor consequat id porta nibh venenatis. Risus
        viverra adipiscing at in tellus integer. Placerat duis ultricies lacus
        sed turpis tincidunt id aliquet risus. Magna eget est lorem ipsum dolor
        sit amet consectetur adipiscing. Arcu non odio euismod lacinia at quis
        risus. Purus sit amet luctus venenatis lectus magna fringilla urna
        porttitor. Non arcu risus quis varius quam quisque id. Placerat duis
        ultricies lacus sed turpis. Et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut. Eget nulla facilisi etiam dignissim diam. Leo a
        diam sollicitudin tempor id eu nisl nunc. Nec nam aliquam sem et tortor
        consequat id porta. Aliquam nulla facilisi cras fermentum odio eu.
        Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
        tincidunt. Mi bibendum neque egestas congue quisque egestas diam in. A
        arcu cursus vitae congue mauris rhoncus aenean vel elit. Amet justo
        donec enim diam vulputate ut pharetra sit.
      </p>

      <p>
        imperdiet sed euismod nisi porta. Adipiscing enim eu turpis egestas
        pretium aenean pharetra. Tristique senectus et netus et. Enim sit amet
        venenatis urna cursus eget nunc. Eget gravida cum sociis natoque
        penatibus et magnis. Tortor consequat id porta nibh venenatis. Risus
        viverra adipiscing at in tellus integer. Placerat duis ultricies lacus
        sed turpis tincidunt id aliquet risus. Magna eget est lorem ipsum dolor
        sit amet consectetur adipiscing. Arcu non odio euismod lacinia at quis
        risus. Purus sit amet luctus venenatis lectus magna fringilla urna
        porttitor. Non arcu risus quis varius quam quisque id. Placerat duis
        ultricies lacus sed turpis. Et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut. Eget nulla facilisi etiam dignissim diam. Leo a
        diam sollicitudin tempor id eu nisl nunc. Nec nam aliquam sem et tortor
        consequat id porta. Aliquam nulla facilisi cras fermentum odio eu.
        Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
        tincidunt. Mi bibendum neque egestas congue quisque egestas diam in. A
        arcu cursus vitae congue mauris rhoncus aenean vel elit. Amet justo
        donec enim diam vulputate ut pharetra sit.
      </p>

      <p>
        imperdiet sed euismod nisi porta. Adipiscing enim eu turpis egestas
        pretium aenean pharetra. Tristique senectus et netus et. Enim sit amet
        venenatis urna cursus eget nunc. Eget gravida cum sociis natoque
        penatibus et magnis. Tortor consequat id porta nibh venenatis. Risus
        viverra adipiscing at in tellus integer. Placerat duis ultricies lacus
        sed turpis tincidunt id aliquet risus. Magna eget est lorem ipsum dolor
        sit amet consectetur adipiscing. Arcu non odio euismod lacinia at quis
        risus. Purus sit amet luctus venenatis lectus magna fringilla urna
        porttitor. Non arcu risus quis varius quam quisque id. Placerat duis
        ultricies lacus sed turpis. Et egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut. Eget nulla facilisi etiam dignissim diam. Leo a
        diam sollicitudin tempor id eu nisl nunc. Nec nam aliquam sem et tortor
        consequat id porta. Aliquam nulla facilisi cras fermentum odio eu.
        Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
        tincidunt. Mi bibendum neque egestas congue quisque egestas diam in. A
        arcu cursus vitae congue mauris rhoncus aenean vel elit. Amet justo
        donec enim diam vulputate ut pharetra sit.
      </p>
    </div>
  );
}
