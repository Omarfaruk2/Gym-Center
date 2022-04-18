import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CustomHook from '../CustomHook/CustomHook'
import Show from '../ShowSingleShop/Show'
import "./ShopDetails.css"

const ShopDetails = () => {

    const services = CustomHook("services.json")
    console.log(services)

    const navigate = useNavigate()
    const { id } = useParams()

    return (
        <div className='mt-5' style={{ height: "100vh" }}>
            <h2>Hello for the {id}</h2>
            <button onClick={() => navigate("/checkout")} className='btn btn-dark'>Checkout</button>
            {
                services.map(service =>
                    <Show
                        key={service.id}
                        service={service}
                    ></Show>

                )
            }
        </div>
    )
}

export default ShopDetails