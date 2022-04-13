import React from 'react';
import googleIcon from '../../../images/social/google.png'
import facebookIcon from '../../../images/social/facebook.png'
import githubIcon from '../../../images/social/github.png'
const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info w-50 d-block mx-auto'>
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