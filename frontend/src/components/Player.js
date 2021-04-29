import React from 'react';

function Player({props}) {
    return (
        <div className="c-player">
            <audio></audio>
            <h4>Playing now</h4>
            {/* DETAILS*/}
            {/* CONTROLS*/}
            {/* <p><strong>Next up:</strong> {props.nextSong.title} by {props.nextSong.artist}</p> */}
        </div>
    )
}

export default Player;
