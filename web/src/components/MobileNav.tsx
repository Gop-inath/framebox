import { useState } from "react";
import { Menu, X } from "lucide-react";

function MobileNav() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <nav className="h-16 bg-navbar flex justify-between items-center xl:px-28 lg:px-20 md:px-16 sm:px-10 px-8 ">

            {/* LOGO */}
            <h2 className="font-bebas text-primary text-2xl cursor-pointer">FRAMEBOX</h2>

            {/* MENU */}
            {isOpen ? <Menu className="transition-colors duration-200 text-subtle hover:text-heading" onClick={() => setIsOpen(false)} />
                :
                <X className="transition-colors duration-200 text-subtle hover:text-heading" onClick={() => setIsOpen(true)} />
            }
        </nav>
    );
}

export default MobileNav;