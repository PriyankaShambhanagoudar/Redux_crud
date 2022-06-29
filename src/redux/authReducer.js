import * as type from "./actionType";

const initialState = {
    isAuthenticated: false,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case type.LOGIN:
            return {
                isAuthenticated: state.isAuthenticated = true
            }
        case type.LOGOUT:
            return {
                isAuthenticated: state.isAuthenticated = false
            }

        default:
            return state;
    }
}

export default authReducer;