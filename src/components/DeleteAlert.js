import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, Button } from 'react-bootstrap';

const DeleteAlert = ({ show, hideModal, confirmModal}) => {
    return (
        <Modal show={show} onHide={hideModal} centered>
            <Modal.Header>
                <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
            </Modal.Header>
            <Modal.Footer dialogClassName="delete-footer">
                <Button className="alert-button-cancel button-alert-box" variant="secondary" onClick={hideModal}>
                    Close
                </Button>
                <Button className="alert-button-delete button-alert-box" variant="primary" onClick={confirmModal}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteAlert;