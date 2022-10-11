import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Moment from 'moment';

function Myorders (){

    const [myorders,setProd] = useState([])
    const {id} = useParams();
  useEffect(() =>{
    fetch(`http://localhost:61593/api/Orders/inmyordersbyid/${id}`)
    .then(res => res.json())
    .then(res =>{
      setProd(res)
    })
    .catch(error => console.log(error))
  },[])
  const handleChange = (e) =>{
      fetch(`http://localhost:61593/api/Orders/${e.orderid}/`,{
        method:'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({...e,"stat":"cancled"})
      })
  }

    return (
        <div>
          <Layout />
          <Container>
            <br></br>
          <div>
            {myorders.map( e=> (
          <Card style={{width:"60vw",marginLeft:"15vw",marginTop:"3vw"}}>
          <Card.Body>
            <Card.Text>
              <h1>{e.productname}</h1>
             order details :- {e.orderdetails}
             <h5>Payment Method :- {e.paymentmethod}</h5>
              <h5>price :- {e.price}</h5>
              <h5>Status :- {e.stat}</h5>
            </Card.Text>
            {e.stat=="placed" &&
            <Button variant="primary" onClick={() => handleChange(e)}>Cancle</Button>
            }
            {e.stat=="cancled" &&
            <Button variant="primary" disabled={true}>Cancle</Button>
            }


          </Card.Body>
        </Card>
        
        ))}
        <br></br>
        </div>
          </Container>
      </div>
      );
}

export default Myorders;