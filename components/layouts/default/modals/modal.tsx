import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, FunctionComponent, HTMLAttributes, ReactNode, useContext } from "react";

const ModalContext = createContext({} as ModalAttributes);

// I have no idea what I should name the "prevent closing the modal when bg click" variable feature something
// lol
type ModalAttributes = {
    opened: boolean
    onHide: () => void
    preventDefault?: boolean
    children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

type ModalBackdropAttributes = { children?: ReactNode } & HTMLAttributes<HTMLDivElement>

/*
    ModalBackdrop & ModalBody is both available for export so that people who will
    fork the repository will be able to make their own custom modals with custom features.
*/

export const ModalBackdrop: FunctionComponent<ModalBackdropAttributes> = ({ children }) => {
    const context = useContext(ModalContext);

    return (
        <div className="
        fixed 
        flex justify-center items-center 
        z-50 
        w-full h-full 
        bg-stone-900/50"
            onClick={context.preventDefault ? () => { } : context.onHide}
        >
            {children}
        </div>
    );
}

export const ModalBody: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={
            `
            relative
            bg-white
            rounded-lg
            w-96

            drop-shadow-md
            
            ${props.className}
            `
        }>
            {props.children}
        </div>
    )
}

export const ModalClose: FunctionComponent = () => {
    const context = useContext(ModalContext);
    return (
        <div className="flex justify-end cursor-pointer" onClick={context.onHide}>
            <FontAwesomeIcon icon={faXmark} size="lg" />
        </div>
    )
}


const Modal: FunctionComponent<ModalAttributes> = (props) => {
    return (
        <>
            {
                props.opened
                    ? <ModalContext.Provider value={props} >
                        <ModalBackdrop>
                            <ModalBody className={props.className}>
                                {props.children}
                            </ModalBody>
                        </ModalBackdrop>
                    </ModalContext.Provider>
                    : <div />
            }
        </>
    )
}

export default Modal;