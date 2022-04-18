import React from 'react'
import "./SingleServices.css"
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleServices = ({ service }) => {
    const navigate = useNavigate()
    const { name, img, description, Price, id } = service || {}


    const handleNavigateDetails = () => {
        navigate(`/services/${id}`)
    }

    return (
        <div className='col-lg-4 g-2 p-3 mb-4'>
            <Card className='p-3 singleCard'>
                <div className='imgcontainer'>
                    <Card.Img className='imghover' variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='m-0'> {description}.</Card.Text>
                    <Card.Text className=''> <b> Price :${Price}  / day..</b></Card.Text>
                    <div className='w-50 mx-auto'>
                        <Button onClick={() => handleNavigateDetails(id)} variant="primary singleSrButton">Go somewhere</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleServices