import * as ActionTypes from  '../actions/ActionTypes';
import { serverUrl } from '../shared/BaseUrl';


// CUSTOMER 

export const fetchCustomer = () => dispatch => {
    return fetch( serverUrl + '/customer',
                {
                    method: "GET",
                    headers:{
                        "Content-type" : "application/javascript"
                    
                    }
                })
               .then(response => {
                
                  return response
                })
                .then(response => response.json())
                .then(data => dispatch(buildcustomer(data)))
                .catch(error => console.log(`Customer fetch error ${error}`))
};
         
  
  export const buildcustomer = customer=> {
   
      return {
           type: ActionTypes.FETCH_CUSTOMER,
           payload: customer
      }
      
  }

  export const fetch_customer_failed = () => {
      return {
           type: ActionTypes.FETCH_CUSTOMER_FAILED
      }
  }

  // ADD CUSTOMER
  
 export const addCustomer = (firstname, lastname, street, city, state, zip, mobile, email) => dispatch  => {
    
    return fetch( serverUrl + '/customer',
                {
                    method: "POST",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({firstname, lastname, street, city, state, zip, mobile, email}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchCustomer());
                })
                .catch(error => {
                    alert('Add customer error' + error)
                })
 }
 // EDIT

 export const editCustomer = (custid, firstname, lastname, street, city, state, zip, mobile, email) => dispatch  => {
   
   return fetch( serverUrl + '/customer',
               {
                   method: "PUT",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({custid, firstname, lastname, street, city, state, zip, mobile, email}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchCustomer());
               })
               .catch(error => {
                   alert('Edit customer error' + error)
               })
}
 // DELETE CUSTOMER 

 export const deleteCustomer = (custid) => dispatch  => {
    
   return fetch( serverUrl + '/customer',
               {
                   method: "delete",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({custid}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchCustomer());
               })
               .catch(error => {
                   alert('Delete customer error' + error)
               })
}




  //  SERVICE 

  export const fetchService= () => dispatch => {
    return fetch(serverUrl + '/service',
                {
                    method: "GET",
                    headers:{
                        "Content-type" : "application/javascript"
                    
                    }
                })
                 .then(response => {
                   return response
                  
                })
                .then(response => response.json())
                .then(data => dispatch(buildservice(data)))
                  
                .catch(error => console.log(`Service Menu  fetch error ${error}`))
};

// ADD SERVICE 
export const addService = (servicename, servicedescription, price) => dispatch  => {
    
    return fetch( serverUrl + '/service',
                {
                    method: "POST",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({servicename, servicedescription, price}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    
                    dispatch(fetchService());
                })
                .catch(error => {
                    console.log(error)
                    alert('Add service error' + error)
                })
 }
 // EDIT SERVICE 

 export const editService = (serviceid, servicename, servicedescription, price) => dispatch  => {
   
   return fetch( serverUrl + '/editservice',
               {
                   method: "PUT",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({serviceid, servicename, servicedescription, price}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchService());
               })
               .catch(error => {
                   alert('Edit service menu  error' + error)
               })
}
 // DELETE CUSTOMER 

 export const deleteService = (serviceid) => dispatch  => {
    
   return fetch( serverUrl + '/service',
               {
                   method: "delete",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({serviceid}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchService());
               })
               .catch(error => {
                   alert('Delete customer error' + error)
               })
}

  export const buildservice = ( servicelist) => {
      return {
           type: ActionTypes.FETCH_SERVICE,
           payload:  servicelist
      }
  }
  
  export const fetch_service_failed = () => {
      return {
           type: ActionTypes.FETCH_SERVICE_FAILED
      }
  }
  

  // TECHNICIANS 
export const fetchTech= () => dispatch => {
    return fetch(serverUrl + '/tech',
                {
                    method: "GET",
                    headers:{
                        "Content-type" : "application/javascript"
                    
                    }
                })
               .then(response => {
                
                  return response
                 
                })
                .then(response => response.json())
                .then(data => dispatch(buildtech(data)))
                .catch(error => console.log(`Tech fetch error ${error}`))
            }   
            
   // ADD TECH
  
 export const addTech = (techid,firstname, lastname) => dispatch  => {
    
    return fetch( serverUrl + '/tech',
                {
                    method: "POST",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({techid,firstname, lastname}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchTech());
                })
                .catch(error => {
                    alert('Add technician error' + error)
                })
 }
 // EDIT TECHNICIAN

 export const editTech = (techid, firstname, lastname) => dispatch  => {
   
   return fetch( serverUrl + '/edittech',
               {
                   method: "PUT",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({techid, firstname, lastname}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchTech());
               })
               .catch(error => {
                   alert('Edit technician error' + error)
               })
}
 // DELETE CUSTOMER 

 export const deleteTech = (techid) => dispatch  => {
    
   return fetch( serverUrl + '/tech',
               {
                   method: "delete",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({techid}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchTech());
               })
               .catch(error => {
                   alert('Delete tech error' + error)
               })
}          


                    

export const buildtech = (techlist) => {
      return {
           type: ActionTypes.FETCH_TECH,
           payload: techlist
      }
      
}
  
export const fetch_tech_failed = () => {
      return {
           type: ActionTypes.FETCH_TECH_FAILED
      }
  }
export const set_db_profile = (profile) => {
    return {
         type: ActionTypes.SET_DB_PROFILE,
         payload: profile
    }
}

export const remove_db_profile = () => {
    return {
         type: ActionTypes.REMOVE_DB_PROFILE
    }
}

// WORK ORDER 

export const fetchWorkorder = () => dispatch => {
    return fetch( serverUrl + '/workorder',
                {
                    method: "GET",
                    headers:{
                        "Content-type" : "application/javascript"
                    
                    }
                })
               .then(response => {

                   console.log(response)
                  return response

                })
                .then(response => response.json())
                .then(data => dispatch(buildworkorder(data)))
                .catch(error => console.log(`Work Order fetch error ${error}`))
};
         
  
  export const buildworkorder = workorder => {
    
      return {
           type: ActionTypes.FETCH_WORKORDER,
           payload: workorder 
      }
      
  }

// WORK ORDER TRANSACTIONS 

  export const addWorkorder = (custid, cust_firstname, cust_lastname, brand, model, promised_date, inst, status) => dispatch  => {
    
    return fetch( serverUrl + '/workorder',
                {
                    method: "POST",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({custid, cust_firstname, cust_lastname, brand, model, promised_date, inst, status}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchWorkorder());
                })
                .catch(error => {
                    alert('Add Work Order error' + error)
                })
 }
 // EDIT WORK ORDER 
 export const editWorkorder = (worderid, custid, cust_firstname, cust_lastname, brand, model, promised_date, inst) => dispatch  => {
   
    return fetch( serverUrl + '/workorder',
                {
                    method: "PUT",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid, custid, cust_firstname, cust_lastname, brand, model, promised_date, inst}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchWorkorder());
                })
                .catch(error => {
                    alert('Edit Work Order error' + error)
                })
 }


 // DELETE CUSTOMER 

 export const deleteWorkorder = (worderid) => dispatch  => {
    
   return fetch( serverUrl + '/workorder',
               {
                   method: "delete",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({worderid}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchWorkorder());
               })
               .catch(error => {
                   alert('Delete Work Order  error' + error)
               })
}

// ASSIGN TECHNICIAN 

export const checkInTech = (worderid, techid, tech_firstname, tech_lastname) => dispatch  => {
   
    return fetch( serverUrl + '/checkinTech',
                {
                    method: "PUT",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid, techid, tech_firstname, tech_lastname}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchWorkorder());
                })
                .catch(error => {
                    alert('Assign to tech Work Order Error' + error)
                })
 }

// RE-ASSIGN TECHNICIAN 
 export const reassignTech = (worderid) => dispatch  => {
   
    return fetch( serverUrl + '/reassigntech',
                {
                    method: "PUT",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchWorkorder());
                })
                .catch(error => {
                    alert('Re-assign Work Order error' + error)
                })
 }
 
 // COMPLETE WORK ORDER 

 export const completeWorkorder = (worderid) => dispatch  => {
   
    return fetch( serverUrl + '/reassigntech',
                {
                    method: "PUT",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchWorkorder());
                })
                .catch(error => {
                    alert('Complete Work Order error' + error)
                })
 }

 // WORK ORDER DTL 

 export const fetchWorkorderDtl = (id) => dispatch => {
    return fetch( serverUrl + `/workorderdtl/${id}`,
                {
                    method: "GET",
                    headers:{
                        "Content-type" : "application/javascript"
                    
                    },
                
                   
                })
               .then(response => {
                
                  return response
                })
                .then(response => response.json())
                .then(data => dispatch(buildworkorderdtl(data)))
                .catch(error => console.log(`Work Order Detail fetch error ${error}`))
};
         
  
  export const buildworkorderdtl = workorderdtl => {
   
      return {
           type: ActionTypes.FETCH_WORKORDER_DTL,
           payload: workorderdtl 
      }
      
  }

// WORK ORDER TRANSACTIONS 

  export const addWorkorderDtl = (worderid, serviceid, servicename, servicedescription, price) => dispatch  => {
              
    
    return fetch( serverUrl + '/workorderdtl',
                {
                    method: "POST",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid, serviceid, servicename, servicedescription, price}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    console.log(data)    
                    dispatch(fetchWorkorderDtl(worderid));
                })
                .catch(error => {
                    alert('Add Work Order Detail error' + error)
                })
 }
 // EDIT WORK ORDER 

 export const editWorkorderDtl = (worderdtlid, worderid, serviceid, servicename, servicedecription, price) => dispatch  => {
   
   return fetch( serverUrl + '/workordedtl',
               {
                   method: "PUT",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({worderdtlid, worderid, serviceid, servicename, servicedecription, price}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchWorkorderDtl());
               })
               .catch(error => {
                   alert('Edit Work Order Detail error' + error)
               })
}
 // DELETE WORK ORDER  

 export const deleteWorkorderDtl = (worderdtlid, worderid) => dispatch  => {
    
   return fetch( serverUrl + '/workorderDtl',
               {
                   method: "delete",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({worderdtlid, worderid}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchWorkorder());
               })
               .catch(error => {
                   alert('Delete Work Order  error' + error)
               })
}








 

 





