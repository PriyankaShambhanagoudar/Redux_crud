
import * as types from "./actionType";
import axios from "axios";




const getUser = (user) => ({
    type: types.GET_USERS,
    payload: user,
})

const userDeleted = () => ({
    type: types.DELETE_USERS
})

const addUser = () => ({
    type: types.POST_USERS
})


const getSingleuserData = (user) => ({
    type: types.GET_SINGLE_USERS,
    payload: user,
});

const userDataUpdate = () => ({
    type: types.UPDATE_USERS

});

//increment
export const counterIncre = () => ({
    type: types.INCREMENT
})

//decrement
export const counterDecre = () => ({
    type: types.DECREMENT
})


//increm
export const counterIncreBy = () => ({
    type: types.INCREASE
})

//toggle
export const toggleBut = () => ({
    type: types.TOGGLECOUNTER,
})


export const loginHandler = () => ({
    type: types.LOGIN,
})

export const logoutHandler = () => ({
    type: types.LOGOUT,
})

//get
export const loadUser = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(getUser(resp.data));
            })
            .catch((error) => console.log(error));
    };
};

//delete
export const deleteUser = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(userDeleted());
                dispatch(loadUser())

            })
            .catch((error) => console.log(error));
    };
};

//post
export const addUserData = (user) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, user)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(addUser());
                dispatch(loadUser())
            })
            .catch((error) => console.log(error));
    };
};

//GET SINGLE
export const getSingleUser = (id) => {

    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(getSingleuserData(resp.data));
                dispatch(loadUser())
            })
            .catch((error) => console.log(error));
    };
};

//UPDATE USER  (put)
export const updateUser = (user) => {
    return function (dispatch) {
        axios
            .patch(`${process.env.REACT_APP_API}/${user.id}`, user)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(userDataUpdate(resp.data));
                dispatch(loadUser())
            })
            .catch((error) => console.log(error));
    };
};

