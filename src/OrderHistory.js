import { useEffect, useRef, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import{useNavigate, useParams} from "react-router-dom";
import {  Nav, Navbar } from "react-bootstrap";
import moment from "moment";
import Internalnav from "./Internalnav";

const OrderHistory = () =>{
    const{id} = useParams();
    const[items,setItems]=useState();
    const[searchTerm,setSearchTerm] = useState("");
    const navigate=useNavigate();
    
    useEffect(()=>{
        fetch(`http://localhost:61593/api/Orders/customer/${id}`)
        .then(res => res.json())
        .then(res => {
            setItems(res);
        })
    },[])

    const handleDetail = (e) =>{
      navigate(`/loggedin/orderid=${e}/customerid=${id}`);
    }


    return(
        <div  >
            <Internalnav />

        <Container>
            <br></br>
            <h1>You Order History</h1>
            <br></br>
            <h5>History of all the products you ever purchased</h5>
            <br></br>
            <h6>Search by orderid</h6>           
            <input type="text" placeholder="Search...." onChange={(event) =>{setSearchTerm(event.target.value)}}/>
            <div key={id}>
                {items?.filter((e)=>{
                    if(searchTerm==""){
                        return(
                            <Card style={{width:"40vw",marginLeft:"22vw",marginTop:"3vw",background:"#B0AEAD"}}>
                                <Card.Body>
                                    <Card.Text>
                                        <h1>Order Id: {e.orderid}</h1>
                                        <h5>City: {e.city}</h5>
                                        <h5>Address: {e.addres}</h5>
                                        <h5>Payment Method: {e.paymentMethod}</h5>
                                        <h5>Total Amount: Rs.{e.totalprice}/-</h5>
                                        <h5>Order Date: {moment(e.orderdate).format("MMM Do YY")}</h5>
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>handleDetail(e.orderid)}>View Details</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                    else if(e.orderid.toString().includes(searchTerm)){
                        return(
                            <Card style={{width:"40vw",marginLeft:"22vw",marginTop:"3vw",background:"#B0AEAD"}}>
                                <Card.Body>
                                    <Card.Text>
                                        <h1>Order Id: {e.orderid}</h1>
                                        <h5>City: {e.city}</h5>
                                        <h5>Address: {e.addres}</h5>
                                        <h5>Payment Method: {e.paymentMethod}</h5>
                                        <h5>Total Amount: Rs.{e.totalprice}/-</h5>
                                        <h5>Order Date: {moment(e.orderdate).format("MMM Do YY")}</h5>
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>handleDetail(e.orderid)}>View Details</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                }).map( e=> (
                    <Card style={{width:"40vw",marginLeft:"22vw",marginTop:"3vw",background:"#B0AEAD"}}>
                        <Card.Body>
                            <Card.Text>
                                <h1>Order Id: {e.orderid}</h1>
                                <h5>City: {e.city}</h5>
                                <h5>Address: {e.addres}</h5>
                                <h5>Payment Method: {e.paymentMethod}</h5>
                                <h5>Total Amount: Rs.{e.totalprice}/-</h5>
                                <h5>Order Date: {moment(e.orderdate).format("MMM Do YY")}</h5>
                            </Card.Text>
                            <Button variant="primary" onClick={()=>handleDetail(e.orderid)}>View Details</Button>
                    </Card.Body>
                    </Card>
      
                ))}
                {items && items.length === 0 && <h1>No orders</h1>}
                
                
            </div>
        </Container>     
      </div>
    );
}

export default OrderHistory;