import { Params } from "next/dist/server/request/params";
import { getNewsInYear } from "../../../../lib/news-opr";
import { DUMMY_NEWS } from "../../../../news-dummy-data";
import NewsList from "../../../../components/news-list";


export default function PageYear({ params }:{ params: Params }){
    const year = params.year;
    const news = getNewsInYear(DUMMY_NEWS,year as string);
    return (
        <>
            <h1 className="py-[20px] text-center font-[600] text-[2em]"> news of year:  {year}</h1>
            <NewsList news={news} ></NewsList>
        </>
    );
} 