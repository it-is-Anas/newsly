import Link from "next/link";

import { DUMMY_NEWS } from '../../news-dummy-data';
import type { News } from '../../news-dummy-data';

export default function NewsPage(){
    return(
        <>
            <h1 className="text-[1.6em] font-[600] my-[10px]">Welcome to news page</h1>
            <ul className="w-[100%] flex justify-start  items-center flex-wrap">
                {
                    DUMMY_NEWS.map((newsItem:News) => (<li className="font-[600] text-[1.2em] px-[10px] py-[5px] hover:bg-[#eee] mx-[1em] my-[auto]" key={newsItem.id} > 
                        <Link className="flex flex-col items-center" href={`/news/${newsItem.slug}`}>
                            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} className="w-[10em] h-[10em]" />
                            <span className="">{ newsItem.title }</span>
                        </Link>
                    </li>))
                }
            </ul>
        </>
    );
}