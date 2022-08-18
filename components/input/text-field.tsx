import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, InputHTMLAttributes } from "react";

type TextFieldAttributes = {
    icon?: IconDefinition
} & InputHTMLAttributes<HTMLInputElement>

const TextField: FunctionComponent<TextFieldAttributes> = (props) => {
    return (
        <div
            className="
                flex flex-row
            "
        >
            {
                props.icon ? <div
                    className="
                    relative
                    
                    flex 
                    justify-center items-center

                    px-3
                    
                    rounded-l-md

                    border-black
                    border-solid
                    border-2

                    bg-stone-300
                    
                    -right-1
                "
                >
                    <FontAwesomeIcon icon={props.icon!} />
                </div> : <div />
            }
            <input
                {...props}
                className={
                    `
                h-10

                border-black
                border-solid
                border-2

                ${props.icon ? "rounded-r-md" : "rounded-md"
                    }

                px-2
                ${props.className}
                `
                }
                type={props.type ?? "text"} />
        </div>
    )
}


export default TextField