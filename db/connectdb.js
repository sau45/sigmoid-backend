const { Pool } = require('pg')
require('dotenv').config()


const pool = new Pool({
    connectionString: "postgres://default:LM6JX3xWgtri@ep-orange-snow-a1yqijtl-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
})

try {

    pool.connect(() => {
        console.log('Database Connected Succesfully');
    })

} catch (error) {
    console.log(error)

}

module.exports = pool;