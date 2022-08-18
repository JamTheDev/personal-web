import { AppProps } from "next/app";
import { FunctionComponent } from "react";

type ArrowProps = HTMLDivElement & {
    children: React.ReactNode
}

const ArrowTimeline: FunctionComponent<ArrowProps> = ({ children }) => {
    return (
        <>
            <div className="w-full h-44 flex flex-col">
                {children}
            </div>
        </>
    )
}

export const ArrowItem: FunctionComponent<ArrowProps> = ({ children }) => {
    return (
        <div className="h-48">

        </div>
    )
}

export default ArrowTimeline