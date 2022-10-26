import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom'

function Home({ Employees, setEmployees }) {
    // const Employees = props.Employees;
    // const { Employees } = props;

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
    }

    const handleDelete = async (id) => {
        // await axios.delete("http://localhost:4494/api/delete/" + id);
        setEmployees(currentEmployees => Employees.filter(e => e. id !== id));
    }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (Employees && Employees.length > 0)
                                ?
                                Employees.map(({id, name, age}) => {
                                    return (
                                        <tr>
                                            <td>
                                                {name}
                                            </td>
                                            <td>
                                                {age}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button onClick={() => handleEdit(id, name, age)}>Edit</Button>
                                                </Link>
                                            <Button onClick={() => handleDelete(id)}>DELETE</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                    <Button size="lg">create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;