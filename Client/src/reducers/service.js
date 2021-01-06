import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    service: []
}

const ServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_SERVICE:
            return{
                ...state,
                service: action.payload
            }
        case ActionTypes.FETCH_SERVICE_FAILED:
            return {
                ...state, 
                service: []
            }  
        case ActionTypes.ADD_SERVICE:
            return {
                ...state, 
                service: action.payload
            }    
        case ActionTypes.EDIT_SERVICE:
            return {
                ...state,
                service: null
            }   
            
        case ActionTypes.DELETE_SERVICE:
            return {
                ...state, 
                service: null
            }   

        case ActionTypes.VIEW_SERVICE:
            return {
                ...state, 
                service: action.payload
            }       

          
        default:
            return state      
    }
}
export default ServiceReducer;
