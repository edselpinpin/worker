import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    tech: []
}

const TechReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_TECH:
            return{
                ...state,
                tech: action.payload
            }
        case ActionTypes.FETCH_TECH_FAILED:
            return {
                ...state, 
                tech: []
            }  
        case ActionTypes.ADD_TECH:
            return {
                ...state, 
                tech: action.payload
            }    
        case ActionTypes.DELETE_TECH:
            return {
                ...state,
                tech: null
            }   
            
        case ActionTypes.EDIT_TECH:
            return {
                ...state, 
                tech: action.payload
            }   

        case ActionTypes.VIEW_TECH:
            return {
                ...state, 
                tech: action.payload
            }       

          
        default:
            return state      
    }
}
export default TechReducer;
