import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";


const LoginPage = () => {
    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <Row className="mt-5 justify-content-md-center">
                <Col md={6}>
                    <h1>Login</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>



                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your email adress"
                                name="email"
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicCheckBox">

                            <Form.Check
                                type="checkbox"
                                name="doNotLogOut"
                                label="Do not log out"
                            />
                        </Form.Group>

                        <Row className='pt-2'>
                            <Col>
                                Dont you have account?
                                <Link to={"/register"}> Register </Link>
                            </Col>
                        </Row>

                        <Button variant='primary' type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Login
                        </Button>

                        <Alert show={true} variant='danger'>
                            Wrong credentials
                        </Alert>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default LoginPage