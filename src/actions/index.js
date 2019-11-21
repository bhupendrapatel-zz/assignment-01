import actionTypes from "./actionTypes";

export const getUsers = users => ({
    type: actionTypes.GET_USERS,
    users
});

export const updateUser = user => ({
    type: actionTypes.UPDATE_USER,
    user
})