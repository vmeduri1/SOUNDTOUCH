import { csrfFetch } from './csrf';

const LOAD = 'songs/LOAD';
const ADD_SONG = 'songs/ADD_SONG';

const load = songs => ({
    type: LOAD,
    songs,
});

const add = songs => ({
    type: ADD_SONG,
    songs,
})

export const getSongs = () => async dispatch => {
    const response = await csrfFetch(`/api/songs`);

    if (response.ok) {
        const songs = await response.json();
        dispatch(load(songs));
    }
};

export const uploadSongs = (data) => async dispatch => {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('title', data.title);
    formData.append('artist', data.artist);
    const res = await csrfFetch('/api/songs/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: formData
    })
    if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(add(data));
    }
}

const initialState = { allSongs: [] };

const songsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            const allSongs = [...action.songs];
            return {
                allSongs
            };
        }
        case ADD_SONG: {
            console.log(action.songs)
            const allSongs = [...state.allSongs];
            allSongs.push(action.songs);
            return {
                allSongs
            }
        }
        default:
            return state;
    }
}

export default songsReducer;
