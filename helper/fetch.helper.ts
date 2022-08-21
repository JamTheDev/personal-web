/**
 * 
 * @param endpoint Endpoint to fetch
 * @param callback Called after endpoint(s) are finished being retrieved. Will also return encountered errors and it's response.
 * @returns Promise<any>
 */
export async function get(endpoint: string | string[], callback?: (errors: Array<Response>) => void): Promise<any> {

    let responses: Response | Array<Response> = [];
    let errorResponses: Array<Response> = [];

    if (Array.isArray(endpoint)) {

        await new Promise<void>((resolve, _) => {
            endpoint.forEach(async (val, index) => {
                const response = await fetch(val, {
                    method: "GET"
                });

                if (response && response.status == 200) {
                    (responses as Array<Response>).push(response);
                }
                else {
                    errorResponses.push(response);
                }

                if (index == endpoint.length - 1) {
                    if (errorResponses.length) {
                        callback?.(errorResponses);
                    }
                    resolve();
                }
            });
        });

        return responses;
    }

    responses = await fetch((endpoint as string), { method: "GET" });
    return responses;
}

export const post = (endpoint: string | string[]) => {

}

export const put = (endpoint: string | string[]) => {

}

export const _delete = (endpoint: string | string[]) => {

}