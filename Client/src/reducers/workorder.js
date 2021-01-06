import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    workorder: []
}

const WorkOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_WORKORDER:
            return{
                ...state,
                workorder: action.payload
            }
        
        case ActionTypes.ADD_WORKORDER:
            return {
                ...state, 
                workorder: action.payload
            }    
        case ActionTypes.EDIT_WORKORDER:
            return {
                ...state,
                workorder: null
            }   
            
        case ActionTypes.DELETE_WORKORDER:
            return {
                ...state, 
                workorder: null
            }   

        default:
            return state      
    }
}
export default WorkOrderReducer;
