import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import FriendChat from '../friendchat/FriendChat';

function setup(){
    return shallow(<FriendChat/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual('Chat with Friend Group');
}
);