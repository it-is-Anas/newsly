import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader(){
    return (
        <header className="w-[100%] ">
            <ul className="flex justify-between items-center">
                <li className="font-[600] text-[1.4em] px-[5px] py-[5px]">
                    <Link className='' href="/" >Newsly</Link>
                </li>
                <span className="flex items-center  ">
                    <li className="">
                        <NavLink href="/news"  >News</NavLink>
                    </li>
                    <li className="">
                        <NavLink href="/archive"  >archive</NavLink>
                    </li>
                </span>
            </ul>
        </header>
    );
}