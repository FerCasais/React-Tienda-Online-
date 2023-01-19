import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getFetch } from "../../utils/getFetch";
import "./ItemListContainer.css";
import { NavLink, Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";






function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loadings, setLoadings] = useState(true)
  const {categoryId} = useParams()

  console.log({categoryId})

  useEffect(() => {

    if ((categoryId) ) {
      getFetch()
      .then((respuestaPromesa) => {
        setProductos(respuestaPromesa. filter(items => (items.genero) === (categoryId)));
      })
      .catch((err) => console.log("error"))
      .finally(() => setLoadings(false))
      
    } else {
      
    
   
    getFetch()
      .then((respuestaPromesa) => {
        setProductos(respuestaPromesa);
      })
      .catch((err) => console.log("error"))
      .finally(() => setLoadings(false))
  
}}, [categoryId]);


  console.log(categoryId)
 
 
 
  return (
    <>


      
    <div className="producto-cards">
      {/* <h1>Hola a todos</h1> */}
<Container fluid="md">
      <Row md="auto" >
      {loadings ? (
        <h1>Cargando Datos ...</h1>
      ) : (
        productos.map((producto) => (
          <Col md={3} className="mb-8" key={`${producto.id}`}> 
          
          <div key={producto.id} className="card w-100 mt-5 shadow bg-dark text-light text-center ">
            <div className="card-header">
              <h5>Numero de Id: {producto.id}</h5>{" "}
            </div>
            <div className="card-body text-warning">
              <h4>Titulo: {producto.titulo}</h4>
              <h6>Precio : {producto.precio}</h6>
              <h6>Genero: {producto.genero}</h6>
              <img src={producto.img} alt="" className="w-100" />
            </div> 

            <div className="card-footer ">
             <Link to={`/detail/${producto.id}`}> <button className="btn btn-outline-danger w-100 text-white-50">
                Ver Detalle
              </button></Link>
            </div>
          </div>
          
          
          </Col>  ))
      )}</Row>
      </Container>
    </div>
    
      </> );
}

export default ItemListContainer;
