import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from './SingleProduct'

function Products() {
    const products = useSelector(state=>state.products)
    return (
        <div className="container">
            {products.length != 0 ?
                <div className="row">
                    {products.map((product)=>{
                        return <SingleProduct 
                                    product = {product} 
                                    key={Math.random()} 
                                    deleteProduct = {""}
                                    updateProduct = {""}/>
                    })}
                </div>
                :
                <h1 className="text-info text-center">No Products to Display</h1>
            }
        </div>
    )
}

export default Products
