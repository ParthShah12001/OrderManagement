import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import {  Nav, Navbar } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Internalnav from "./Internalnav";
const Products = () =>{
    const navigate=useNavigate();
    const {id} = useParams();
    const [prod,setProd] = useState([])
    const[searchTerm,setSearchTerm] = useState("");

  useEffect(() =>{
    fetch(`http://localhost:61593/api/Products`)
    .then(res => res.json())
    .then(res =>{
      setProd(res)
    })
    .catch(error => console.log(error))
  },[])

  const handleDetails = (e) =>{
    navigate(`/loggedin/${e.productid}/${id}`)
  }
  /* <img src="https://5.imimg.com/data5/HG/YZ/FL/SELLER-89599085/tissot-luxury-black-watch-up-500-1000x1000.jpg" />

//shoes
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Wzg_9wvgp8QYLgH9oyyc4XaAcQZz2yD4nYCqaX6kb2u3t93whqb9-y_9y6t-7_41HNQ&usqp=CAU" />


<img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnKVVd5iQki_Mb_PH366Jw6zrKtzB8TEg5g&usqp=CAU" />

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDoPAZbvOhT1boHSabCMU3Ku4_giWYlNEEQ&usqp=CAU" />*/
  
    return (
        <div>
          
            <Internalnav />
        <Container>
          <br></br>
          <h1>Products</h1>
          <br></br>
          <h5>Browser through exciting range of products</h5>
          <br></br>
          <h6>Enter then make of product you are looking for</h6>
          <input type="text" placeholder="Search...." onChange={(event) =>{setSearchTerm(event.target.value)}}/>
        <div>
          {prod.filter((e) =>{
            if(searchTerm== ""){
              return(
                <Card style={{width:"27.5vw",marginLeft:"28vw",marginTop:"3vw",background:"#B0AEAD"}}>
                  <div style={{display:"inline-block"}}>
                    <Card.Body>
                      <Card.Img src={e.imglinks} style={{height:"25vw", width:"25vw"}}/>
                  
                      <Card.Text>
                        <br></br>
                        <h1>{e.productname}</h1>
                        {e.productdetail}
                        <h5>Rs. {e.productprice}</h5>
                      </Card.Text> 
                      <Button variant="primary" onClick={() => handleDetails(e)}>Details</Button>
                    </Card.Body>
                  </div>
                </Card>
              )
            }
            else if(e.productname.toLowerCase().includes(searchTerm.toLowerCase())){
               return(
                <Card style={{width:"27.5vw",marginLeft:"28vw",marginTop:"3vw",background:"#B0AEAD"}}>
                <div style={{display:"inline-block"}}>
                  <Card.Body>
                    <Card.Img src={e.imglinks} style={{height:"25vw", width:"25vw"}}/>
                
                    <Card.Text>
                      <br></br>
                      <h1>{e.productname}</h1>
                      {e.productdetail}
                      <h5>Rs. {e.productprice}</h5>
                    </Card.Text> 
                    <Button variant="primary" onClick={() => handleDetails(e)}>Details</Button>
                  </Card.Body>
                </div>
              </Card>
               );
            }

          }).map( e=> (
        <Card style={{width:"27.5vw",marginLeft:"28vw",marginTop:"3vw",background:"#B0AEAD"}}>
          <div style={{display:"inline-block"}}>
            <Card.Body>
              <Card.Img src={e.imglinks} style={{height:"25vw", width:"25vw"}}/>
          
              <Card.Text>
                <br></br>
                <h1>{e.productname}</h1>
                {e.productdetail}
                <h5>Rs. {e.productprice}</h5>
              </Card.Text> 
              <Button variant="primary" onClick={() => handleDetails(e)}>Details</Button>
            </Card.Body>
          </div>
        </Card>
      
      ))}
      <br></br>
      </div>
        </Container>
    </div>
    );
}
export default Products;