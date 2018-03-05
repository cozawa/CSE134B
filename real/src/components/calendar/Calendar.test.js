import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import CalendarPage from '../calendar/CalendarPage';

function setup(){
    
    return shallow(<CalendarPage/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual('Your Calendar');
    expect(wrapper.find('h2').text()).toEqual('To Do List');
}
);
