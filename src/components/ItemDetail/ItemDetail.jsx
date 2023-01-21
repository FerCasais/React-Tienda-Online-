import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const ItemDetail = ({producto}) => {
  return (
    <>

    <Container>
      <Row>
          
           <div className="producto-cards">
     

       (
       
          <Col md={6} className="mb-5" key={`${producto.id}`}>
          
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
              <Link to={'/cart'}> <button className="btn  btn-primary btn-outline-danger w-100 text-white-50">Agregar al Carrito</button></Link>
            </div>
            
          </div>
          
          
       </Col> 
      )

    </div>
         
      </Row>
    </Container>
   
  </>
  )
}

export default ItemDetail
