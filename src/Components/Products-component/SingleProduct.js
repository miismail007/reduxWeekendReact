import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, setFormData } from '../../redux/actions'

function SinglePRoduct(props) {
    const dispatch = useDispatch()
    return (
        <div className="card col-md-4" >
            <div className="card-body">
                <h4 className="card-title">{props.product.name}</h4>
                <p className="card-text">{props.product.description}</p>
                <p className="card-text">{props.product.price}</p>
                <a href="#" className="btn btn-primary" onClick={()=>{
                    dispatch(setFormData({
                        id : props.product.id,
                        name : props.product.name,
                        description : props.product.description,
                        price : props.product.price
                    }))
                }}>Update</a>
                <a className="btn btn-danger" onClick={()=>{
                    dispatch(deleteProduct(props.product.id))
                }}>Delete</a>
            </div>
        </div>
    )
}

export default SinglePRoduct
