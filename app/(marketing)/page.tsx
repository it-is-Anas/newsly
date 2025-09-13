

import Link from 'next/link';
import logo from '../../public/images/news/Online world-bro.png';

export default function WorkSpace(){
  return (
    <div className="text-center">
      <div className="w-[100%] flex items-center justify-center ">
        <img src={logo.src} className='w-[15em] h-[15em]' alt="" />
      </div>
      <div className="w-[70%] mx-[auto] p-[10px]">
        <h1 className="text-[2em] py-[.5em] font-[700]">A News site for the next generations </h1>
        <p className="text-[1.2em] py-[.5em] font-[500] ">next news is here to deliver your her bye bye</p>
        <p className="text-[1.2em] py-[.5em] font-[500]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam alias esse expedita? Dicta excepturi ex laborum eos commodi, dignissimos totam ipsam magnam odit officia iure temporibus officiis ab illo!</p>
        <p className="text-[1.2em] py-[.5em] font-[500]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam alias esse expedita? Dicta excepturi ex laborum eos commodi, dignissimos totam ipsam magnam odit officia iure temporibus officiis ab illo!</p>
        <Link className='bg-[#eee] p-[10px] m-[1em]  rounded-[5px]' href='/news' >Read latest news</Link>
      </div>
    </div>
  );
}