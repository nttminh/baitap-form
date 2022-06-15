import { CREATE_USER, DELETE_USER, SELECT_USER, UPDATE_USER } from "../constants";

export const createUser = (user) => {
    return {
        type: CREATE_USER,
        user,
    };
}

export const updateUser = (userId, user) => {
    return {
        type: UPDATE_USER,
        userId,
        user,
    };
}

export const selectUser = (user) => {
    return {
        type: SELECT_USER,
        user,
    };
}

export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        userId,
    };
}