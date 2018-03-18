import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import reducer from '../components/signin/signinreducer';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
  it('Should handle creating courses', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    //const store = createStore(reducer, initialState);
    const course = {
      title: "Clean Code"
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
