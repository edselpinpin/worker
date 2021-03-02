const pool = require('../db')
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

  module.exports = {
    createWorkorderDtl,
    editWorkorderDtl,
    deleteWorkorderDtl,
    getWorkorderDtl,
  }

