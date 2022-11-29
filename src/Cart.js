import { useEffect, useRef, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import{useParams} from "react-router-dom";
import {  Nav, Navbar } from "react-bootstrap";
import emailjs from '@emailjs/browser'
import logo from './logo.svg';
import Incartitems from "./Incartitems";
import { MDBInput} from 'mdb-react-ui-kit';
import { Alert } from "bootstrap";
import { useNavigate } from "react-router-dom";
import HttpRequest from "./Hooks/HttpRequest";
import Internalnav from "./Internalnav";
const Cart = () =>{
    const{id} = useParams();
    const [emailvalue,setEmailValue] = useState();
    const[items,setItems]=useState();
    const[address,setAddress] = useState();
    const[city,setCity] = useState();
    const[region,setRegion] = useState();
    const[paymentMethod,setPaymentMethod] = useState();
    const[orderid,setOrderid] = useState();
    const[confirmation,setConfirmation] = useState(false);
    const[final,setFinal] = useState(false)
    const[totalprice,setTotalprice] = useState();
    const current = new Date();
    const[emailvaluesset,setEmailvaluesset] = useState(false);
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`
    useEffect(()=>{
        fetch(`http://localhost:61593/api/CartItems/customer/${id}`)
        .then(res => res.json())
        .then(res => {
            setItems(prev =>prev=res);
        })

        fetch("http://localhost:61593/api/Orders/getlastorder")
        .then(response => response.json())
        .then(res =>{
           setOrderid(prev => prev=res.orderid+1);
        })
        console.log(orderid);

        fetch(`http://localhost:61593/api/CartItems/gettotal/${id}`)
        .then(response => response.json())
        .then(res =>{
          setTotalprice(prev => prev=res)
          console.log(totalprice)
        })

        console.log(date)
    },[])


    useEffect(() =>{
      if(emailvaluesset){
        var templateparams={
          "from_name":"Seller",
          "message":`Your Order has been placed Succesfully. Your Orderid is ${orderid} and your order items are .Your total payable amount is Rs. ${totalprice}/-.Your order will be delivered in 6 to 7 business days.`
        }
      emailjs.send('service_50gmywn', 'template_2fuqijc', templateparams, 'IwpiSK40hoj4-I3yM')
        .then((result) => {
            console.log(result.text);
            setFinal(true);
        }, (error) => {
            console.log(error.text);
        });
      }
    },[emailvaluesset])
    useEffect(()=>{
      if(final){
        
        window.location.reload();
        alert("Order Placed")
      }
    },[final])
    
    const deletehandler = (todeleteitemid) =>{
      fetch(`http://localhost:61593/api/CartItems/${todeleteitemid}/`,{
          method:'DELETE',}).catch(error => console.log(error));
          window.location.reload();
    }

    const handlePM = (event) =>{
      setPaymentMethod(event.target.value);
    }

    const handleAddress = (event) =>{
      setAddress(event.target.value)
    }

    const handleCity = (event) =>{
      setCity(event.target.value);
    }

    const handleRegion = (event) =>{
      setRegion(event.target.value);
    }

    const placeOrder = () =>{
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({"orderid":orderid,"customerid":id,"totalprice":totalprice,"addres":address,"city":city,"region":region,"paymentMethod":paymentMethod,"orderdate":current})
      };
    
      fetch('http://localhost:61593/api/Orders/',requestOptions)
        .then(response => response.json)
        .then(response =>{
          console.log("Order Placed");
        })
        .catch(error => console.log(error));
        if(!confirmation){
        setConfirmation(true)
        }
    }
        

    const OrderHandler = () => { 
      items.map(e =>{
          const requestOptions = {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({"productid":e.productid,"customerid":e.customerid,"orderid":orderid,"quantity":e.productquantity,"price":totalprice,"stat":"placed"})
        };
      
        fetch('http://localhost:61593/api/OrderItems/',requestOptions)
          .then(response => response.json)
          .then(response =>{
            console.log("Order Placed");
          })
          .catch(error => console.log(error));
          })

        items.map(e => {
          fetch(`http://localhost:61593/api/CartItems/${e.itemid}/`,{
          method:'DELETE',}).catch(error => console.log(error));
        })
          setEmailvaluesset(true);
    }
    

    return(
        <div  >
            <Internalnav />

      <Container>
          <br></br>
          <h1>Cart</h1>
          <br></br>
          <h5>Items you loved and want to buy</h5>
          <br></br>
        <div key={id}>
          {items?.map( e=> (
              <Incartitems productid={e.productid} itemid={e.itemid} ondelete={deletehandler} quant={e.productquantity} />
      
      ))}
      {totalprice===0 && 
      <Container style={{width:"27.5vw",marginLeft:"28vw",marginTop:"3vw"}}>
        <h4>Your Cart is Empty!!!!</h4>
        </Container>}
      <br></br>
      <h4 style={{marginLeft:"23vw"}}>Total Payable Amount:  Rs. {totalprice}/-</h4>
      <br></br>
      <h6 style={{marginLeft:"23vw"}}>Please Fill you delivery details and mode of payment below to place your order</h6>
      <br></br>
      </div>
      <div style={{width:"40vw",marginLeft:"22vw",border:"2px solid grey",borderRadius:"0.8vw"}}>
      <h4 style={{marginLeft:"3vw",marginTop:"2vw"}}>Dilevery Details</h4>
        <br></br>
        <div>
      <MDBInput wrapperClass='mb-4 mx-5 w-60' labelClass='text-black' label='Address' id='formControlLg' type='text' size="lg" onChange={handleAddress}/>
      <MDBInput wrapperClass='mb-4 mx-5 w-60' labelClass='text-black' label='City' id='formControlLg' type='text' size="lg" onChange={handleCity}/>
      <MDBInput wrapperClass='mb-4 mx-5 w-60' labelClass='text-black' label='Region(State)' id='formControlLg' type='text' size="lg" onChange={handleRegion}/>
      <br></br>
      <h4 style={{marginLeft:"3vw"}}>Payment Method</h4>
      <select onChange={handlePM} style={{marginLeft:"3vw"}}>
        <option>None</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="Net Banking">Net Banking</option>
        <option value="Online Transaction">Online Transaction</option>
        <option value="COD">COD</option>
      </select>
      </div>
      <br></br>
      </div>
        </Container>
        <br></br>
        <Button variant="primary" style={{width:"40vw",marginLeft:"32vw"}} disabled={items==null||!address||!city||!region||!paymentMethod} onClick={() =>placeOrder()}>Place Order</Button>
        <br></br>
        <br></br>
        {confirmation && 
          <div style={{width:"40vw",marginLeft:"32vw"}}>
            <h4>Please press place to confirm the order</h4>
            <Button onClick={OrderHandler}>Place</Button>
            <br></br>
          <br></br>
          </div>
        }
        
      </div>
    );
}

export default Cart;