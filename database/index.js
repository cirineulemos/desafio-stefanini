const mysql = require('mysql');
const con = mysql.createConnection({
  host: process.env.RDS_LAMBDA_HOSTNAME,
  user: process.env.RDS_LAMBDA_USERNAME,
  password: process.env.RDS_LAMBDA_PASSWORD,
  port: process.env.RDS_LAMBDA_PORT,
  connectionLimit: 10,
  multipleStatements: true,
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  debug: true
});

exports.handler = async (event) => {
  try {
    const data = await new Promise((resolve, reject) => {
      const body = JSON.parse(event.body);
      con.connect(function (err) {
        if (err) {
          reject(err);
        }
        con.query("CREATE DATABASE DBDESAFIO", function (err, result) {
          if (err) {
            console.log("Error =>" + err);
            reject(err);
          }
          resolve(result);
        });
      })
    });
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: err.message
    }
  }

};