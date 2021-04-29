import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import songsReducer from '../../store/song';
import './Song.css';

function Song(song) {
    song = song.song
    console.log(song);




    const handleClick = (e) => {
        // const songId = e.target.attributes.value;
        return (
            <Redirect to='/'/>
        )
    }

    return (
        <>
            <div className="master-div">
                <div className="song-container">
                    <img className="img-album-cover" src={song.image_url}/>
                    <h3 className="song-name song-info" value={song.id} onClick={handleClick}>{song.name}</h3>
                    <div className="artist-name song-info">{song.artist}</div>
                    <audio controls>
                        <source src={song.audio_url}></source>
                    </audio>
                </div>
            </div>

        </>
    )

}

export default Song;
