import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormItem from './formitem';

const Popup = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="dark" onClick={handleShow}>Aggiungi Oggetto</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Aggiunta Oggetto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormItem handler={props.handler} close={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Chiudi </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;