import React from "react";
import { Modal, Button } from 'react-bootstrap';

import "./style/deleteAlert.css"

const DeleteAlert = ({ show, hideModal, confirmModal}) => {
    return (
        <Modal show={show} onHide={hideModal} dialogClassName="delete-alert-box">
            <Modal.Header>
                <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
            </Modal.Header>
            <Modal.Footer dialogClassName="delete-footer">
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