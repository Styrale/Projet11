const initialState = {
    id: '',
    email: '',
    userName: '',
    firstName: '',
    lastName: '',
    isLogged: false,
    token: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.payload, isLogged: true };
        case 'LOGOUT':
            return { ...initialState };
        case 'INFO':
            return { ...state, ...action.payload };
        case 'USERNAME':
            return { ...state, userName: action.payload };
        default: 
            return state;
    }
}

export default userReducer;