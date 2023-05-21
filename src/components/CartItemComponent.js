import React from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'

const CartItemComponent = () => {


  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image crossOrigin='anonymous' src='/images/games-category.png' fluid />
          </Col>
          <Col md={2}>Logatech Company <br /> Gaming mouse</Col>
          <Col md={2}><b>89$</b></Col>
          <Col md={3}>
            <Form.Select>
              <option vlaue='1'>1</option>
              <option vlaue='2'>2</option>
              <option vlaue='3'>3</option>
              
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button type='button' variant='secondary' onClick={()=>{
              window.confirm("Are you sure?")
            }}><i className='bi bi-trash'></i></Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  )
}

export default CartItemComponent