import initialState from './initialState';

export default function(state = initialState, action) {

    switch(action.type) {
        
        case 'CHECK_USER':
            state.users.map(user => {
                if (user.name == action.payload.name &&
                user.password == action.payload.password) {
                    return Object.assign({}, state, {
                        curruser: action.payload.name
                    })
                }
            });
            return state;

        default:
            return state;
    }
}
