const initialState = {
    menus  : [ 'Home' , 'Gallery' , 'About' , 'Contact' ],
    logo : 'CRUD',
    products : [],
    formData : {}
}


export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'ADDPRODUCT':
            return {...state, products :  [...state.products , action.payload ]}

        case 'UPDATEPRODUCT':
            let newData = action.payload
            let newProducts = state.products.map(product=>{
                if(newData.id == product.id){
                    product.name = newData.name
                    product.description = newData.description
                    product.price = newData.price
                }
                return product
            })
            return {...state, products : newProducts}

        case 'DELETEPRODUCT' :
            let id = action.payload
            let balanceProducts = []
            state.products.map(product => {
                if(product.id != id){
                    balanceProducts.push(product)
                }
            })
            console.log(balanceProducts);
            // return state
            return {...state,products : balanceProducts}
        case 'FORMDATA' : 
            return {...state, formData : action.payload}
            
        default: return state;
    }
}