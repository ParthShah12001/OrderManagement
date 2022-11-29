import { useEffect, useRef, useState } from "react";
const HttpRequest = (props) =>{
    /*useEffect(() =>{
    fetch(`http://localhost:61981/api/OrderItems/${props.itemid}/`,{
              method: 'PUT',
              headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify({...props.item,'orderid':props.orderid,'stat':'placed'})
            })
        })*/
      return (
        console.log("ok")
      );
    }
    export default HttpRequest;