import { Params } from "next/dist/server/request/params";
import { getMonthesInYear, getNewsInMonth, getNewsInYear, getYears } from "../../../../lib/news-opr";
import { DUMMY_NEWS } from "../../../../news-dummy-data";
import NewsList from "../../../../components/news-list";
import Link from "next/link";


export default function PageYear({ params }:{ params: Params }){
    if(params.filters?.length){
        const year = params?.filters[0];
        const month = params?.filters[1];
        if(year && !month){
            const news = getNewsInYear(DUMMY_NEWS,year as string);
            const months = getMonthesInYear(news);
            return (
                <>
                    <h1 className="py-[20px] text-center font-[600] text-[2em]"> news of year:  {year}</h1>
                    <ul className="flex items-start ">
                        {
                            months.map((month,index) => (
                                <li key={index + month} className="font-[600] text-[1em] mx-[10px] opacity-[.6] hover:opacity-[1]" > <Link href={`/archive/${year}/${month}`} > {month} </Link>  </li>
                            ))
                        }
                    </ul>
                    <NewsList news={news} ></NewsList>
                </>
            );
        }else if(year && month){
            const news = getNewsInMonth(DUMMY_NEWS,year as string,month as string);
            return (
                <>
                    <h1 className="py-[20px] text-center  text-[2em]"> news of year: <span className="font-[600]">{ year }</span>  and month: <span className="font-[600]">{ month }</span> </h1>
                    <NewsList news={news} ></NewsList>
                </>
            );
        } 

    }
    const years = getYears(DUMMY_NEWS);
    return (<header className="flex  items-center">
            <h1 className="py-[10px]  font-[600] text-[1em]"> Years :</h1>
            <ul className="flex items-start ">
                {
                    years.map((year,index) => (
                        <li key={index + year} className="font-[600] text-[1em] mx-[10px] opacity-[.6] hover:opacity-[1]" > <Link href={`/archive/${year}`} > {year} </Link>  </li>
                    ))
                }
            </ul>
        </header>);

} 