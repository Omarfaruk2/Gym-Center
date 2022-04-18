import React from 'react'
import CustomHook from '../../CustomHook/CustomHook'
import SingleServices from '../SingleServices/SingleServices'
import "./Services.css"

const Services = () => {

    const services = CustomHook("services.json")


    return (
        <div id='sevices' className='bg-light'>
            <h2 className='text-center text-primary pt-5 fw-bold'>Services</h2>
            <div className='row container mx-auto'>
                {
                    services?.map(service =>
                        <SingleServices
                            key={service?.id}
                            service={service}
                        ></SingleServices>
                    )
                }
            </div>
        </div>
    )
}

export default Services