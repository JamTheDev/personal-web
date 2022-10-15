import { FunctionComponent, HTMLAttributes, ReactNode, useState } from "react";
import ErrorFallback from "../core/fallbacks/error-fallback";
import WaitingFallback from "../core/fallbacks/waiting-fallback";

type FetchAttributes = {
    errorFallback?: ReactNode
    waitingFallback?: ReactNode
    children?: ReactNode
    urls?: Array<{ urlName: string, endpoint: string }>
} & HTMLAttributes<HTMLDivElement>

enum FetchState {
    IDLE,
    LOADING,
    LOADED,
    FAILED
}


/**
 * A fetch wrapper for react that safely handles HTTP/s requests with a
 * fallback / wait component.
 * @returns Component
 */
const Fetch: FunctionComponent<FetchAttributes> = (props) => {

    const [fetchState, changeFetchState] = useState(FetchState.LOADING);
    let data: Array<{ key: string, value: any }> = [];

    if (!props.urls) {
        changeFetchState(FetchState.FAILED);
    }

    props.urls?.forEach(async (val, index) => {
        try {
            const response = await fetch(val.endpoint, { method: 'GET' })

            if (response.status != 200) {
                changeFetchState(FetchState.FAILED);
                return;
            }
    
            data.push({
                "key": val.urlName,
                "value": (await response.json())
            })
    
            console.log("pushed data")
    
            if (index == props.urls!.length - 1) {
                changeFetchState(FetchState.LOADED);
            }
        } catch {
            changeFetchState(FetchState.FAILED)
        }

        
    })

    switch (fetchState) {
        case FetchState.FAILED:
            return (
                <>
                    {
                        props.errorFallback ?? <ErrorFallback />
                    }
                </>
            );
        case FetchState.LOADING:
            return <WaitingFallback />
        case FetchState.LOADED:
            return <>{props.children}</>
        default:
            return <WaitingFallback />

    }
}

export default Fetch