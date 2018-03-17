import initialState from './initialState';

export default function(state = initialState.users, action) {

    switch(action.type) {
        
        case 'ADD_USER':
            return [action.payload, ...state];

        default:
            return state;
    }
}