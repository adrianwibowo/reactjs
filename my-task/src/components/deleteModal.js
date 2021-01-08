import React from 'react'
import Button from '../components/Button'
import '../styles/DeleteModal.css'

const DeleteModal = ({isDel, close, del}) => {
    if (isDel) {
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h5>Are you sure?</h5>
                    <div className="btn-group btn-delete">
                        <Button text="delete" variant="primary" action={del} />
                        <Button text="cancel" variant="warning" action={close} />
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default DeleteModal