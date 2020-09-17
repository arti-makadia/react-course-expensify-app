import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage.js';

test('should correctly render Loading Page', () => {
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
});