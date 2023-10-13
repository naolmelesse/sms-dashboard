import { notices } from "@/lib/dummy-data"

export default function Notices(){
    return(
    <div>
        <h3 className="text-2xl md:text-3xl py-1 px-2 lg:py-3 text-center lg:text-left mb-5">Notices</h3>
        <div className="">
            {notices.map((notice, index) => 
            <div key={index} className="py-2 flex items-center mb-1 justify-between bg-slate-100 px-2 border-l-4 border-[#232D3F]">
                <p className="font-medium text-lg">{notice.title}</p>
                <p>{notice.date}</p> 
            </div> )}
        </div>
    </div>
    )
}