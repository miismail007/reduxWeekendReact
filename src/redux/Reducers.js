const initialState = {
    menus  : [ 'Home' , 'Gallery' , 'About' , 'Contact' ],
    logo : 'CRUD',
    products : []
}


export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'ADDPRODUCT':
            return {...state, products :  [...state.products , action.payload ]}
            
        default: return state;
    }
}