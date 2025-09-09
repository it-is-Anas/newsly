import { Params } from "next/dist/server/request/params";




export default function NewsPage({params}:{
    params: Params,
}){
    return(
        <h1 className="text-[1.6em] font-[600] my-[10px]">Welcome to news {params.id} page</h1>
    );
}