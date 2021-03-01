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


  export const fetchTechLoad = () => dispatch => {
    return fetch(serverUrl + '/techload',
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
                .then(data => dispatch(buildtechload(data)))
                .catch(error => console.log(`Tech Load Fetch Error ${error}`))
            }   

export const buildtechload = (techlist) => {
    return {
            type: ActionTypes.FETCH_TECH_LOAD,
            payload: techlist
    }
    
}           


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

export const fetchdDueWorkorder = () => dispatch => {
    return fetch( serverUrl + '/workorderdue',
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
                .then(data => dispatch(builddueworkorder(data)))
                .catch(error => console.log(`Work Order due fetch error ${error}`))
};

export const builddueworkorder = workorder => {
    
    return {
         type: ActionTypes.FETCH_DUE_WORKORDER,
         payload: workorder 
    }
    
}

export const fetchCustWorkorder = (custid) => dispatch => {
    return fetch( serverUrl + `/workordercust/${custid}`,
   
                {
                    method: "GET",
                    headers:{
                        "Content-type" : "application/javascript"
                    
                    },
                   
                })
               .then(response => {

                   console.log(response)
                  return response

                })
                .then(response => response.json())
                .then(data => dispatch(buildCustworkorder(data)))
                .catch(error => console.log(`Customer Work Order fetch error ${error}`))
};

export const buildCustworkorder = workorder => {
    
    return {
         type: ActionTypes.FETCH_CUSTOMER_WORKORDER,
         payload: workorder 
    }
    
}



export const fetchdTodayWorkorder = () => dispatch => {
    return fetch( serverUrl + '/workordertoday',
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
                .then(data => dispatch(buildtodayworkorder(data)))
                .catch(error => console.log(`Work Order due fetch error ${error}`))
};

export const buildtodayworkorder = workorder => {
    
    return {
         type: ActionTypes.FETCH_TODAY_WORKORDER,
         payload: workorder 
    }
    
}


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
 export const editWorkorder = (worderid, custid, brand, model, promised_date, inst) => dispatch  => {
   
    return fetch( serverUrl + '/workorder',
                {
                    method: "PUT",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid, custid, brand, model, promised_date, inst}),
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

export const checkInTech = (worderid, techid, status) => dispatch  => {
   
    return fetch( serverUrl + '/checkInTech',
                {
                    method: "PUT",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid, techid, status}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchWorkorder());
                })
                .catch(error => {
                    alert('Check-in Technician to Work Order Error' + error)
                })
 }

 export const checkOutTech = (worderid, tech_comment, status) => dispatch  => {
   
    return fetch( serverUrl + '/checkoutTech',
                {
                    method: "PUT",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid, tech_comment, status}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    alert(data);
                    dispatch(fetchWorkorder());
                })
                .catch(error => {
                    alert('Check-out technician to Work Order Error' + error)
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

 export const closeWorkorder = (worderid) => dispatch  => {
   
    return fetch( serverUrl + '/close',
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
                    alert('Close Work Order error' + error)
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

  export const fetchWorkorderDtlParts = (id) => dispatch => {
    return fetch( serverUrl + `/workorderdtlparts/${id}`,
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
                .then(data => dispatch(buildworkorderdtlParts(data)))
                .catch(error => console.log(`Work Order Parts/Materials Details fetch error ${error}`))
};
         
  
  export const buildworkorderdtlParts = workorderdtl => {
   
      return {
           type: ActionTypes.FETCH_WORKORDER_PARTS,
           payload: workorderdtl 
      }
      
  }


// WORK ORDER TRANSACTIONS SERVICE 

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
                  
                dispatch(fetchWorkorderDtl(worderid));
               })
               .catch(error => {
                   alert('Delete Work Order detail error' + error)
               })
}

// WORK ORDER TRANSACTIONS PARTS/MATERIALS 

export const addWorkorderDtlParts = (worderid, partsname, price) => dispatch  => {
              
    
    return fetch( serverUrl + '/workorderdtlparts',
                {
                    method: "POST",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({worderid, partsname, price}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    console.log(data)    
                    dispatch(fetchWorkorderDtlParts(worderid));
                })
                .catch(error => {
                    alert('Add Work Order Detail error' + error)
                })
 }
 // EDIT WORK ORDER PARTS/MATERIALS

 export const editWorkorderDtlParts = (worderid, partsid, partsname, price)  => dispatch  => {
   
   return fetch( serverUrl + '/workorderdtlparts',
               {
                   method: "PUT",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({worderid, partsid, partsname, price}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchWorkorderDtlParts(worderid));
               })
               .catch(error => {
                   alert('Edit Work Order Parts/Material Detail error' + error)
               })
}
 // DELETE WORK ORDER PARTS/MATERIALS 



 export const deleteWorkorderDtlParts = (partsid, worderid) => dispatch  => {
    
   return fetch( serverUrl + '/workorderDtlparts',
               {
                   method: "delete",
                   headers:{
                       "Content-type" : "application/json",
                   },
                   body: JSON.stringify({partsid, worderid}),
               })
              .then(response => {
                 return response.text()
               })
               .then(data => {
                   alert(data);
                   dispatch(fetchWorkorderDtlParts(worderid));
               })
               .catch(error => {
                   alert('Delete Work Order detail error' + error)
               })
}

// System Settings 

export const fetchSysSettings = () => dispatch => {
    return fetch( serverUrl + '/syssettings',
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
                .then(data => dispatch(buildsysSettings(data)))
                .catch(error => console.log(`System Settings fetch error ${error}`))
};
  
  export const buildsysSettings = workorder => {
    
      return {
           type: ActionTypes.FETCH_SYS_SETTINGS,
           payload: workorder 
      }
      
  }

// WORK ORDER TRANSACTIONS 

  export const addSysSettings = (bussiness_name,street,city,state,zip,phone_num,email,tax, id) => dispatch  => {
    
    return fetch( serverUrl + '/syssettings',
                {
                    method: "POST",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({bussiness_name,street,city,state,zip,phone_num,email,tax, id}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    dispatch(fetchSysSettings());
                })
                .catch(error => {
                    alert('Add System Setting error' + error)
                })
 }
 // EDIT WORK ORDER 
 export const editSysSettings = (bussiness_name,street,city,state,zip,phone_num,email,tax, id) => dispatch  => {
   
    return fetch( serverUrl + '/workorder',
                {
                    method: "PUT",
                    headers:{
                        "Content-type" : "application/json",
                    },
                    body: JSON.stringify({bussiness_name,street,city,state,zip,phone_num,email,tax, id}),
                })
               .then(response => {
                  return response.text()
                })
                .then(data => {
                    dispatch(fetchSysSettings());
                })
                .catch(error => {
                    alert('Edit System Setting  Error' + error)
                })
 }












 

 





