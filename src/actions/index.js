
export const GET_USERS = 'magenicmaster/GET_USERS';
export const GET_USERS_SUCCESS = 'magenicmaster/GET_USERS_SUCCESS';

export const getUsers = () => {
    return {
        type: GET_USERS,
        payload: {
            request: {
                url: '/users'
            }
        }
    }
}