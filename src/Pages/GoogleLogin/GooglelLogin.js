import { React, useEffect } from 'react'
import "./GoogleLogin.css"
import googlelogo from "../../logo/googlelo.png"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const GooglelLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    console.log(user)
    const navigate = useNavigate()

    let location = useLocation()
    let from = location.state?.from?.pathname || "/"


    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [from, navigate, user])

    if (loading) {
        return (
            <div className='loginSpiner g-3'>
                <Spinner className='mx-2' animation="grow" variant="primary" />
            </div>
        )
    }


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