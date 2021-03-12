
// WORK ORDER  
const pool = require('../db')
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
                  worder.promised_date >= CURRENT_DATE`, (error, results) => {
        if (error) {
          reject(error)
        }
       
        resolve(results.rows);
      })
    }) 
  }

  const getOpenWorkorders = () => {
    return new Promise(function(resolve, reject) {
      pool.query(`select * from worder INNER JOIN customer ON worder.custid = customer.custid 
                  LEFT JOIN technicians ON technicians.techid = worder.techid 
                  where worder.status = 'Open' or 
                  worder.status       = 'Complete' AND 
                  worder.promised_date >= CURRENT_DATE`, (error, results) => {
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

  module.exports = {
    getWorkordersdue,
    getWorkorderstoday,
    getOpenWorkorders,
    getWorkorderCust,
    gettechload,
  }