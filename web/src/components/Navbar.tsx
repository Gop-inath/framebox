import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


function Navbar() {
    const [width, setWidth] = useState(window.innerWidth);

    //   SCREENSIZE HANDLER
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {width >= 768 ? <DesktopNav /> : <MobileNav />}
        </>
    );
}

export default Navbar;