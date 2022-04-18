import React, { useRef } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import GooglelLogin from '../GoogleLogin/GooglelLogin'
import "./Login.css"

const Login = () => {
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth)

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)
    const emailRef = useRef("")
    const passwordRef = useRef("")

    if (loading) {
        return (
            <div className='loginSpiner g-3'>
                <Spinner className='mx-2' animation="grow" variant="primary" />
                <Spinner className='mx-2' animation="grow" variant="secondary" />
                <Spinner className='mx-2' animation="grow" variant="success" />
            </div>
        )
    }
    let errorElement

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email)
    }

    return (
        <div>
            <div>
                <Form onSubmit={handleLoginSubmit} className='login mx-auto mb-5'>
                    <h3 className='text-center fw-bold'>LOGIN</h3>
                    <Form.Group className="mb-3 fromInput" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        {/* <input type="email" name="" id="" /> */}
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3 fromInput" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <span>New to Gym center ? <Link className='text-decoration-none text-danger' to="/register ">Go to Register</Link> </span>
                    <div className='d-flex mt-3 justify-content-center'>
                        <Button variant="warning w-50" type="submit">
                            <span className='fw-bolder text-white'>Login</span>
                        </Button>
                    </div>
                    <span onClick={() => handleResetPassword()} className='text-end d-block text-success ' role="button" >Forget Password ?</span>
                    {errorElement}
                    <GooglelLogin></GooglelLogin>
                </Form>
            </div>

        </div>
    )
}

export default Login