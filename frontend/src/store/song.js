const LOAD = 'songs/LOAD';

const load = songs => ({
    type: LOAD,
    songs,
});

export const getSongs = () => async dispatch => {
    const response = await fetch(`/api/songs`);

    if (response.ok) {
        const songs = await response.json();
        dispatch(load(songs));
    }
};

const initialState = { songs: {} };

const songsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            const allSongs = [];
            action.songs.forEach(song => {
                allSongs.push(song);
            });
            return {
                ...action.songs,
                ...state,
                allSongs
            };
        }

        default:
            return state;
    }
}

export default songsReducer;
