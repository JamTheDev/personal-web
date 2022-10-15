import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import Modal, { ModalClose } from "../default/modals/modal";
import anime from "animejs";

const Navbar: FunctionComponent = () => {
    const router = useRouter();

    const [modalState, changeModalState] = useState(false);
    const [width, setWindowWidth] = useState(0);
    const [buttonsEnabled, setEnabledButtonsState] = useState(false);

    useEffect(() => {
        setWindowWidth(window.screen.width);

        window.onresize = () => {
            setWindowWidth(window.screen.width);
        }
    })

    const Options: FunctionComponent = () => {
        return (
            <>
                <div className="group nav-btn lg:p-0 md:p-0 p-2">
                    <input type="button" className="relative cursor-pointer px-4" value="Blog" onClick={() => router.replace("/articles")} />
                    <div className="group-hover:w-full w-0 transition-all h-[1px] bg-black"></div>
                </div>

                <div className="group nav-btn lg:p-0 md:p-0 p-2">
                    <input type="button" className="cursor-pointer px-4" value="Projects" onClick={() => changeModalState(true)} />
                    <div className="group-hover:w-full w-0 transition-all h-[1px] bg-black"></div>
                </div>

                <div className="group nav-btn lg:p-0 md:p-0 p-2">
                    <input type="button" className="cursor-pointer px-4" value="About Me" onClick={() => changeModalState(true)} />
                    <div className="group-hover:w-full w-0 transition-all h-[1px] bg-black"></div>
                </div>
            </>
        )
    }

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

                {
                    width > 600
                        ? <div className="col-span-1 flex justify-end">
                            <Options />
                        </div>
                        : <div className="flex justify-end">
                            <FontAwesomeIcon icon={faBars} size='1x' onClick={() => setEnabledButtonsState(val => !val)} />
                        </div>
                }

                {
                    width < 600 && buttonsEnabled
                        ? <div className="col-span-5 mobile-navbar bg-white drop-shadow-md mt-4 gap-2">
                            <Options />
                        </div>
                        : <></>
                }
            </nav>
            { /** Serves as the relative spacing of the navbar, 
             * to prevent the main content from going under
             * the navigation bar. 
             */}
            <div className="h-12 w-full " />
        </>
    );
}


export default Navbar;