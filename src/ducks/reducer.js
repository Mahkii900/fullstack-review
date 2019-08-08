//INITIAL STATE
const initialState = {
    username: '',
    email: '',
    accountBalance: 0,
    transaction: []
}

//ACTION CONSTS

//ACTION BUILDERS

//REDUCER
export default (state=initialState, action) => {
    const {type, payload} = action
    switch (type) {
        default: return state
    }
}