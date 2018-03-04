import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import SignUpPage from '../signup/SignUpPage';

function setup(){
    return shallow(<SignUpPage/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Make an account');
}
);

it('No username or password error', () =>{
    const wrapper = setup();
    const submitButton = wrapper.find('button');
    submitButton.simulate('click');
    expect(wrapper.state().list.length).toBe(0);
    expect(wrapper.state().errors.title).toEqual('You must enter a username and password');
});