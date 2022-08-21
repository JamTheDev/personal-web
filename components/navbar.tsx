import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import Modal, { ModalClose } from "./modals/modal";

const Navbar: FunctionComponent = () => {
    const router = useRouter();

    const [modalState, changeModalState] = useState(false);

    return (
        <>
            <Modal opened={modalState} onHide={() => changeModalState(false)} className="p-3">
                <ModalClose />

                <div className="flex flex-col justify-content items-center gap-3">
                    <span className="font-bold text-4xl">Oops! :(</span>
                    <span className="text-center p-2"> This page is not available yet. Come back later! 
                        <span className="font-bold"> (Tip: this site is still in beta)</span>
                    </span>
                </div>
            </Modal>
            <nav className="fixed z-40 bg-white grid grid-cols-2 items-center w-full h-12 lg:px-8 px-4 drop-shadow-lg">
                <div className="col-span-1">
                    <span className="font-bold text-2xl">Jam</span>
                </div>

                <div className="col-span-1 flex justify-end ">
                    <div className="group">
                        <input type="button" className="relative cursor-pointer px-4" value="Blog" onClick={() => changeModalState(true)} />
                        <div className="group-hover:w-full w-0 transition-all h-[1px] bg-black"></div>
                    </div>

                    <div className="group">
                        <input type="button" className="cursor-pointer px-4" value="Projects" onClick={() => changeModalState(true)}/>
                        <div className="group-hover:w-full w-0 transition-all h-[1px] bg-black"></div>
                    </div>

                    <div className="group">
                        <input type="button" className="cursor-pointer px-4" value="About Me" onClick={() => changeModalState(true)}/>
                        <div className="group-hover:w-full w-0 transition-all h-[1px] bg-black"></div>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Navbar;