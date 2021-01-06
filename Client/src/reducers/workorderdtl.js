import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    workorderdtl: []
}

const WorkOrderDtlReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_WORKORDER_DTL:
            return{
                ...state,
                workorderdtl: action.payload
            }
        
        case ActionTypes.ADD_WORKORDER_DTL:
            return {
                ...state, 
                workorderdtl: action.payload
            }    
        case ActionTypes.EDIT_WORKORDER_DTL:
            return {
                ...state,
                workorderdtl: null
            }   
            
        case ActionTypes.DELETE_WORKORDER:
            return {
                ...state, 
                workorderdtl: null
            }   

        default:
            return state      
    }
}
export default WorkOrderDtlReducer;
