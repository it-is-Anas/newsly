import Link from "next/link";

import { DUMMY_NEWS } from '../../news-dummy-data';
import NewsList from "../../components/news-list";

export default function NewsPage(){
    return(
        <>
            <h1 className="text-[1.6em] font-[600] my-[10px]">Welcome to news page</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    );
}