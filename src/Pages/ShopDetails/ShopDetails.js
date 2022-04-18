import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import CustomHook from '../CustomHook/CustomHook'
import Show from '../ShowSingleShop/Show'
import "./ShopDetails.css"

const ShopDetails = () => {
    const navigate = useNavigate()


    const handlechekout = () => {
        navigate("/checkout")
    }


    return (
        <div className='mx-auto' style={{ height: "100vh" }}>
            <div style={{ margin: "200px" }} className='mx-auto w-100'>
                <h2 className='text-center text-success'>Please Checkout Your Course...</h2>
                <button onClick={() => handlechekout()} className='btn btn-dark mx-auto d-flex'>Checkout</button>
            </div>
        </div>
    )
}
export default ShopDetails