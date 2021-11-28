

export const addProducts = (product) => {
    return { type : 'ADDPRODUCT' , payload : product }
}

export const updateProduct = (product) => {
    return { type : 'UPDATEPRODUCT' , payload : product }
}

export const deleteProduct = (id) => {
    return {type : 'DELETEPRODUCT' , payload : id}
}
export const setFormData = (data) => {
    return { type : 'FORMDATA' , payload : data }
}