import * as actions from './actions';


const initialState = {
    counter:0,
    results:[]
}


const reducer = (state = initialState, action) => {

    switch(action.type){
        case actions.INCREMENT:
            return {
                ...state,
                counter: state.counter+1
            };
        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter-1
            }
        case actions.ADD5:
            return {
                ...state,
                counter: state.counter+action.val
            };
        case actions.SUBTRACT5:
            return {
                ...state,
                counter: state.counter-action.val
            };
        case actions.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: Math.random(), value: state.counter})
            };
        case actions.DELETE_RESULT:
            const updatedArray = state.results.filter(result => {
               return( result.id !== action.resultElId)});
            return{
                ...state,
                results: updatedArray
                }

    }
    return state
}

export default reducer;