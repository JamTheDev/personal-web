import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

type ButtonAttributes = {
    prefixIcon?: IconDefinition,
    suffixIcon?: IconDefinition,
    globalClass?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FunctionComponent<ButtonAttributes> = (props) => {

    const roundedType = () => {
        if (props.prefixIcon != null && props.suffixIcon != null) {
            return "rounded-none ";
        }

        if (props.prefixIcon) {
            return "rounded-r-md ";
        }

        if (props.suffixIcon) {
            return "rounded-l-md ";
        }

        return "rounded-md ";
    }

    return (
        <div className="flex flex-row cursor-pointer">
            {
                props.prefixIcon
                    ? <div className={
                        `
                    relative
                    flex 
                    justify-center items-center
                    
                    border-black
                    border-solid
                    border-2

                    rounded-l-md

                    left-1
    
                    px-3 py-2
                    ${props.globalClass}
                    `
                    }>

                        <FontAwesomeIcon icon={props.prefixIcon!} />

                    </div>
                    : <div />
            }

            <button
                {...props}
                className={
                    `
                    w-32

                    text-black

                    border-black
                    border-solid
                    border-2 
                    
                    ${roundedType()}

                    ${props.className}
                    ${props.globalClass}
                    `
                }
                
            >
                {props.value}
            </button>

            {
                props.suffixIcon
                    ? <div className={
                        `
                        relative
                        flex 
                        justify-center items-center
                            
                        border-black
                        border-solid
                        border-2
        
                        right-2

                        rounded-r-md
            
                        px-3 py-2
                        ${props.globalClass}
                        ${props.globalClass}
                        `
                    }>
                        <FontAwesomeIcon icon={props.suffixIcon!} />
                    </div>
                    : <div />
            }

        </div>
    );
}

export default Button;