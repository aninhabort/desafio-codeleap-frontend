import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from "react-bootstrap";

import './style/AlertBox.css'

const EditPost = ({ show, hideModal, submitEdit, username, id, handleChange }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')

    return (
        <Modal show={show} onHide={hideModal} centered dialogClassName="alert-box">
            <Modal.Header>
                <Modal.Title>Edit item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="input">
                    <label htmlFor="title">Title
                        <input
                            className="edit-alert-input"
                            type="text"
                            placeholder="Hello world"
                            name="title"
                            onChange={(e) => handleChange(setNewTitle, e)}
                            value={newTitle}></input>
                    </label>
                    <label className="main-label" htmlFor="content">Content
                        <textarea
                            name="content"
                            className="edit-alert-input textarea"
                            placeholder="Content here"
                            onChange={(e) => handleChange(setNewContent, e)}
                            value={newContent}></textarea>
                    </label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="alert-button-cancel button-alert-box" variant="secondary" onClick={hideModal}>
                    Close
                </Button>
                <Button className="alert-button-save button-alert-box" variant="primary" onClick={() => submitEdit(newTitle, newContent, username, id)}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditPost;