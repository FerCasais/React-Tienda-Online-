import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Params, useParams } from "react-router-dom";
import { getFetch } from "../../utils/getFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import ItemDetail from "../../ItemDetail/ItemDetail";





function ItemDetailContainer() {
    const [producto, setProductos] = useState({})
    const [loadings, setLoadings] = useState(true)
    const {detailId} = useParams()
  
    console.log({detailId})
  
    useEffect(() => {
  
      if ((detailId) ) {
        getFetch()
        .then((respuestaPromesa) => {
          setProductos(respuestaPromesa.find(items => (items.id) === parseInt(detailId)));
        })
        .catch((err) => console.log("error"))
        .finally(() => setLoadings(false))
        
      } }, [detailId]);
  
  
    console.log(detailId)
   
   
   
    return (
      
      <>

      <Container>
        <Row>
            
             <div className="producto-cards">
       
  
        {loadings ? (
          <h1>Cargando Detalles ...</h1>
        ) : (
         
          
            
            <ItemDetail producto={producto}/>

       
        )} 

      </div>
           
        </Row>
      </Container>
     
    </>);
  }


export default ItemDetailContainer