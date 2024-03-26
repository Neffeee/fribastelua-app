import { NextApiRequest, NextApiResponse } from 'next';
// import {connectToDatabase, closeConnection } from '../../utils/db';
import { NextResponse } from 'next/server';
import { connect, query, close } from '../../utils/db';


export  async function GET() {
     
    await connect()
    const result = await query('SELECT * FROM ProductKiekot')
    console.log(result)
    close()
    return Response.json(result)
    
}








// async function handler(res: NextApiResponse, req:NextApiRequest) {
//     if (req.method === 'GET') {

//         try{
            
//             await connect();
//             const result = await query('SELECT * FROM ProductKiekot');
//             console.log(result)
            
//             return NextResponse.json(result);
            
//         }
//         catch (error) {
//             console.error('Error fetching data:', error);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//         finally{
//             close();
//         }
        
//     }
// }

// export default handler
























// Handle GET requests
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'GET') {      

//             // Handle GET request logic here
//             const pool = await connectToDatabase();
//             const result = await pool.request().query('SELECT * FROM ProductKIEKOT')
//             console.log(result)
//             return NextResponse.json(result)
             
//     }
//     else{
//         console.log("ei toiminu")
//     }
    
// }

// // Handle POST requests
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         // Handle POST request logic here
//         res.status(200).json({ message: 'POST request handled' });
//     } else {
//         // Handle other HTTP methods
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }