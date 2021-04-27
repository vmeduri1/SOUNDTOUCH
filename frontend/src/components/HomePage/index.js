import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Song from '../Song/index';
import { getSongs } from '../../store/song';
import * as activeSongReducer from '../../store/set-active-song';
import './HomePage.css';


function Homepage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const songs = useSelector(state => state.songs.allSongs);
    const activeSong = useSelector(state => state.activeSong)

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    if (!sessionUser) return (
        <Redirect to="/login" />
    );

    if (!songs) {
        return null;
    }


    return (
        <>
            <div className="home-page-container">
                <div className="home-master">
                    {songs.map((song) => {
                        return (
                            <Song song={song}/>
                        )
                    })}
                </div>
            </div>
            {/* <div className="audio-player-container">
                <audio controls>
                    <source src={activeSong}></source>
                    {console.log(activeSong)}
                </audio>
            </div> */}
        </>
    )
}

export default Homepage;
