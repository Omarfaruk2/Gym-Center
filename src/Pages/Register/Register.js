
import React, { useRef } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import "./Register.css"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import GooglelLogin from '../GoogleLogin/GooglelLogin'


const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth)


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


    const handleSubmitRegisterForm = (event) => {

        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        // console.log(email, password)
        createUserWithEmailAndPassword(email, password)


    }
    return (
        <div className='my-4'>
            <Form onSubmit={handleSubmitRegisterForm} className='login mx-auto'>
                <h3 className='text-center fw-bold'>Register</h3>
                <Form.Group className="mb-3 fromInput" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 fromInput" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <span>Already Register ? <Link className='text-decoration-none text-danger' to="/login ">Go to Register</Link> </span>

                <div className='d-flex mt-3 justify-content-center'>
                    <Button variant="primary w-50" type="submit">
                        Sign Up
                    </Button>
                </div>
                <GooglelLogin></GooglelLogin>
            </Form>
        </div>
    )
}

export default Register