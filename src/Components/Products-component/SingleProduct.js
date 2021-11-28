import React from 'react'

function SinglePRoduct(props) {
    return (
        <div className="card col-md-4" >
            <div className="card-body">
                <h4 className="card-title">{props.product.name}</h4>
                <p className="card-text">{props.product.description}</p>
                <p className="card-text">{props.product.price}</p>
                <a href="#" className="btn btn-primary" onClick={()=>{
                    props.updateProduct(props.product.id)
                }}>Update</a>
                <a className="btn btn-danger" onClick={()=>{
                    props.deleteProduct(props.product.id)
                }}>Delete</a>
            </div>
        </div>
    )
}

export default SinglePRoduct
