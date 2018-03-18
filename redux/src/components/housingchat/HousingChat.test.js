import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import HousingChat from '../housingchat/HousingChat';

function setup(){
    return shallow(<HousingChat/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual('Chat with Housing');
}
);
