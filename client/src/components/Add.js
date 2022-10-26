import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom'

function Add({ Employees, setEmployees }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        setEmployees(currentEmployees => [...currentEmployees, { id: uniqueId, name, age }]);
        navigate("/");
    }

    return <div>
        <Form className="d-grif gap-2" style={{ margin: "15rem" }}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>;

}

export default Add;