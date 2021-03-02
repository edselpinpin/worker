const pool = require('../db')

// SYSTEM SETTINGS 
const getSysSettings = () => {
    return new Promise(function(resolve, reject) {
      pool.query(`SELECT * FROM sys_settings`, (error, results) => {
        if (error) {
          reject(error)
        }
        console.log(results)
        resolve(results.rows);
      })
    }) 
  }
  const createSysSettings = (body) => {
   
   
    return new Promise(function(resolve, reject) {
      /*  need to specify values on the pool query */
      const values  =  [body.bussiness_name, body.street, body.city, body.state, body.zip, body.phone_num, body.email, body.tax]
      pool.query(`INSERT INTO sys_settings (bussiness_name, street, city, state, zip, phone_num, email, tax,id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,'0')`, values,  (error, results) => {
  
        if (error) {
          reject(error)
        }
        resolve(`Settings has been added`)
      })
    })
  }
  
  const editSysSettings = (body) => {
    return new Promise(function(resolve, reject) {
      /*  need to specify values on the pool query */
      const values  =  [body.bussiness_name, body.street, body.city, body.state, body.zip, body.phone_num, body.email, body.tax]
      pool.query(`UPDATE sys_settings  SET bussines_name = $1, street = $2, city = $3, state = $4, zip = $5, phone_num = $6, email = $7, tax = $8 WHERE id = $1`, values ,  (error, results) => {
  
        if (error) {
          reject(error)
        }
        resolve(`System Setting has been updated`)
      })
    })
  }

  module.exports = {
    getSysSettings,
    createSysSettings,
    editSysSettings,
  }
  