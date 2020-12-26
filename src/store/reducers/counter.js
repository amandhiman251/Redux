import * as actions from '../actions';


const initialState = {
    counter:0
}


const counterReducer = (state = initialState, action) => {

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
        default:
            return state

    }
}

export default counterReducer;