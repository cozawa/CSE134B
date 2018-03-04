import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import GroupPage from '../group/GroupPage';

function setup(){
    const props ={
        name: "",
        list: [],
        errors:{}
    };
    return shallow(<GroupPage{...props}/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('header').text()).toEqual('Add your group!');
}
);

it('No group name added error', () =>{
    const wrapper = setup();
    const submitButton = wrapper.find('input').last();
    submitButton.simulate('click');
    expect(wrapper.state().list.length).toBe(0);
    expect(wrapper.state().errors.title).toEqual('You must enter a group name');
});
