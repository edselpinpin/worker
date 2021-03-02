/* Work Order Parts */
const pool = require('../db')

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
    getWorkorderDtlParts,
    createWorkorderDtlParts,
    editWorkorderDtlParts,
    deleteWorkorderDtlParts,
  }
  