import { NextResponse } from "next/server";


export function middleware(requst: Request){
    console.log('from middleware');
    return NextResponse.next();
}

// export const config = {
//     matcher: '/news',
// };