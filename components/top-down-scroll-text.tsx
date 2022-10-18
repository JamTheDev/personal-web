import { FunctionComponent, HTMLAttributes, useEffect } from "react";

type TopDownScrollTextAttributes = {
    words?: string[],
    duration?: number,
    easing?: string
} & HTMLAttributes<HTMLDivElement>;

const TopDownScrollText: FunctionComponent<TopDownScrollTextAttributes> = (props) => {
    
    useEffect(() => {

    });
    
    return (
        <div className="relative flex flex-col overflow-hidden h-24">
            {
                props.words?.map((val, index) => 
                    <span className={props.className} key={index}>{val}</span>
                )
            }
        </div>
    )
}

export default TopDownScrollText;