export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DOGS_SUCCES':
            return action.payload
        default:
            return state
    }
}