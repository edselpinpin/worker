import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    is_authenticated: false,
    profile: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return{
                ...state,is_authenticated: true
            }
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state, is_authenticated: false
            }  
        case ActionTypes.ADD_PROFILE:
            return {
                ...state, 
                profile: action.payload
            }    
        case ActionTypes.REMOVE_PROFILE:
            return {
                ...state,
                profile: null
            }   
            
        case ActionTypes.SET_DB_PROFILE:
            return {
                ...state, 
                db_profile: action.payload
            }    
        case ActionTypes.REMOVE_DB_PROFILE:
            return {
                ...state,
                db_profile: null
            }        
        default:
            return state;     
    }
}
export default AuthReducer;