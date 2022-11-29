import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import{useParams} from "react-router-dom";
import {  Nav, Navbar } from "react-bootstrap";

import logo from './logo.svg';
const Incartitems = (props) =>{
    const[product, setProduct] = useState([]);
    
    useEffect(() =>{
      fetch(`http://localhost:61593/api/Products/${props.productid}`)
      .then(res => res.json())
      .then(res =>{
        setProduct(res)
        
      })
    })
    
    const ActionOnDelete = () =>{
      props.ondelete(props.itemid)
    }
    return(
        <div>
           <Container>
        <div>
        <Card style={{width:"27.5vw",marginLeft:"28vw",marginTop:"3vw",background:"#B0AEAD"}}>
        <Card.Body>
        <Card.Img src={product.imglinks} style={{height:"25vw", width:"25vw"}}/>
          <Card.Text>
            <h1>{product.productname}</h1>
           {product.productdetail}
           <h5>Quantity: {props.quant}</h5>
           <h5>Price: {product.productprice}</h5>
            <h5>Total Price: Rs. {product.productprice * props.quant}</h5>
          </Card.Text>
          <Button variant="primary" onClick={ActionOnDelete}>Delete</Button>
        </Card.Body>
      </Card>
      <br></br>
      </div>
        </Container>
    </div>
    );
}

export default Incartitems;