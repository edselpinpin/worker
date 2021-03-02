// Assign Technican to Work Order 
const pool = require('../db')
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

  module.exports = {
    checkInTech,
    checkOutTech,
    reassignTech,
    completeWorkorder,
    closeWorkorder,
    
  }