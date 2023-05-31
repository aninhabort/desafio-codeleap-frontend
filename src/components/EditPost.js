import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const EditPost = ({ show, hideModal, submitEdit, username, id, handleChange }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')

    return (
        <Modal show={show} onHide={hideModal}>
            <Modal.Header>
                <Modal.Title>Edit item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="input">
                    <label className="main-label" htmlFor="title">Title
                        <input
                            className="main-input"
                            type="text"
                            placeholder="Hello world"
                            name="title"
                            onChange={(e) => handleChange(setNewTitle, e)}
                            value={newTitle}></input>
                    </label>
                    <label className="main-label" htmlFor="content">Content
                        <textarea
                            name="content"
                            className="main-input textarea"
                            placeholder="Content here"
                            onChange={(e) => handleChange(setNewContent, e)}
                            value={newContent}></textarea>
                    </label>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={hideModal}>
                    Close
                </Button>
                <Button variant="green" onClick={() => submitEdit(newTitle, newContent, username, id)}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditPost;