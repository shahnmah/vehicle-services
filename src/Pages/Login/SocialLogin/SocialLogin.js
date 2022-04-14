import React from 'react';
import googleIcon from '../../../images/social/google.png'
import facebookIcon from '../../../images/social/facebook.png'
import githubIcon from '../../../images/social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto'>
                    <img src={googleIcon} alt="" />
                    <span className='px-2'>Sign In With Google</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={facebookIcon} alt="" />
                    <span className='px-2'>Facebook In With Google</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto'>
                    <img src={githubIcon} alt="" />
                    <span className='px-2'>Github In With Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;