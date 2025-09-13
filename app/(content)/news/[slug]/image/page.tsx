import { Params } from "next/dist/server/request/params";
import { DUMMY_NEWS } from "../../../../news-dummy-data";
import { notFound } from "next/navigation";


export default function ImagePage({params}:{params:Params}){

    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem)=> newsItem.slug  === newsSlug  );

    if(!newsItem){
        notFound();
    }

    return (
        <>
            <div className="">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} className="" />
            </div>
        </>
    );
}