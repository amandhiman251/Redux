import * as actionTypes from '../actions/actionsTypes';


const initialState = {
    results:[]
}


const resultsReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: Math.random(), value: action.result})
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => {
               return( result.id !== action.resultElId)});
            return{
                ...state,
                results: updatedArray
                };
                default:
                    return state
    }
}

export default resultsReducer;