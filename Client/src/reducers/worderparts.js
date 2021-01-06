import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    workorder_parts: []
}

const WorkOrderPartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_WORKORDER_PARTS:
            return{
                ...state,
                workorder_parts: action.payload
            }
        
        case ActionTypes.ADD_WORKORDER_PARTS:
            return {
                ...state, 
                workorder_parts: action.payload
            }    
        case ActionTypes.EDIT_WORKORDER_PART:
            return {
                ...state,
                workorder_parts: null
            }   
            
        case ActionTypes.DELETE_WORKORDER_PARTS:
            return {
                ...state, 
                workorder_parts: null
            }   

        default:
            return state      
    }
}
export default WorkOrderPartsReducer;
