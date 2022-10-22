import { FunctionComponent, HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { clearTimeout } from "timers";
import ErrorFallback from "../core/fallbacks/error-fallback";
import WaitingFallback from "../core/fallbacks/waiting-fallback";

type FetchAttributes = {
    errorFallback?: ReactNode
    waitingFallback: ReactNode
    onError?: (e: any) => void
    children: (v: any) => ReactNode
    urls: Array<{ urlName: string, endpoint: string }>
}

enum FetchState {
    IDLE,
    LOADING,
    LOADED,
    FAILED
}

type FetchResponse = {
    data: any
    url: string
    state: FetchState
}

// TODO: Identify errors / discrepancies for the fetch component.
/**
 * A fetch wrapper for react that safely handles HTTP/s requests with a
 * fallback / wait component.
 * @returns Component
 */
const Fetch: FunctionComponent<FetchAttributes> = (props) => {

    const [fetchData, setFetchData] = useState({} as any);
    const [fetchState, setFetchState] = useState(FetchState.IDLE);

    const request = async () => {

        let pollCount: number = 0;
        const poll = setInterval(() => {
            const responses: Map<string, FetchResponse> = new Map([]);

            if (!props.urls) {
                setFetchState(FetchState.FAILED);
                return;
            }

            setFetchState(FetchState.LOADING);

            props.urls.map(async (url, index) => {

                if (fetchState == FetchState.LOADED) {
                    clearInterval(poll);
                    return;
                }

                if (pollCount > 3) {
                    clearInterval(poll);
                    setFetchState(FetchState.FAILED);
                    return;
                }

                const response = await fetch(url.endpoint);

                if (!response || !response.ok) {
                    setFetchState(FetchState.FAILED);
                    return;
                }

                const jsonResponse = await response.json();

                console.log(jsonResponse);

                responses.set(url.urlName, {
                    data: jsonResponse,
                    state: FetchState.LOADED,
                    url: url.urlName
                });

                if (index == props.urls.length - 1) {
                    console.log(responses);
                    setFetchData(responses);
                    setFetchState(FetchState.LOADED);
                }

                pollCount++;
            });

        }, 1500);
    }

    useEffect(() => {
        request();
    }, []);

    return <>
        {
            fetchState == FetchState.LOADING ? props.waitingFallback : props.children?.(fetchData)
        }
    </>
}

export default Fetch;