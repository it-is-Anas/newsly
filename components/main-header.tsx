import Link from "next/link";

export default function MainHeader(){
    return (
        <header className="w-[100%] ">
            <ul className="flex justify-between items-center">
                <li className="font-[600] text-[1.4em] px-[5px] py-[5px]">
                    <Link className='' href="/" >Home</Link>
                </li>
                <span className="flex items-center  ">
                    <li className="font-[600] text-[1em] px-[10px] py-[5px] rounded-[5px] hover:bg-[#eee]">
                        <Link className='' href="/news" >News</Link>
                    </li>
                    <li className="font-[600] text-[1em] px-[10px] py-[5px] rounded-[5px] hover:bg-[#eee]">
                        <Link className='' href="/archive" >archive</Link>
                    </li>
                </span>
            </ul>
        </header>
    );
}