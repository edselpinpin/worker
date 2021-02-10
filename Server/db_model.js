const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'workdb',
  password: 'root',
  port: 5432,
});

// CUSTOMER 

const getCustomers = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM customer ORDER BY custid ASC', (error, results) => {
        if (error) {
          reject(error)
        }
       
        resolve(results.rows);
      })
    }) 
  }
  const createCustomer = (body) => {
   
   
    return new Promise(function(resolve, reject) {
      /*  need to specify values on the pool query */
      const values  = [body.firstname, body.lastname, body.street, body.city, body.state, body.zip, body.mobile, body.email]
      pool.query(`INSERT INTO customer (firstname, lastname, street, city, state, zip, mobile, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, values,  (error, results) => {

        if (error) {
          reject(error)
        }
        resolve(`A customer has been added added`)
      })
    })
  }

  const editCustomer = (body) => {
    return new Promise(function(resolve, reject) {
      /*  need to specify values on the pool query */
      const values  = [body.custid, body.firstname, body.lastname, body.street, body.city, body.state, body.zip, body.mobile, body.email]
      pool.query(`UPDATE customer  SET firstname= $2, lastname = $3, street = $4, city = $5, state = $6, zip = $7, mobile = $8, email = $9 WHERE custid = $1`, values ,  (error, results) => {

        if (error) {
          reject(error)
        }
        resolve(`Customer ${body.custid} has been edited`)
      })
    })
  }

  const deleteCustomer = (body) => {
    console.log(body)
    return new Promise(function(resolve, reject) {
      const id =  [parseInt(body.custid)]

      pool.query('DELETE FROM customer WHERE custid = $1', id, (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Customer deleted with ID: ${id}`)
      })
    })
  }

// SERVICE 

const getServices = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM service ORDER BY serviceid DESC', (error, results) => {
      if (error) {
        reject(error)
      }
     
      resolve(results.rows);
    })
  }) 
}


const createService = (body) => {
  return new Promise(function(resolve, reject) {
    const values = [body.servicename, body.servicedescription, body.price]
    pool.query(`INSERT INTO service (servicename, servicedescription, price) VALUES ($1, $2, $3)`, values , (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A service menu ${body.serviceid} has been added` )
    })
  })
}

const editService = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  = [body.serviceid, body.servicename, body.servicedescription, body.price]
    pool.query(`UPDATE service  SET servicename= $2, servicedescription = $3, price = $4 WHERE serviceid = $1`, values ,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`A service menu ${body.serviceid} has been edit` )
    })
  })
}

const deleteService = (body) => {
  console.log(body)
  return new Promise(function(resolve, reject) {
    const id =  [body.serviceid]

    pool.query('DELETE FROM service WHERE serviceid = $1', id, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A service menu ${id} has been deleted`)
    })
  })
}

// TECH 

const getTech = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM technicians ORDER BY techid DESC', (error, results) => {
      if (error) {
        console.log(error)  
        reject(error)
      }
     
      resolve(results.rows);
    })
  }) 
}
const createTech = (body) => {
   
   
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  = [body.firstname, body.lastname]
    pool.query(`INSERT INTO technicians (firstname, lastname) VALUES ($1, $2)`, values,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`A technician has been added added ${body.techid}`)
    })
  })
}

const editTech = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  = [body.techid, body.firstname, body.lastname]
    pool.query(`UPDATE technicians  SET firstname= $2, lastname = $3  WHERE techid = $1`, values ,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`Customer ${body.custid} has been edited`)
    })
  })
}

const deleteTech = (body) => {
  console.log(body)
  return new Promise(function(resolve, reject) {
    const id =  [body.techid]

    pool.query('DELETE FROM technicians WHERE techid= $1', id, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Tecnician deleted with ID: ${id}`)
    })
  })
}

// WORK ORDER  


const getWorkordersdue = () => {
  return new Promise(function(resolve, reject) {
    pool.query(`select * from worder where worder.status = 'Work in Progress' and 
                worder.promised_date < CURRENT_DATE`, (error, results) => {
      if (error) {
        reject(error)
      }
     
      resolve(results.rows);
    })
  }) 
}

const getWorkorderstoday = () => {
  return new Promise(function(resolve, reject) {
    pool.query(`select * from worder where worder.status = 'Work in Progress' and 
                worder.promised_date = CURRENT_DATE`, (error, results) => {
      if (error) {
        reject(error)
      }
     
      resolve(results.rows);
    })
  }) 
}

const getWorkorderCust = (custid) => {
  const value = parseInt(custid)
  return new Promise(function(resolve, reject) {
    pool.query(`select * from worder where worder.custid = $1`, [value], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const getWorkorders = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM worder ORDER BY worderid DESC', (error, results) => {
      if (error) {
        reject(error)
      }
     
      resolve(results.rows);
    })
  }) 
}
const createWorkorder = (body) => {
 
 
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  = [body.custid, body.cust_firstname, body.cust_lastname, body.brand, body.model, body.promised_date, body.inst, body.status]
    pool.query(`INSERT INTO worder (custid, cust_firstname, cust_lastname, brand, model, promised_date, inst, status, date_created) VALUES ($1, $2, $3, $4, $5, $6, $7,$8, NOW())`, values,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`A Work Order has been added added for ${body.cust_firstname} ${body.cust_lastname}`)
    })
  })
}

const editWorkorder = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  =  [body.worderid, body.custid,  body.cust_firtsname,  body.cust_lastname, body.brand, body.model, body.promised_date, body.inst]
    pool.query(`UPDATE worder  SET custid= $2, cust_firstname = $2, cust_lastname = $3, brand = $4,  model = $5,  promised_date = $6 inst = $7 WHERE worderid = $1`, values ,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`Work Order  ${body.worderid} has been edited`)
    })
  })
}


const deleteWorkorder = (body) => {
  console.log(body)
  return new Promise(function(resolve, reject) {
    const id =  [parseInt(body.worderid)]

    pool.query('DELETE FROM worder WHERE worderid = $1', id, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Customer deleted with ID: ${id}`)
    })
  })
}



const gettechload = () => {
  return new Promise(function(resolve, reject) {
    pool.query(`SELECT  COUNT(techid) AS counter, techid, tech_firstname, tech_lastname  from worder WHERE worder.status = 'Work in Progress' GROUP BY techid, tech_firstname, tech_lastname `, (error, results) => {
      if (error) {
        reject(error)
      }
     
      resolve(results.rows);
    })
  }) 
}



// Assign Technican to Work Order 
const checkInTech = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  =  [body.worderid, body.techid,  body.tech_firstname,  body.tech_lastname]
    pool.query(`UPDATE worder  SET techid= $2, tech_firstname = $3, tech_lastname = $4,  tech_datetime_in = NOW(),  status = 'Work in Progress' WHERE worderid = $1`, values ,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`Work Order  ${body.worderid} has been edited`)
    })
  })
}

const checkOutTech = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  =  [body.worderid, body.tech_comment, body.status]
    pool.query(`UPDATE worder  SET tech_datetime_out = NOW(), tech_comment = $2, status = $3 WHERE worderid = $1`, values ,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`Work Order  ${body.worderid} technician is now checked out and Work Order marked as Complete`)
    })
  })
}

// Work Order Transaction

const reassignTech = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  =  [body.worderid]
    pool.query(`UPDATE worder  SET techcode= '', tech_firstname = '', tech_lastname = '', status = 'Open' WHERE worderid = $1`, values ,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`Work Order  ${body.worderid} reasign back to status Open`)
    })
  })
}

const completeWorkorder = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  =  [body.worderid]
    pool.query(`UPDATE worder  SET  status = 'Complete' WHERE worderid = $1`, values ,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`Work Order  ${body.worderid} is now Complete`)
    })
  })
}

// Worder Details 
const getWorkorderDtl = (id) => {
  return new Promise(function(resolve, reject) {
    const value = parseInt(id)
    pool.query('SELECT * FROM worder_dtl WHERE worderid =$1', [value] , (error, results) => {
      if (error) {
        reject(error)
      }
     
      resolve(results.rows);
    })
  }) 
}
const createWorkorderDtl = (body) => {
 
 
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  = [body.worderid,  body.serviceid, body.servicename, body.servicedescription, body.price]
    pool.query(`INSERT INTO worder_dtl (worderid, serviceid, servicename, servicedescription, price) VALUES ($1, $2, $3,$4,$5)`, values,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`A Work Order Detail  has been added added for ${body.worderid}`)
    })
  })
}

const editWorkorderDtl = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  =  [body.worderdtlid, body.worderid, body.serviceid,  body.servicename, body.servicedescription, body.price]
    pool.query(`UPDATE worder_dtl SET serviceid = $3,  servicename  = $4, servicedescription = $5 WHERE worderdtlid = $1 and worderid = $2`, values ,  (error, results) => {
      if (error) {
        reject(error)
      }
       resolve(`Work Order ${body.worderid} has been edited`)
    })
  })
}

const deleteWorkorderDtl = (body) => {
 
  return new Promise(function(resolve, reject) {
    const id =  [parseInt(body.worderdtlid), parseInt(body.worderid)]

    pool.query(`DELETE FROM worder WHERE worderid = $1 and worderdtlid = $2`, id, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Work Order deleted with  ID: ${body.worderdtlid}`)
    })
  })
}

  module.exports = {
    getCustomers,
    createCustomer,
    editCustomer,
    deleteCustomer,
    getServices,
    createService,
    editService,
    deleteService,
    createTech,
    getTech,
    gettechload,
    editTech,
    deleteTech,
    getWorkorders,
    createWorkorder,
    editWorkorder,
    checkInTech,
    checkOutTech,
    reassignTech,
    completeWorkorder,
    deleteWorkorder,
    getWorkorderDtl,
    getWorkordersdue,
    getWorkorderstoday,
    getWorkorderCust,
    createWorkorderDtl,
    editWorkorderDtl,
    deleteWorkorderDtl
    
  }
