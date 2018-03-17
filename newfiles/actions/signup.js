export default function signUp(user) {
  return dispatch => {
    dispatch(task(user));
  }
}

function task(user) {
  return {
    type: 'ADD_USER',
    payload: user
  };
}