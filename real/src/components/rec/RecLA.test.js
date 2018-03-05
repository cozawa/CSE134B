import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import RecLAPage from '../rec/RecLAPage';

function setup(){
    const props ={
        name: "",
        description: "",
        list: []
    };
    return shallow(<RecLAPage{...props}/>);
}

it('renders page', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual('Post your recommendations!');
}
);

/*it('Should not post empty recommendations', () =>{
    const wrapper = setup();
    const submitButton = wrapper.find('input').last();
    submitButton.simulate('click');
    expect(wrapper.state().list.length).toBe(0);
});
*/
