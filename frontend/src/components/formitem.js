import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormItem = (props) => {
    const navigate = useNavigate();

    const submitForm = (event) => {
        event.preventDefault();
        var object = {};
        const formdata = new FormData(event.target);
        formdata.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);


        axios.post('http://localhost:5000/shoppinglist/', json, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                props.handler(1);
                props.close();
            })
            .catch((res) => {
                if (res.response.data.isError) {
                    localStorage.setItem('isAuthenticated', 'false');
                    navigate("/error", { state: { msg: res.response.data.msg } });
                }
            })
     
    }

    return (
        <>
            <Form id="myform" onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formItem">
                    <Form.Label>Nome Oggetto</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Inserisci oggetto" />
                    <Form.Text className="text-muted">
                        Va bene?
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formQuantity">
                    <Form.Label>Quantità</Form.Label>
                    <Form.Control type="text" name="quantity" placeholder="Inserisci Quantità" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Eventuale Descrizione</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Inserisci una Eventuale Descrizione" />
                </Form.Group>
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </>
    );
}

export default FormItem;