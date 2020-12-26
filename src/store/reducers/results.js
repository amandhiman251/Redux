import * as actions from '../actions/actions';


const initialState = {
    results:[]
}


const resultsReducer = (state = initialState, action) => {

    switch(action.type){
        case actions.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: Math.random(), value: action.result})
            };
        case actions.DELETE_RESULT:
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