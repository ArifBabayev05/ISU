import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
    const [validated, setValidated] = useState(false);

    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirmPassword = document.querySelector("input[name=confirmPassword]")

        if (confirmPassword.value === password.value) {
            confirmPassword.setCustomValidity("")
        }
        else {
            confirmPassword.setCustomValidity("Password do not match!")
        }
    }
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
                    <h1>Register</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className='mb-3' controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your first name"
                                name="name"
                            />
                            <Form.Control.Feedback type='invalid'>Please enter a name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your last name"
                                name="lastName"

                            />
                            <Form.Control.Feedback type='invalid'>Please enter your last name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your email adress"
                                name="email"
                            />
                            <Form.Control.Feedback type='invalid'>Please enter a valid email adress</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type='invalid'>Please enter a valid password</Form.Control.Feedback>
                            <Form.Text className="text-muted">Password should have at least 6 characters</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="formBasicPasswordRepeat">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter repeat password"
                                name="confirmPassword"
                                minLength={6}
                                onChange={onChange}

                            />
                            <Form.Control.Feedback type='invalid'>Both passwords should match!</Form.Control.Feedback>
                        </Form.Group>


                        <Row className='pt-2'>
                            <Col>
                                Do you have an account already?
                                <Link to={"/login"}> Login </Link>
                            </Col>
                        </Row>

                        <Button type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Submit</Button>

                        <Alert show={true} variant='danger'>
                            User with that email already exists!
                        </Alert>

                        <Alert show={true} variant='info'>
                            User created
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;
