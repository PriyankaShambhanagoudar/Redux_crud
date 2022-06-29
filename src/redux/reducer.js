import * as type from "./actionType";

const initialState = {
    users: [], //multiple user
    user: {}, //single user
    loading: true,


};

const usersReducers = (state = initialState, action) => {
    switch (action.type) {

        //get
        case type.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };

        //delete
        case type.DELETE_USERS:
            return {
                ...state,
                loading: false,
            }

        //post
        case type.POST_USERS:
            return {
                ...state,
                loading: false
            }


        //get singleData
        case type.GET_SINGLE_USERS:
            return {
                ...state,
                loading: false,
                user: action.payload

            }

        //update
        case type.UPDATE_USERS:
            return {
                ...state,
                loading: false,

            }


        default:
            return state;
    }
}

export default usersReducers;