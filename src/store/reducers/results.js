import * as actionTypes from '../actions/actionsTypes';
import { updatedObject } from '../utility';

const initialState = {
    results:[]
}


const resultsReducer = (state = initialState, action) => {

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updatedObject(state, { results: updatedArray});
    }

    switch(action.type){
        case actionTypes.STORE_RESULT:
            return updatedObject(state, {results: state.results.concat({id: Math.random(), value: action.result})});
        case actionTypes.DELETE_RESULT:
               return deleteResult(state, action);
                default:
                    return state
    }
}

export default resultsReducer;