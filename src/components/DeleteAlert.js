import React from "react";
import { Modal, Button } from 'react-bootstrap';

const DeleteAlert = ({ show, hideModal, confirmModal}) => {
    return (
        <Modal show={show} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="default" onClick={hideModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={confirmModal}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteAlert;