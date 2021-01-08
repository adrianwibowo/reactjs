import React from 'react'
import Button from './Button'
import '../styles/EditModal.css'

class EditModal extends React.Component {
  
    render() {
        const { edit, close, change, data, update } = this.props;
        if (edit) {
            return (
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Edit Task</h3>
                        <div className="input">
                            <input type="text" value={data.title} onChange={change} />
                        </div>
                        <div className="btn-group">
                            <Button text="oke" variant="primary" action={update} />
                            <Button text="cancel" variant="warning" action={close} />
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

EditModal.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    action: PropTypes.func,
    onChange: PropTypes.func
}

export default EditModal        