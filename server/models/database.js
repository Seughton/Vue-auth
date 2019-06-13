const { Client } = require('pg')
// const connectionString = 'postgresql://postgres:1111@localhost:5432/postgres'
const connectionString = 'postgres://smpiibgn:seJY6bClBqM972_dfF_ZCGx2xr2pSMsm@balarama.db.elephantsql.com:5432/smpiibgn'
const client = new Client(connectionString)

try { 
    client.connect()
} catch(e) {
    console.log('->', e)
}

client.on('connect', () => console.log('Connected succesfully'))

module.exports = client