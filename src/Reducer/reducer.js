export const formReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { state: action.payload }
        case "SIGN":
            return { state: action.payload }
        case "NULL":
            return { state: action.payload }
        default:
            return state
    }
}