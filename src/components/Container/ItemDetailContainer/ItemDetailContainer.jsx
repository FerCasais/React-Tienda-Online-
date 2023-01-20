import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Params, useParams } from "react-router-dom";
import { getFetchDOS } from "../../utils/getFetchDOS";
import { getFetch } from "../../utils/getFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";





function ItemDetailContainer() {
    const [productos, setProductos] = useState([])
    const [loadings, setLoadings] = useState(true)
    const {detailId} = useParams()
  
    console.log({detailId})
  
    useEffect(() => {
  
      if ((detailId) ) {
        getFetchDOS()
        .then((respuestaPromesa) => {
          setProductos(respuestaPromesa. filter(items => (items.id) === parseInt(detailId)));
        })
        .catch((err) => console.log("error"))
        .finally(() => setLoadings(false))
        
      } else {
        
      
     
      getFetchDOS()
        .then((respuestaPromesa) => {
          setProductos(respuestaPromesa);
        })
        .catch((err) => console.log("error"))
        .finally(() => setLoadings(false))
    
  }}, [detailId]);
  
  
    console.log(detailId)
   
   
   
    return (
      
      <>

      <Container>
        <Row>
            
             <div className="producto-cards">
        {/* <h1>Hola a todos</h1> */}
  
        {loadings ? (
          <h1>Cargando Detalles ...</h1>
        ) : (
          productos.map((producto) => (
            <Col xs={6} className="mb-5" key={`${producto.id}`}>
            
            <div key={producto.id} className="card w-100 mt-5 shadow bg-dark text-light text-center ">
              <div className="card-header">
                <h5>Numero de Id: {producto.id}</h5>{" "}
                <h2 className="text-danger">Titulo: {producto.titulo}</h2>{" "}
              </div>
              <div className="card-body text-warning">
                
                <h4>Synopsis: {producto.synopsis}</h4>
                
              </div> 
  
              <div className="card-footer">
               <Link to={'/'}> <button className="btn btn-outline-danger w-100 text-white-50">
                  Volver
                </button></Link>
                <Link to={'/cart'}> <button className="btn  btn-primary btn-outline-danger w-100 text-white-50">Comprar</button></Link>
              </div>
              
            </div>
            
            
         </Col> ))
        )} 

      </div>
           
        </Row>
      </Container>
     
    </>);
  }


export default ItemDetailContainer