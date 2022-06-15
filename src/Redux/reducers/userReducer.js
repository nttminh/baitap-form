import { CREATE_USER, DELETE_USER, SELECT_USER, UPDATE_USER } from "../constants";

const initialState = {
    users: [
        {
            id: 1,
            firstName: "Minh",
            lastName: "Nguyen",
            email: "minh@gmail.com",
            address: "Ha Noi",
            dateOfBirth: "11/11/1999",
        },
    ],
    selectedUser: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER: {
            const users = [...state.users, action.user];
            return { ...state, users };
        }
        case DELETE_USER: {
            const users = state.users.filter((user) => user.id !== action.userId);
            return { ...state, users };
        }
        case SELECT_USER: {
            return { ...state, selectedUser: action.user };
        }
        case UPDATE_USER: {
            const users = state.users.map((user) => {
                if (user.id === action.userId) {
                    return { ...action.user, id: action.userId };
                }
                return user;
            });
            return { ...state, users, selectedUser: {} };
        }
        default:
            return state;
    }
};

export default userReducer;
