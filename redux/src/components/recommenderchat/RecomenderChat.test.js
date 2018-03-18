import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import RecommenderChat from '../recommenderchat/RecomenderChat';

function setup(){
    return shallow(<RecommenderChat/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual('Chat with Recommenders');
}
);