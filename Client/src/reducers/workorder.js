import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    workorder: [],
    worderdue: [],
    wordertoday: [],
    worderopen:[],
    custworkorder: []
}

const WorkOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_WORKORDER:
            return{
                ...state,
                workorder: action.payload
            }

        case ActionTypes.FETCH_DUE_WORKORDER:
            return{
                ...state,
                worderdue: action.payload
            } 
            
        case ActionTypes.FETCH_CUSTOMER_WORKORDER:
            return {
                ...state, 
                custworkorder:  action.payload
            }         
        
        case ActionTypes.FETCH_TODAY_WORKORDER:
            return{
                ...state,
                wordertoday: action.payload
            }    
        
        case ActionTypes.FETCH_OPEN_WORKORDER:
            return{
                ...state,
                worderopen: action.payload
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
