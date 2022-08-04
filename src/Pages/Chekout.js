

import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../App';



function Chekout() {
    const { cart, setCart } = useContext(CartContext);
    
  return (
    <Container>
        
      <Row>
      {cart.items?.map((item) => (
       <div >

            <img  alt='' src={item.image} style={{width:"100px"}}/>
            <div>
         <tr>
            <th>{item.title}</th>
            <th>{item.price}</th>
            <th>{item.total}</th>
        </tr>
       </div>
    </div>
       
     
       
     
      ))}
         </Row>
   
        
   
  
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  )
}

export default Chekout