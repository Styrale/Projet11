export const login = (payload) => {
    return {
        type: 'LOGIN',
        payload,
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export const userInfo = (payload) => {
    return {
        type: 'INFO',
        payload,
    };
};