import React from 'react'
import SingleProduct from './SingleProduct'

function Products(props) {
    return (
        <div className="container">
            {props.products.length != 0 ?
                <div className="row">
                    {props.products.map((product)=>{
                        return <SingleProduct 
                                    product = {product} 
                                    key={Math.random()} 
                                    deleteProduct = {props.deleteProduct}
                                    updateProduct = {props.updateProduct}/>
                    })}
                </div>
                :
                <h1 className="text-info text-center">No Products to Display</h1>
            }
        </div>
    )
}

export default Products
