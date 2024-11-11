

export default function Header(){
    return(
        <header className=" h-[85px] bg-[#FFFFFF]
         drop-shadow-[0_0px_3px_rgba(117,195,16,0.5)] ">
          <div className="flex item-center 
          justify-between h-full px-4 sm:p6  md:px-8 lg:mx-auto xl:px-4 max-w-7x1">

            <div className="flex gap-2 ">
                <h1 className=" text-[#75C310] font-bold text.[24px]">website routing nested</h1>
                <span className="text-[#000000] font-bold text-[24px]">portfolio</span>

            </div>
            <nav className=" h-[44.54px] ">
            <ul className="flex h-full w-full items-center justify-between gap-[46px]  text-[#75C310] text-[20px] font-medium">
                <li>Home</li>
                <li>About</li>
                <li>portfolio</li>
                <li>contant</li>
             </ul>
            
            </nav>
           </div>
            </header>
    )
}