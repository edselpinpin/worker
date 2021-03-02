// TECH 
const pool = require('../db')

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
  
  module.exports = {
    createTech,
    getTech,
    createTech,
    getTech,


  }