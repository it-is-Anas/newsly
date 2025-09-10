import Link from "next/link";
import { getYears } from "../../../lib/news-opr";
import { DUMMY_NEWS  } from "../../../news-dummy-data";



export default function ArchivePage(){
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