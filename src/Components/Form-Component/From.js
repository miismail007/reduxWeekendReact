import React, { useEffect, useState } from 'react'

function From(props) {
    const [ name , setName ] = useState("")
    const [ description , setDescription ] = useState("")
    const [ price , setPrice ] = useState("")

    useEffect(()=>{
        setName(props.formData.name)
        setDescription(props.formData.description)
        setPrice(props.formData.price)
    },[props.formData])


    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="name">Enter Product Name:</label>
                <input type="text" className="form-control" onChange={(text)=>{
                    setName(text.target.value)
                }} value={name} placeholder="Enter name" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Enter Product Description:</label>
                <input type="text" className="form-control" onChange={(text)=>{
                    setDescription(text.target.value)
                }} placeholder="Enter description" value={description} id="description"/>
            </div>
            <div className="form-group">
                <label htmlFor="price">Enter Product Price:</label>
                <input type="text" className="form-control" onChange={(text)=>{
                    setPrice(text.target.value)
                }} placeholder="Enter price" value={price} id="price"/>
            </div>
            <button type="submit" onClick={()=>{
                if(props.formData.id){
                    let obj = {}
                    obj.id = props.formData.id
                    obj.name = name
                    obj.description = description
                    obj.price = price
                    props.setProductToState("update",obj);
                    setName("")
                    setDescription("")
                    setPrice("")
                }else{
                    let obj = {}
                    obj.id = Math.random()
                    obj.name = name
                    obj.description = description
                    obj.price = price
                    props.setProductToState("add",obj);
                    setName("")
                    setDescription("")
                    setPrice("")
                }
            }} className="btn btn-primary">Submit</button>
        </div>
    )
}

export default From
