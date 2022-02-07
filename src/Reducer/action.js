export const log = () => {
    return { type: "LOGIN", payload: 'login' }
}
export const sig = () => {
    return { type: "SIGN", payload: 'signin' }
}
export const noform = () => {
    return { type: "NULL", payload: null }
}