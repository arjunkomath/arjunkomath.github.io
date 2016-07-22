export default function reducer(state = {
    loading: false,
    error: false,
    repos: []
}, action) {
    switch (action.type) {
        case "FETCH": {
            return {...state, loading: true}
        }
        case "FETCH_REJECTED": {
            return {...state, error: true}
        }
        case "FETCH_FULFILLED": {
            return {...state, repos: action.payload }
        }
    }
    return state
}