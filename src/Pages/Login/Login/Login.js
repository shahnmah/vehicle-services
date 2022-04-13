import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";

    const navigateRegister = () => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='container w-25 mx-auto'>
            <h2 className='text-primary text-center mt-3'>Login Here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New in here? <small role="button" className='text-primary' onClick={navigateRegister}>Register</small> </p>
        </div>
    );
};

export default Login;