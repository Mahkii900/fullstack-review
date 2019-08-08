//INITIAL STATE
const initialState = {
    username: '',
    email: '',
    accountBalance: 0,
    transaction: []
}

//ACTION CONSTS
const SET_USER = 'SET_USER'

//ACTION BUILDERS
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

//REDUCER
export default (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_USER:
            const {username, email} = payload
            return {...state, username, email}
        default: return state
    }
}