import { useEffect, useState } from 'react';
import ModalForm from './modalForm'

function ImageUpload ({ props }) {
    const id = props;
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => {
                setShowModal(!showModal)
                console.log('yo whatup')
            }}>
                Edit
            </button>
            {showModal?<ModalForm props={{id, setShowModal}}/>: null}
        </>
    )
}

export default ImageUpload;
