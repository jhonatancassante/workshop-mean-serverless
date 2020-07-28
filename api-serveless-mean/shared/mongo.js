/**
 * Arquivo: mongo.js
 * Data: 28/07/2020
 * Descrição: arquivo responsável por tratar a conexão da Base de Dados localmente
 * 
 * Digitar o snippet: mongo-serveless-conn
 */

 const { MongoClient } = require('mongodb')

 const config = {
     url: 'mongodb://localhost:27017/crud-workshop-mean-az',
     dbname: 'crud-workshop-mean-az'
 }

 async function createConnection () {
     const connection = await MongoClient.connect(config.url, { useNewUrlParse: true })
     const db = connection.db(config.dbname)
     return {
         connection,
         db
     }
 }

 module.exports = createConnection