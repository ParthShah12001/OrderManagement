import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Internalnav from "./Internalnav";
import{useParams} from "react-router-dom";
const ProductDetails = () =>{
    const [prod,setProd] = useState([])
    const [inputs,setInputs] = useState([])
    const[confirm,setConfirm] = useState(false);
    const[count,setCount] = useState(1);
    const{productid,id} = useParams();
    const[check,setCheck] = useState(false);

    useEffect(() =>{
        fetch(`http://localhost:61593/api/Products/${productid}`)
        .then(res => res.json())
        .then(res =>{
          setProd(res)
        })
        .catch(error => console.log(error))
    },[])

    useEffect(() =>{
        if(check){
            window.location.reload();
        }
    },[check])

    useEffect(()=>{
        if(confirm){
          const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(inputs)
          };
        
          fetch('http://localhost:61593/api/CartItems/',requestOptions)
            .then(response => response.json) 
            .then(response =>{
              alert("Item added to cart");
              setCheck(true);
            })
            .catch(error => console.log(error));
            
          
        }
    },[confirm])

    const handleIncrement = () =>{
        if(prod.productquantity - count >0){
          setCount(count + 1)
        }
        else{
          alert("Sorry, Not eought quantity available ");
        }
    }
    
    const handleDecrement = () =>{
        if(count>1){
          setCount(count-1)
        }
    }

    const addtoCart = () =>{
        setInputs({...inputs,"productid":prod.productid,"customerid":id,"productquantity":count,"productprice":prod.productprice*count})
        setConfirm(true);
    }

    return(
        <div>
            <Internalnav />
            <Container>
                <Card style={{width:"40vw",marginLeft:"22vw",marginTop:"3vw",background:"#B0AEAD"}}>
                    <Card.Body>
                    <Card.Img src={prod.imglinks} style={{height:"25vw", width:"25vw"}}/>
                        <Card.Text>
                            <h1>{prod.productname}</h1>
                            {prod.productdetail}
                            <h5>Rs. {prod.productprice}</h5>
                        </Card.Text>
                        <div>
                            <h5>{count}</h5>
                            <Button onClick={handleDecrement}>-</Button>
                            <Button onClick={() => handleIncrement()}>+</Button>
                        </div>
                        <br></br>
                        <Button variant="primary" onClick={() => addtoCart()}>Add to cart</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default ProductDetails;