import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'
import "./Header.css"
import { signOut } from 'firebase/auth'

const Header = () => {


    const [user, loading, error] = useAuthState(auth)
    // console.log(user)

    return (
        <>
            <Navbar collapseOnSelect className='py-3 sticky-top' expand="lg" bg="info" variant="dark">
                <Container >
                    <Navbar.Brand className='text-white ' href="home#home"> <h3>Dynamo Fitness</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">

                            <Nav.Link href="home#sevices" className='fw-bold' style={{ color: "yellow" }}  >Sevices</Nav.Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/about">About</Link>

                            {user ?
                                <button onClick={() => signOut(auth)} style={{ color: "yellow" }} className='bg-info fw-bold border-0'>SignOut</button>
                                :
                                <Link to="/login">Login</Link>

                            }
                            {
                                user && <span><small style={{ color: "white" }} className='fw-bold'>{user.email}</small></span>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header