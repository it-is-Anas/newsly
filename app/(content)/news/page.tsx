import Link from "next/link";
import ClientNewsItems from "../../../components/client-news-list";


export default function NewsPage(){
    return(
        <>
            <h1 className="text-[1.6em] font-[600] my-[10px]">Welcome to news page</h1>
            <ClientNewsItems></ClientNewsItems>
        </>
    );
}