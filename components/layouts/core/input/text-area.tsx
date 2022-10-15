import { FunctionComponent, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const TextArea: FunctionComponent<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
    return (
        <>
            <textarea
                {...props}
                className={
                    `
                    relative

                    border-black
                    border-solid
                    border-2

                    rounded-md


                    px-2 py-2
                    ${props.className}
                    `
                }/>
        </>
    );
}

export default TextArea;