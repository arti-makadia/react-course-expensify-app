import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import 'raf/polyfill';
//import raf from './tempPolyfill.js';

Enzyme.configure({ adapter: new Adapter() });