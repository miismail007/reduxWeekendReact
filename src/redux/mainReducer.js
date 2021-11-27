

const initialState = {
    counter : 0,
    text : ''
}


export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state , counter : state.counter+1}
        case 'DECREMENT':
            return {...state , counter : state.counter-1}
        case 'EDITTEXT' : 
            return {...state, text : action.text}
        default:
            return state
    }
}