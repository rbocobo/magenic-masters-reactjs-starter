import { GET_USERS, GET_USERS_SUCCESS } from "../actions";


const initialState = {
    users: []
}
export default (state = initialState, action = {}) => {

    switch(action.type) {
        case GET_USERS:
            return { ...state };
        case GET_USERS_SUCCESS:
            console.log(action.payload.data.data);
            return { ...state, users: action.payload.data.data };
        default:
            return state;
    }

} 