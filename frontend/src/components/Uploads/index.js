import { useState } from 'react';
import {  uploadSongs } from '../../store/song';
import { useDispatch } from 'react-redux';

const Upload = () => {
    const dispatch = useDispatch();
    const [oneSong, setSongs] = useState({});
    const [artist, setArtist] = useState('');
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { file, title, artist };
        dispatch(uploadSongs(data));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Song Title
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label> Artist
                <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)}/>
            </label>
            <label> Song File
                <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
            </label>

            <button type='submit' onClick={handleSubmit}>Upload</button>
        </form>
    )

}

export default Upload;
