import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import 'raf/polyfill';
//import raf from './tempPolyfill.js';

//import DotEnv from 'dotenv';
//DotEnv.config({ path : '.env.test' });

Enzyme.configure({ adapter: new Adapter() });

require('dotenv').config({ path: '.env.test' });