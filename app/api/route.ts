


export function GET(request: Request){
    console.log(request);

    //return Response.json();
    return new Response('Moin moin');
}


// export function Post(request: Request){}