'use client';

import { Params } from "next/dist/server/request/params";
import { DUMMY_NEWS } from "../../../../../../news-dummy-data";
import { notFound , useRouter} from "next/navigation";

export default function ImagePage({params}:{params:Params}){

    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem)=> newsItem.slug  === newsSlug  );

    if(!newsItem){
        notFound();
    }

    const router = useRouter();

    return (
        <>
            <div className="" onClick={router.back} >
                <h1 className="">Intercepting route</h1>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} className="" />
            </div>
        </>
    );
}