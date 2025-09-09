import { Params } from "next/dist/server/request/params";
import { DUMMY_NEWS } from "../../../news-dummy-data";
import type {News} from "../../../news-dummy-data";
import { notFound } from "next/navigation";




export default function NewsPage({params}:{
    params: Params,
}){
    const newsSlug = params.slug;
    const newsItem: (News|undefined) = DUMMY_NEWS.find(news => news.slug === newsSlug);
    if(!newsItem){
        notFound();
    }
    return(
        <article className="" >
            <header className="">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} className="w-[12em] h-[12em]" />
                <h1 className="font-[600] text-[1.2em]">{newsItem.title}</h1>
                <p className="text-[.8em] font-[600]">{newsItem.date}</p>
            </header>   
            <p className="text-[.8em] font-[600] font-[500]">
                {newsItem.content}
            </p>
        </article>
    );
}