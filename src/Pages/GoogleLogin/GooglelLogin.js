import React from 'react'
import "./GoogleLogin.css"
import googlelogo from "../../logo/googlelo.png"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const GooglelLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    return (
        <div>
            <div className='or '>
                <hr />
                <span className='mx-2 fw-bold'>Or</span>
                <hr />
            </div>
            <div className='d-flex justify-contant-center align-items-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary mx-auto'><img src={googlelogo} alt="" /> Login With Google</button>
            </div>
        </div>
    )
}

export default GooglelLogin