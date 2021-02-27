import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    workoderparts: []
}

const WorkOrderPartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_WORKORDER_PARTS:
            return{
                ...state,
                workoderparts: action.payload
            }
        
        case ActionTypes.ADD_WORKORDER_PARTS:
            return {
                ...state, 
                workorderparts: action.payload
            }    
        case ActionTypes.EDIT_WORKORDER_PART:
            return {
                ...state,
                workorderparts: null
            }   
            
        case ActionTypes.DELETE_WORKORDER_PARTS:
            return {
                ...state, 
                workorderparts: null
            }   

        default:
            return state      
    }
}
export default WorkOrderPartsReducer;
