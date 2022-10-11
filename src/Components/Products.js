import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Moment from 'moment';
function Products() {
  const [prod,setProd] = useState([])
  useEffect(() =>{
    fetch(`http://localhost:61593/api/Products`)
    .then(res => res.json())
    .then(res =>{
      setProd(res)
    })
    .catch(error => console.log(error))
  },[])

  const[inputs,setInputs] = useState([])
  const{id} = useParams();
  const date = Moment(new Date()).format('YYYY-MM-DD');



  const addtoCart =(e) =>{
  setInputs({...inputs,"productid": e.productid,"productname":e.productname,"customerid":id,"qunatity":1,"stat":"incart","paymentmethod":"COD","price":e.productprice,"orderdate":date,"orderdetails":e.productdetails})
    console.log(date);
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(inputs)
  };

  fetch('http://localhost:61593/api/Orders/',requestOptions)
    .then(response => response.json)
    .then(response =>{
      alert("Item added to cart");
    })
    .catch(error => console.log(error));
  }


  return (
    <div>
      <Layout />
      <Container>
        <br></br>
      <div>
        {prod.map( e=> (
      <Card style={{width:"60vw",marginLeft:"15vw",marginTop:"3vw"}}>
      <Card.Body>
        <Card.Text>
          <h1>{e.productname}</h1>
         {e.productdetails}
          <h5>{e.productprice}</h5>
        </Card.Text>
        <Button variant="primary" onClick={() => addtoCart(e)}>Add to cart</Button>
      </Card.Body>
    </Card>
    
    ))}
    <br></br>
    </div>
      </Container>
  </div>
  );
}
export default Products;
