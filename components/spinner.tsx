import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

type SpinnerAttributes = {
    children?: ReactNode
    size?: string
} & HTMLAttributes<HTMLDivElement>

const Spinner: FunctionComponent<SpinnerAttributes> = (props) => {
    return (
        <div className={
            `
            flex items-center 
            gap-2
            
            ${props.className}
            `
        }>
            <span className={
                `
                h-full w-full 
                rounded-full 
                border-8 border-t-blue-300 
                animate-spin
                `
            }></span>
            { props.children }
        </div>
    )
}

export default Spinner;