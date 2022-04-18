import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./ShopDetails.css"

const ShopDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    return (
        <div style={{ height: "100vh" }}>
            <h2>Hello for the {id}</h2>
            <button onClick={() => navigate("/checkout")} className='btn btn-dark'>Checkout</button>

        </div>
    )
}

export default ShopDetails