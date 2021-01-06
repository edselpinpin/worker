import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    customer: [],
    custview:[]
}

const CustomerReducer = (state = initialState, action) => {
   
  
    switch (action.type) {
        case ActionTypes.FETCH_CUSTOMER:
            return{
                ...state,
                customer: action.payload
            }
        case ActionTypes.FETCH_CUSTOMER_FAILED:
            return {
                ...state, 
                customer: []
            }  
        case ActionTypes.ADD_CUSTOMER:
            return {
                ...state, 
                profile: action.payload
            }    
        case ActionTypes.DELETE_CUSTOMER:
            return {
                ...state,
                profile: null
            }   
            
        case ActionTypes.EDIT_CUSTOMER:
            return {
                ...state, 
                profile: action.payload
            }   

        case ActionTypes.VIEW_CUSTOMER:
            return {
                ...state, 
                custview: action.payload
            }       

        default:
            return state      
    }
}
export default CustomerReducer;




