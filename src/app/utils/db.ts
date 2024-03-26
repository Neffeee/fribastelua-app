import sql, {ConnectionPool} from 'mssql'



const config = {
  user: 'sa',
  password: 'salasana123',
  server: 'localhost', // or the IP address of your database server
  database: 'FribasteluDB',
  options: {
    encrypt: false, // For local development, set this to false
    enableArithAbort: true // Required for Azure SQL Database
  }
};

const pool = new ConnectionPool(config);
export async function connect() {
  try {
    pool.connect();
    console.log('Connected to MSSQL database');
  } catch (error) {
    console.error('Error connecting to MSSQL database:', error);
  }
}

export async function close() {
  try {
    await pool.close();
    console.log('Closed MSSQL database connection');
  } catch (error) {
    console.error('Error closing MSSQL database connection:', error);
  }
}

export async function query(sqlQuery:string) {
    
  try {
      const result = await pool.query(sqlQuery);
      return result.recordset;
  } catch (error) {
      console.error('Error executing query:', error);
      throw error;
  }
}



























// const config: sql.config = {
//   user: 'sa',
//   password: 'salasana123',
//   server: 'localhost', // or your server IP address
//   database: 'FribasteluDB',
//   options: {
//     encrypt: false // Set to true if you're using Azure SQL Database
// }
// };
// let pool: ConnectionPool;
// export async function connectToDatabase(): Promise<ConnectionPool> {
//   try {
//       const pool = await sql.connect(config);
//       console.log('Connected to MSSQL Server');
//       return pool;
//   } catch (error) {
//       console.error('Error connecting to MSSQL Server:', error);
//       throw error;
//   }
// }

// export async function closeConnection() {
//   try{
//     if(pool){
//       await pool.close();
//       console.log('Connection closed')
//     }
//   }
//   catch (error) {
//     console.error('Error closing connection:', error)
//     throw error;
//   }
// }







