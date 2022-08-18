import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
    const router = useRouter();
    return (
        <nav className="fixed z-50 bg-white grid grid-cols-2 items-center w-full h-12 lg:px-8 px-4 drop-shadow-lg">
            <div className="col-span-1">
                <span className="font-bold text-2xl">Jam</span>
            </div>

            <div className="col-span-1 flex justify-end gap-3">
                <input type="button" className="cursor-pointer" value="Blog" />
                <input type="button" className="cursor-pointer" value="Projects" />
                <input type="button" className="cursor-pointer" value="About Me" />
            </div>
        </nav>
    );
}


export default Navbar;