const pool = require('../db')

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
  
  module.exports = {
    getWorkorders,
    createWorkorder,
    editWorkorder,
    deleteWorkorder,
      

  }