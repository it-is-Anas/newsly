import NewsList from "./news-list";
import { News } from "../news-dummy-data";


export default async function ClientNewsItems(){

    const response = await fetch('http://localhost:5000/news');
    const news = await response.json();
    console.log(news);

    return <NewsList news={news} />
}