export const INCREMENT  = "INCREMENT";
export const DECREMENT  = "DECREMENT";
export const ADD5  = "ADD5";
export const SUBTRACT5  = "SUBTRACT5";
export const STORE_RESULT  = "STORE_RESULT";
export const  DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
    return{
        type: INCREMENT
    }
}
export const decrement = () => {
    return{
        type: DECREMENT
    }
}
export const add5 = (value) => {
    return{
        type: ADD5,
        val:value
    }
}
export const subtract5 = (value) => {
    return{
        type: SUBTRACT5,
        val:value
    }
}

export const strResult = (result) => {
    return{
        type: STORE_RESULT,
        result: result
    }
}

export const store_result = (result) => {
        return dispatch=>{
            setTimeout(() => {
                dispatch(strResult(result));
                }, 2000);
        }
    };
    
export const delete_result = (id) => {
    return{
        type: DELETE_RESULT,
        resultElId:id
    }
}