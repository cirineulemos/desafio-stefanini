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
  debug: true,
  database:'dbdesafio'
});

exports.listFunc = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = "SELECT * FROM TB_FUNCIONARIOS";
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, result)
  });
};

exports.selectFunc = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = "SELECT * FROM TB_FUNCIONARIOS WHERE ID_FUNC = " + event.id_func;
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, result)
  });
};

exports.addFunc = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = "SELECT * FROM TB_FUNCIONARIOS";
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, result)
  });
};
exports.editFunc = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = "SELECT * FROM TB_FUNCIONARIOS";
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, result)
  });
};
exports.deleteFunc = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = "SELECT * FROM TB_FUNCIONARIOS";
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, result)
  });
};