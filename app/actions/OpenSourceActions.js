import axios from "axios";

export function getRepos() {
    return function (dispatch) {
        axios.get('https://api.github.com/users/arjunkomath/repos')
            .then(function (response) {
                dispatch({
                    type: "FETCH_FULFILLED",
                    payload: response.data
                });
            })
            .catch(function (response) {
                dispatch({
                    type: "FETCH_REJECTED",
                    error: response
                });
            });
    }
}