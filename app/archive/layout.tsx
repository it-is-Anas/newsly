

export default function ArchiveLayout({archive,latest}){
    return <div className="">
        <div className="font-[700] text-[1.5em]">Archive Page </div>
        <section className="">
            {archive}
        </section>
        <div className="w-[100%] h-[.2em] rounded-[10px] bg-[gray]"></div>
        <section className="">
            {latest}
        </section>
    </div>;
}