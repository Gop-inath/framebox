import { Search } from "lucide-react";
import { useState } from "react";


function DesktopNav() {
    const [search, setSearch] = useState<string>("");

    return (
        <nav className="h-16 bg-navbar flex justify-between items-center xl:px-28 lg:px-20 md:px-16 sm:px-10 px-8 ">

            {/* LOGO */}
            <h2 className="font-bebas text-primary text-3xl cursor-pointer">FRAMEBOX</h2>

            {/* OPTIONS */}
            <ul className="transition-colors duration-300 text-md text-subtle font-sora flex gap-8 xl:gap-8">
                <li className="transition-colors duration-300 hover:text-heading">Films</li>
                <li className="transition-colors duration-300 hover:text-heading">Create Account</li>
                <li className="transition-colors duration-300 hover:text-heading">Sign in</li>
            </ul>

            {/* SEARCH BAR */}
            <div className="relative group">
                <Search className="absolute transition-colors duration-300 text-white/60 size-5 top-1 left-2 focus:text-primary group-hover:text-subtle group-focus-within:text-subtle" />
                <input className="transition-colors duration-300 bg-white/10 focus:bg-white focus:text-subtle hover:bg-white hover:text-subtle text-body focus:outline-none rounded-2xl h-7 pl-8 pr-4"
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        console.log(search);
                    }} />
            </div>



        </nav>
    );
}

export default DesktopNav;