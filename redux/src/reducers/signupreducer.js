import initialState from './initialState';

export default function(state = initialState.users, action) {

    switch(action.type) {
        case 'ADD_USER':
            alert([action.payload, ...state]);
            return [action.payload.name, ...state];

        default:
            return state;
    }
}
