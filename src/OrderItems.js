import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

const OrderItems = (props) =>{
    const[product, setProduct] = useState([]);
    const[item,setItem] = useState([]);
    const[finalCancled,setFinalCancled] = useState(false);
    
    useEffect(() =>{
      fetch(`http://localhost:61593/api/Products/${props.productid}`)
      .then(res => res.json())
      .then(res =>{
        setProduct(res)
      })

      fetch(`http://localhost:61593/api/OrderItems/${props.itemid}`)
      .then(res => res.json())
      .then(res =>{
        setItem(res)
      })

    })
    



    const ActionOnCancle = () =>{
        fetch(`http://localhost:61593/api/OrderItems/${props.itemid}/`,{
            method:'PUT',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({...item,"stat":"cancle"})
          })
          window.location.reload();
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
                <h5>Status: {props.stat}</h5>
          </Card.Text>
          {props.stat=="placed" &&
          <Button variant="primary" onClick={ActionOnCancle}>Cancle</Button>
            }
            {props.stat=="cancled" &&
          <Button variant="primary" onClick={ActionOnCancle} disabled={true}>Cancle</Button>
            }
        </Card.Body>
      </Card>
      
      <br></br>
      </div>
        </Container>
    </div>
    );
}

export default OrderItems;