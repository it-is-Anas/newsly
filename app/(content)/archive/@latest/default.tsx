import NewsList from "../../../../components/news-list";
import { getLatestNews } from "../../../../lib/news-opr";
import { DUMMY_NEWS, News } from "../../../../news-dummy-data";

export default function LatestPage(){
    const news:News[] = getLatestNews(DUMMY_NEWS);
    return (
        <>
            <h1 className="text-center py-[20px] font-[600] text-[2em]">Latest news :</h1>
            <NewsList news={news} />
        </>
    );
}