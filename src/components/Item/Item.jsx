import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div>
         <div
                  key={producto.id}
                  className="card w-100 mt-5 shadow bg-dark text-light text-center "
                >
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
                    <Link to={`/detail/${producto.id}`}>
                      {" "}
                      <button className="btn btn-outline-danger w-100 text-white-50">
                        Ver Detalle
                      </button>
                    </Link>
                  </div>
                </div>
             
      
    </div>
  )
}

export default Item
