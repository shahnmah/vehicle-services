import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    if(loading || updating){
        return <Loading></Loading>
    }
    if (user) {
        console.log(user)
    }

    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        // if(agree){
        //     createUserWithEmailAndPassword(email, password)
        // }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName : name });
          navigate('/home')

    }
    return (
        <div className='container w-50 mx-auto my-4'>
            <h2 className='text-center text-primary mb-3'>Register Here</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' required type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' required type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group onClick={() => setAgree(!agree)} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? '' : 'text-danger'} name='terms' type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>
                <Button disabled={!agree} className='w-50 mx-auto d-block mb-2' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <small><Link className='text-decoration-none' to='/login'>Login</Link></small></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;