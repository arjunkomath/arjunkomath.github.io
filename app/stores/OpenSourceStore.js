import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class OpenSourceStore extends EventEmitter {

    constructor() {
        super()
        this.repos = [];
    }

    getAll() {
        return this.repos;
    }

    handleActions(action) {
        switch (action.type) {
            case "FETCH_REPOS":
            {
                this.repos = action.repos;
                this.emit("change");
                break;
            }
            case "FETCH_ERROR": {
                console.log(action.error);
            }

        }
    }
}

const osStore = new OpenSourceStore;
dispatcher.register(osStore.handleActions.bind(osStore));

export default osStore;