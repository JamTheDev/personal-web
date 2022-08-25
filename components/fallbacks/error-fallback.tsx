import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, HTMLAttributes } from "react";

type ErrorFallbackAttributes = {

} & HTMLAttributes<HTMLDivElement>

const ErrorFallback: FunctionComponent = () => {
    return (
        <div className="
         absolute
         w-full h-full
         
         flex
         flex-col
         justify-center
         items-center
         ">
        
            <FontAwesomeIcon className="text-red-500 p-3" icon={faX} size='5x' />
            <span className="text-center">Oops... an error has occured! <br/> <strong>Try refreshing the page.</strong> </span>
            <span className="text-sm text-stone-400 italic p-2">This site runs on free services, so instances like this can happen.</span>
            <button className="py-2 px-5 bg-purple-400 rounded-md drop-shadow-md text-white" onClick={() => window.location.reload()}>Refresh</button>
        
        </div>
    )
}

export default ErrorFallback