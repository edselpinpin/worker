// SERVICE 
const pool = require('../db')

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
module.exports = {
    getServices,
    createService,
    editService,
    deleteService,
    
   

}  