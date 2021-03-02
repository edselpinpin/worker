// CUSTOMER 
const pool = require('../db')

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
module.exports = {
    getCustomers,
    createCustomer,
    editCustomer,
    deleteCustomer,

}