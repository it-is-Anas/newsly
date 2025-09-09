import Image from 'next/image';
import notFonudImg from '../public/system/Webinar-pana.png';


export default function NotFoundPage(){
    return <div className="w-[100%] h-[calc(100vh-2.8em)] flex flex-col items-center justify-center">
        <Image className='w-[20em] h-[18em]' src={notFonudImg} alt='Not found img' ></Image>
        <h1 className="font-[600] text-[1.4em]">Not Found 404</h1>
        <h4 className="">Sorry we are sorry , please try again later !</h4>
    </div>;
}