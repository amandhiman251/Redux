import * as actionTypes from './actionsTypes'; 

export const increment = () => {
    return{
        type: actionTypes.INCREMENT
    }
}
export const decrement = () => {
    return{
        type: actionTypes.DECREMENT
    }
}
export const add5 = (value) => {
    return{
        type: actionTypes.ADD5,
        val:value
    }
}
export const subtract5 = (value) => {
    return{
        type: actionTypes.SUBTRACT5,
        val:value
    }
}