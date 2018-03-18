import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import HouseLAPage from '../house/HouseLAPage';

function setup(){
    const props ={
        name: "",
        description: "",
        list: []
    };
    return shallow(<HouseLAPage{...props}/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual('Post a listing!');
}
);

/*it('Adding recommendation to list', () =>{
    const wrapper = setup();
    const submitButton = wrapper.find('button');
    submitButton.simulate('click');
    expect(wrapper.state().list.length).toBe(1);
});
*/