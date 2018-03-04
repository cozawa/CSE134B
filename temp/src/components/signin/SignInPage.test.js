import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import SignInPage from '../signin/SignInPage';

function setup(){
    return shallow(<SignInPage/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Sign-in');
}
);
