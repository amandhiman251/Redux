import * as actionTypes from './actionsTypes';

export const strResult = (result) => {
    const updatedResult = result*2;
    return{
        type: actionTypes.STORE_RESULT,
        result: updatedResult
    }
}

export const store_result = (result) => {
        return dispatch=>{
            setTimeout(() => {
                //const updatedResult = result*2;
                dispatch(strResult(result));
                }, 2000);
        }
    };
    
export const delete_result = (id) => {
    return{
        type: actionTypes.DELETE_RESULT,
        resultElId:id
    }
}