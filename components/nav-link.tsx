'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({href , children}:{
    href: string,
    children: ReactNode
}){

    const path = usePathname();
    const cls = path === href ? "bg-[#eee]": '';
    return <Link className={'font-[600] text-[1em] px-[10px] py-[5px] rounded-[5px] hover:bg-[#eee] '+cls} href={href} > { children } </Link>;
}