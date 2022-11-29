import OrderItems from "./OrderItems";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import{ useParams} from "react-router-dom";
import Internalnav from "./Internalnav";

const OrderDetails = () =>{
    const{orderid,id} = useParams();
    const[items,setItems] = useState([]);
    
    useEffect(() =>{
        fetch(`http://localhost:61593/api/OrderItems/ordered/${orderid}/${id}`)
        .then(response => response.json())
        .then(res =>{
            setItems(res);
        })
    },[])

    return(
        <div  >
            <Internalnav />

        <Container>
            <br></br>
            <h1>You Order Details</h1>
            <br></br>
            <h5>Detailed History of all the products in the order</h5>
            <br></br>
            <div key={id}>
                {items?.map( e=> (
                    <OrderItems productid={e.productid} itemid={e.itemid} quant={e.quantity} stat = {e.stat}/>
                ))}
            </div>
        </Container>     
      </div>
    );
}

export default OrderDetails;