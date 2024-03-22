import { APILoadingStatus } from './api-loading-status';
export type ApiParams = {
    key: string;
    v?: string;
    language?: string;
    region?: string;
    libraries?: string;
    solutionChannel?: string;
    authReferrerPolicy?: string;
};
declare global {
    interface Window {
        __googleMapsCallback__?: () => void;
        gm_authFailure?: () => void;
    }
}
/**
 * A GoogleMapsApiLoader to reliably load and unload the Google Maps JavaScript API.
 *
 * The actual loading and unloading is delayed into the microtask queue, to
 * allow using the API in an useEffect hook, without worrying about multiple API loads.
 */
export declare class GoogleMapsApiLoader {
    static loadingStatus: APILoadingStatus;
    static serializedApiParams?: string;
    /**
     * Loads the Google Maps API with the specified parameters.
     * Since the Maps library can only be loaded once per page, this will
     * produce a warning when called multiple times with different
     * parameters.
     *
     * The returned promise resolves when loading completes
     * and rejects in case of an error or when the loading was aborted.
     */
    static load(params: ApiParams, onLoadingStatusChange: (status: APILoadingStatus) => void): Promise<void>;
    private static serializeParams;
    private static initImportLibrary;
}
