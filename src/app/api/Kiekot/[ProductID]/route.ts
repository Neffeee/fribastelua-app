import { NextResponse } from 'next/server';
import { connect, query, close } from '../../../utils/db';

export async function GET(request: Request, context: any) {
    await connect()
    const data = await query('SELECT * FROM ProductKiekot')
    const {params } = context;
    const kiekot = data.filter((x) => params.ProductID === x.id.toString())
    close()
    return NextResponse.json({
        kiekot,
    })
}


// export async function DELETE(
//     req: Request,
//     { params } : { params : {id:string}}
// ) {
//     const index = comments.findIndex(
//         (comment) => comment.idi === parseInt(params.id)
//     );
//     const deleteComment = comments[index];
//     comments.splice(index, 1);
//     return Response.json(deleteComment);
// }
