import * as actionTypes from './actionsTypes';

export const strResult = (result) => {
    return{
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

export const store_result = (result) => {
        return dispatch=>{
            setTimeout(() => {
                const updatedResult = result*2;
                dispatch(strResult(updatedResult));
                }, 2000);
        }
    };
    
export const delete_result = (id) => {
    return{
        type: actionTypes.DELETE_RESULT,
        resultElId:id
    }
}