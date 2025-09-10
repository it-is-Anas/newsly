import Link from "next/link";
import { News } from "../news-dummy-data";


export default function NewsList({news}:{news:News[]}){
    return (
    <ul className="w-[100%] flex justify-evenly  items-center flex-wrap">
        {
            news.map((newsItem:News) => (<li className="font-[600] text-[1.2em] px-[10px] py-[5px] hover:bg-[#eee] mx-[1em] mr-[auto]" key={newsItem.id} > 
                <Link className="flex flex-col items-center" href={`/news/${newsItem.slug}`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} className="w-[10em] h-[10em]" />
                    <span className="">{ newsItem.title }</span>
                </Link>
            </li>))
        }
    </ul>);
}