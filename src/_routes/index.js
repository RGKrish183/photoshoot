/**
 * @module  : Photoshoot Main Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

// Importing Layouts
import InitialLayout from '../_layouts/index';

// Importing Components
import HomeComponent from '../_views/Home/Index';
import AboutUsComponent from '../_views/AboutUs/Index';

const Routes = [
  {
    DISPLAYNAME: 'Home',
    NAME: 'home',
    URL: '/home',
    DISPLAYICON: 'home',
    LAYOUT: InitialLayout,
    COMPONENT: HomeComponent,
    SECURE: false
  },
  {
    DISPLAYNAME: 'About Us',
    NAME: 'aboutus',
    URL: '/about',
    DISPLAYICON: 'aboutus',
    LAYOUT: InitialLayout,
    COMPONENT: AboutUsComponent,
    SECURE: false
  }
];
export default Routes;
