import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AuthReducer from '../reducers/auth';
import CustomerReducer from '../reducers/customer';
import ServiceReducer from '../reducers/service';
import TechReducer from '../reducers/tech';
import WorkOrderReducer from '../reducers/workorder';
import WorkOrderDtlReducer from '../reducers/workorderdtl';
import WorkOrderPartsReducer from '../reducers/worderparts';
import { InitialCustommer } from '../redux/forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            customer: CustomerReducer,  /* the name of the store (customer) has to match array name for customer in the reducer ? */
            service:  ServiceReducer,
            Auth:     AuthReducer,    
            tech:     TechReducer,
            techload: TechReducer,
            workorder: WorkOrderReducer,
            worderdue: WorkOrderReducer,
            wordertoday: WorkOrderReducer,
            workorderdtl: WorkOrderDtlReducer,
            workoderparts: WorkOrderPartsReducer,
            custworkorder: WorkOrderReducer,
            ...createForms({
                customerForm: InitialCustommer
            })    
        }),
       applyMiddleware(thunk, logger)
    );
  
    return store;
};