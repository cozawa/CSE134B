export default function signIn(user) {
  return dispatch => {
    dispatch(task(user));
  }
}

function task(user) {
  return {
    type: 'CHECK_USER',
    payload: user
  };
}