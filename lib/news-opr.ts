import { News } from "../news-dummy-data";



export function getYears(news: News[]){
    
    return news.map(newsItem=> newsItem.date.split('-')[2]);
}


export function getLatestNews(news: News[]){
    return news.reverse();
}


export function getNewsInYear(news: News[],year:string){
    return news.filter(newsItem => {
        const nowYear = newsItem.date.split('-')[2];
        if(parseInt(nowYear) <= parseInt(year)){
            return nowYear;
        }
        return ;
    });
}