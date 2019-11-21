import actionTypes from '../actions/actionTypes';

const initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            return [
                ...state,
                ...action.users
            ];
        }
        case actionTypes.UPDATE_USER: {
            let newState = [...state];
            let index = state.findIndex((v) => v.id === action.user.id);

            if (index !== -1) {
                newState[index] = {
                    ...newState[index],
                    id: action.user.id,
                    name: action.user.name,
                    email: action.user.email,
                    website: action.user.website,
                    phone: action.user.number,
                    address: {
                        ...newState[index].address,
                        city: action.user.city
                    },
                    company: {
                        ...newState[index].company,
                        name: action.user.companyName
                    }
                }
            }
            return [...newState];
        }
        default:
            return state;
    }
};

export default users;
