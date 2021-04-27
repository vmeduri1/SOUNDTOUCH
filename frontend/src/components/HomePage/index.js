import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Songs from '../Songs/index';
import * as songsReducer from '../../store/song';

function Homepage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const songs = useSelector(state => state.songs.allSongs);

    useEffect(() => {
        dispatch(songsReducer.getSongs());
    }, [dispatch]);

    if (!sessionUser) return (
        <Redirect to="/login" />
    );

    if (!songs) {
        return null;
    }

    return (
        <div className="homepage_container">
            {songs.map((song) => {
                return (
                    <div key={song.id}>
                        <Songs song={song}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage;
