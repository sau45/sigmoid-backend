const { Pool } = require('pg')
require('dotenv').config()


const pool = new Pool({
    connectionString: process.env.POSTGRE_SQL,
})

try {

    pool.connect(() => {
        console.log('Database Connected Succesfully');
    })

} catch (error) {
    console.log(error)

}

module.exports = pool;
