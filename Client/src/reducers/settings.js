import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    sys_settings: []
}

const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_SYS_SETTINGS:
            return{
                ...state,
                sys_settings: action.payload
            }
        case ActionTypes.ADD_SYS_SETTINGS:
            return {
                ...state, 
                sys_settings: []
            }  
        case ActionTypes.EDIT_SYS_SETTINGS:
            return {
                ...state, 
                sys_settings: action.payload
            }    
        
        default:
            return state      
    }
}
export default CustomerReducer;




