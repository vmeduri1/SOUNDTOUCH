import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSong } from '../../store/song';

const ModalForm = ({ props }) => {
    const [image, setImage] = useState(null);
    const { id, setShowModal } = props;
    const dispatch = useDispatch();
    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (image) {
            const data = {image, id};
            console.log(image);
            dispatch(updateSong(data));
            setShowModal(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="image-update">
            <label>
                Image
                <input type="file" onChange={(e) => updateFile(e)}/>
            </label>
            <button type="submit">Update</button>
        </form>
    )
}

export default ModalForm;
