const activeSongReducer = (state = {}, action) => {
    switch(action.type) {
        case "activeSong/set":
            return {...state};
        default:
            return state;
    }
}

export default activeSongReducer;
