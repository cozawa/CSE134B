const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function login(username, password){
    return dispatch => {
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(username, password, error => {
            if (!error){
                dispatch(setLoginSuccess(true));
                alert("success");
            }
            else{
                dispatch(setLoginError(error));
                alert("fail");
            }
        });
    };
}

function setLoginSuccess(isLoginSuccess){
    return{
       type: SET_LOGIN_SUCCESS,
       isLoginSuccess 
    };
}

function setLoginError(loginError){
    return{
        type: SET_LOGIN_ERROR,
        loginError
    }
}

function callLoginApi(username, password, callback){
    if(username == "admin" && password =="admin"){
        return callback(null);
    }
    else{
        return callback(new Error('Invalid username and password'));
    }
}

export default function reducer(state= {
    isLoginSuccess: false,
    loginError: null

}, action){
    switch(action.type){
        case SET_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginSuccess: action.isLoginSuccess
            });
        case SET_LOGIN_ERROR:
            return Object.assign({},state,{
                loginError: action.loginError
            });
        default:
            return state;
    }
}