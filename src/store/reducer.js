const initialState = {
    counter:0,
    results:[]
}


const reducer = (state = initialState, action) => {

    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter+1
            };
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter-1
            }
        case "ADD5":
            return {
                ...state,
                counter: state.counter+action.val
            };
        case "SUBTRACT5":
            return {
                ...state,
                counter: state.counter-action.val
            };
        case "STORE_RESULT":
            return{
                ...state,
                results: state.results.concat({id: Math.random(), value: state.counter})
            };
        case "DELETE_RESULT":
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