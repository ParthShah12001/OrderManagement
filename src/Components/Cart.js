import React from 'react'
import "./Cart.css"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Button, Card, Container } from "react-bootstrap";
import Layout from "./Layout";
import Moment from 'moment';
function Cart (){

    const [orders,setOrders] = useState([])
    const[tot,setTot] = useState(0.00);
    const{id} = useParams();
    useEffect(() =>{
        fetch(`http://localhost:61593/api/Orders/incartbyid/${id}`)
        .then(res => res.json())
        .then(res =>{
          setOrders(res)
        })
        .catch(error => console.log(error))
      },[])
      
      
      const handlePlaceOrder = () =>{
        orders.map(e => (
          fetch(`http://localhost:61593/api/Orders/${e.orderid}/`,{
            method:'PUT',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({...e,"stat":"placed"})
          })
        ) )
      }
      
    return(
        <div>
      <Layout />
      <Container>
        <br></br>
      
        {orders.map( e =>  (
          
      <Card style={{width:"60vw",marginLeft:"15vw",marginTop:"3vw"}}>
        
        
      <Card.Body>
        <Card.Text>
          <h1>{e.productname}</h1>
         Details:- {e.orderdetails}
         <h6>Payment Method :- {e.paymentmethod}</h6>
          <h5>Price :- {e.price}</h5>
        </Card.Text>
        <Button>Delete</Button>
      </Card.Body>
    </Card>
    
        ))}
    <br></br>
    <h3>Total Payment :- {tot} </h3>
    <Button onClick={handlePlaceOrder}>Place order</Button>
      </Container>
  </div>
    )
}

export default Cart;