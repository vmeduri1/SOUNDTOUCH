import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Songs(song) {
    song = song.song


    const handleClick = (e) => {
        // const songId = e.target.attributes.value;
        return (
            <Redirect to='/'/>
        )
    }

    return (
        <div className="songs_container">
        <h3 value={song.id} onClick={handleClick}>{song.name}</h3>
        <div>{song.artist}</div>
        <img src={song.image_url}/>
        </div>
    )

}

export default Songs;
