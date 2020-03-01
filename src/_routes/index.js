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
import ServicesComponent from '../_views/Services/Index';
import OurworksComponent from '../_views/OurWorks/Index';
import ContactUsComponent from '../_views/ContactUs/Index';

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
  },
  {
    DISPLAYNAME: 'Services',
    NAME: 'services',
    URL: '/services',
    DISPLAYICON: 'services',
    LAYOUT: InitialLayout,
    COMPONENT: ServicesComponent,
    SECURE: false
  },
  {
    DISPLAYNAME: 'Our Works',
    NAME: 'ourworks',
    URL: '/ourworks',
    DISPLAYICON: 'ourworks',
    LAYOUT: InitialLayout,
    COMPONENT: OurworksComponent,
    SECURE: false
  },
  {
    DISPLAYNAME: 'Contact Us',
    NAME: 'contactus',
    URL: '/contactus',
    DISPLAYICON: 'contactus',
    LAYOUT: InitialLayout,
    COMPONENT: ContactUsComponent,
    SECURE: false
  }
];
export default Routes;
