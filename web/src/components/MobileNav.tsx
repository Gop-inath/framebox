import { useState } from "react";
import { Menu, X } from "lucide-react";

function MobileNav() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <nav className="h-16 bg-navbar flex justify-between items-center xl:px-28 lg:px-20 md:px-16 sm:px-10 px-8 ">

            {/* LOGO */}
            <h2 className="font-bebas text-primary text-2xl cursor-pointer">FRAMEBOX</h2>

            {/* MENU */}
            {isOpen ?
                <X className="transition-colors duration-200 text-subtle hover:text-heading z-40" onClick={() => setIsOpen(false)} />
                :
                <Menu className="transition-colors duration-200 text-subtle hover:text-heading z-40" onClick={() => setIsOpen(true)} />
            }

            {/* SIDE BAR AND THE NAV ITEMS */}
            {isOpen && (
                <div className={`fixed z-30 right-0 top-0 h-screen w-3/4 bg-navbar transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                    <ul className="transition-colors duration-300 text-md h-screen text-subtle font-sora flex flex-col justify-center items-center gap-12 xl:gap-8">
                        <li className="transition-colors duration-300 hover:text-heading">Films</li>
                        <li className="transition-colors duration-300 hover:text-heading">Create Account</li>
                        <li className="transition-colors duration-300 hover:text-heading">Sign in</li>
                    </ul>
                </div>)}

            {/* BLUR OVERLAY */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm z-20"
                    onClick={() => setIsOpen(false)}
                />
            )}

        </nav>


    );
}

export default MobileNav;