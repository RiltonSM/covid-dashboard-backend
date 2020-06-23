require('dotenv/config');
// Update with your config settings.

module.exports = {

  development: {
    /*client: 'sqlite3',
    connection: {
      filename: './src/database/database.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations'
    },*/
    client: 'pg',
    connection: {
      user: "iaiaxneouxgphe",
      password: process.env.DATABASE_PASSWORD,
      database: "ddbgqud7nlnob4",
      port: 5432,
      host: "ec2-52-20-248-222.compute-1.amazonaws.com",
      ssl: {rejectUnauthorized: false}
    }, 
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    /*pool:{
      min: 0,
      max: 1000,
      propagateCreateError: false, 
      idleTimeoutMillis: 10000, 
      createTimeoutMillis: 10000, 
      acquireTimeoutMillis: 10000
    },*/
    useNullAsDefault: false
  }
};
