import initialState from './initialState';

export default function(state = initialState, action) {

    switch(action.type) {
        
        case 'CHECK_USER':
            alert(state.users.length);
            state.users.map(user => {
                if (user.name == action.payload.name &&
                user.password == action.payload.password) {
                    alert("success");

                    return Object.assign({}, state, {
                        curruser: action.payload.name
                    })
                }
            });
            alert("fail");
            return state;

        default:
            return state;
    }
}