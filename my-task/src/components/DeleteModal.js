import React from 'react'
import Button from './Button'
import '../styles/DeleteModal.css'
import PropTypes from "prop-types"


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

DeleteModal.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    action: PropTypes.func
}

export default DeleteModal