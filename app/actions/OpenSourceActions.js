import dispatcher from "../dispatcher";
import axios from "axios";

export function getRepos() {
    axios.get('https://api.github.com/users/arjunkomath/repos')
        .then(function (response) {
            dispatcher.dispatch({
                type: "FETCH_REPOS",
                repos: response.data
            });
        })
        .catch(function (response) {
            dispatcher.dispatch({
                type: "FETCH_ERROR",
                error: response
            });
        });
}