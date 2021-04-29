import { csrfFetch } from './csrf';

const LOAD = 'songs/LOAD';
const ADD_SONG = 'songs/ADD_SONG';
const UPDATE_SONG = 'songs/UPDATE_SONG';

const load = songs => ({
    type: LOAD,
    songs,
});

const add = songs => ({
    type: ADD_SONG,
    songs,
})

const setUpdateSong = songs => ({
    type: UPDATE_SONG,
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

export const updateSong = (data) => async dispatch => {
    const formData = new FormData();
    formData.append('image', data.image);
    const res = await csrfFetch(`/api/songs/update/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: formData
    })
    console.log(formData);
    console.log(data);
    if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(setUpdateSong(data));
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
        case UPDATE_SONG: {
            const allSongs = [...state.allSongs];
            let index;
            for (let i = 0; i < allSongs.length; i++) {
                const current = allSongs[i];
                if (current.id === action.songs.id) {
                    index = i;
                }
            }
            allSongs[index] = action.songs;
            return {
                allSongs
            }
        }

        default:
            return state;
    }
}

export default songsReducer;
