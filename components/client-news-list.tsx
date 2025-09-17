'use client';

import { useEffect, useState } from "react";
import NewsList from "./news-list";
import { News } from "../news-dummy-data";


export default function ClientNewsItems(){
    const [news,setNews] = useState<News[]>([]);
    useEffect(()=>{
        
        const fun = async ()=>{
            try{
                const back = await fetch('http://localhost:5000/news');
                if(back.ok){
                    const response = await back.json();
                    setNews(response);
                }
            }catch(err){
                console.log(err);
            }
        };
        fun();
    },[]);
    return <NewsList news={news as News[]} />
}