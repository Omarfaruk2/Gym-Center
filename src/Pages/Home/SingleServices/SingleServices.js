import React from 'react'
import "./SingleServices.css"
import { Card, Button } from 'react-bootstrap'

const SingleServices = ({ service }) => {
    const { name, img, description, Price } = service || {}
    // console.log(service)
    return (
        <div className='col-lg-4 g-2 p-3 mb-4'>
            <Card className='p-3 singleCard'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='m-0 '> {description}.</Card.Text>
                    <Card.Text className=''> <b> From :${Price}  / day..</b></Card.Text>
                    <div className='w-50 mx-auto'>
                        <Button variant="primary singleSrButton">Go somewhere</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleServices