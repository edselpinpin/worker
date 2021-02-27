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
      pool.query(`INSERT INTO customer (cust_firstname, cust_lastname, street, city, state, zip, mobile, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, values,  (error, results) => {

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
      pool.query(`UPDATE customer  SET cust_firstname= $2, cust_lastname = $3, street = $4, city = $5, state = $6, zip = $7, mobile = $8, email = $9 WHERE custid = $1`, values ,  (error, results) => {

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
    pool.query(`INSERT INTO technicians (tech_firstname, tech_lastname) VALUES ($1, $2)`, values,  (error, results) => {

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
    pool.query(`UPDATE technicians  SET tech_firstname= $2, tech_lastname = $3  WHERE techid = $1`, values ,  (error, results) => {

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
    pool.query(`select * from worder INNER JOIN customer ON worder.custid = customer.custid 
                                     LEFT JOIN technicians ON technicians.techid = worder.techid 
                                     where worder.status = 'Work in Progress' and 
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
    pool.query(`select * from worder INNER JOIN customer ON worder.custid = customer.custid 
                LEFT JOIN technicians ON technicians.techid = worder.techid 
                where worder.status = 'Work in Progress' and 
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
    pool.query('SELECT * FROM worder INNER JOIN customer ON worder.custid = customer.custid LEFT JOIN technicians ON technicians.techid = worder.techid ORDER BY worder.worderid DESC', (error, results) => {
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
    const values  = [body.custid, body.brand, body.model, body.promised_date, body.inst, body.status]
    pool.query(`INSERT INTO worder (custid, brand, model, promised_date, inst, status, date_created) VALUES ($1, $2, $3, $4, $5, $6,NOW())`, values,  (error, results) => {

      if (error) {
        reject(error)
      }
      resolve(`A Work Order has been added added for custid:  ${body.custid}`)
    })
  })
}

const editWorkorder = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  =  [body.worderid, body.custid, body.brand, body.model, body.promised_date, body.inst]
    pool.query(`UPDATE worder  SET custid = $2,  brand = $3,  model = $4,  promised_date = $5, inst = $6 WHERE worderid = $1`, values ,  (error, results) => {

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
    pool.query(`SELECT COUNT(worder.techid) AS counter, worder.techid, technicians.tech_firstname, technicians.tech_lastname from worder INNER JOIN technicians ON technicians.techid = worder.techid 
                              WHERE worder.status = 'Work in Progress'  GROUP BY worder.techid, technicians.tech_firstname, technicians.tech_lastname  `, (error, results) => {
                                                        
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
    const values  =  [body.worderid, body.techid, body.status]
    pool.query(`UPDATE worder  SET techid= $2,  tech_datetime_in = NOW(),  tech_datetime_out = NULL, status = $3 
                 WHERE EXISTS   
              (
                  SELECT 1 from worder_dtl  WHERE worder_dtl.worderid = $1 and 
                                                  worder.worderid   = $1
                  
              )`, values ,  (error, results) => 
              {
                if (error) {
                    reject(error)
                 }
                 if(results.rowCount === 0) {
                  reject('Work Order service details not entered')
                 }
                  
                  resolve(`Work Order  ${body.worderid} is now checked-in`)
              })
              })
}

const checkOutTech = (body) => {
  return new Promise(function(resolve, reject) {
    /*  need to specify values on the pool query */
    const values  =  [body.worderid, body.tech_comment, body.status]
    pool.query(`UPDATE worder  SET tech_datetime_out = NOW(),  tech_comment = $2, status = $3 
               WHERE EXISTS   
                (
                    SELECT 1 from worder_dtl  WHERE worder_dtl.worderid = $1 and 
                                                    worder.worderid   = $1
                    
                )` ,values ,  (error, results) => {
  
              if (error) {
                reject(error)
              }
              if (results.rowCount === 0) {
                reject('Work Order service details not entered')
              }

              resolve(`Work Order  ${body.worderid}  is now checked out marked as Complete`)
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

const closeWorkorder = (body) => {
  return new Promise(function(resolve, reject) {
    const values  =  [body.worderid]
    pool.query(`UPDATE worder 
                  SET amount = COALESCE(t.totalamtService,0) + (COALESCE(t.totalamtService,0) * tax / 100) +  
                               COALESCE(p.totalamtParts,0) + (COALESCE(p.totalamtParts,0) * tax / 100), status = 'Closed' 
                      FROM worder  w	
                  INNER JOIN 
                  (
                      SELECT worderid , (SELECT tax from sys_settings) as tax,  SUM(price) AS totalamtService
                      FROM worder_dtl  
                      WHERE worderid = $1
                      GROUP BY worderid
                  )t ON w.worderid = t.worderid 
                  LEFT JOIN 
                  (
                      SELECT worderid,  SUM(price) AS totalamtParts 
                      FROM worder_parts 
                      WHERE worderid = $1	
                      GROUP BY worderid
                  ) p ON w.worderid = p.worderid 
                WHERE worder.worderid = $1`, values ,(error, results) => {
                  if (error) {
                    reject(error)
                  }
                  resolve(`Work Order  ${body.worderid} is now Closed`)
                })
        })
}

// Worder Details 
const getWorkorderDtl = (id) => {
  return new Promise(function(resolve, reject) {
    const value = parseInt(id)
    pool.query(`
    SELECT * FROM worder_dtl WHERE worderid = $1 ORDER BY worderdtlid DESC`, [value] , (error, results) => {
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

    pool.query(`DELETE FROM worder_dtl WHERE worderdtlid = $1 and worderid = $2`, id, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Work Order deleted with  ID: ${body.worderdtlid}`)
    })
  })
}

/* Work Order Parts */

const getWorkorderDtlParts = (id) => {
  return new Promise(function(resolve, reject) {
    const value = parseInt(id)
    pool.query(`SELECT * FROM worder_parts WHERE worderid = $1 ORDER BY partsid DESC`, [value] , (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const createWorkorderDtlParts = (body) => {
  return new Promise(function(resolve, reject) {
   /*  need to specify values on the pool query */
   const values  = [body.worderid, body.partsname, body.price]
     pool.query(`INSERT INTO worder_parts (worderid, partsname, price) VALUES ($1, $2, $3)`, values,  (error, results) => {
       if (error) {
        console.log(results)
        console.log(error)
         reject(error)
       }
       resolve(`A Work Order Detail has been added added for ${body.worderid}`)
     })
   
    
       
 })
}

const editWorkorderDtlParts = (body) => {
 return new Promise(function(resolve, reject) {
   /*  need to specify values on the pool query */
   const values  = [parseInt(body.worderid),  parseInt(body.partsid), body.partsname, body.price]
   pool.query(`UPDATE worder_parts SET partsname = $3,  price  = $4  WHERE partsid = $2 and worderid = $1`, values ,  (error, results) => {
     if (error) {
       reject(error)
     }
      resolve(`Work Order Parts/Material detail  ${body.worderid} has been edited`)
   })
 })
}

const deleteWorkorderDtlParts = (body) => {

 return new Promise(function(resolve, reject) {
   const id =  [parseInt(body.partsid), parseInt(body.worderid)]
  


   pool.query(`DELETE FROM worder_parts WHERE partsid = $1 and worderid = $2`, id, (error, results) => {
     if (error) {
       reject(error)
     }
     resolve(`Work Order Parts/Material detail deleted with  ID: ${body.partsid}`)
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
    closeWorkorder,
    deleteWorkorder,
    getWorkorderDtl,
    getWorkordersdue,
    getWorkorderstoday,
    getWorkorderCust,
    createWorkorderDtl,
    editWorkorderDtl,
    deleteWorkorderDtl,
    getWorkorderDtlParts,
    createWorkorderDtlParts,
    editWorkorderDtlParts,
    deleteWorkorderDtlParts
  }
