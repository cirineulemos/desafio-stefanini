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
  const sql = "INSERT INTO TB_FUNCIONARIOS (ID_FUNC, IDADE_FUNC, NOME_FUNC, CARGO_FUNC) VALUES (" + event.id_func +"," + event.idade_func + "," + event.nome_func + "," + event.cargo_func +")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, result)
  });
};
exports.editFunc = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = "UPDATE TB_FUNCIONARIOS SET IDADE_FUNC = "+ event.idade_func + ", NOME_FUNC = " + event.nome_func + ", CARGO_FUNC = " + event.cargo_func + " WHERE ID_FUNC = " + event.id_func;
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, result)
  });
};
exports.deleteFunc = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sql = "DELETE FROM TB_FUNCIONARIOS WHERE ID_FUNC = " + event.id_func;
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(null, result)
  });
};