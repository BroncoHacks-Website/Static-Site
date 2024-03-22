/// <reference types="google.maps" />
import React, { PropsWithChildren, ReactElement } from 'react';
import { APILoadingStatus } from '../libraries/api-loading-status';
type ImportLibraryFunction = typeof google.maps.importLibrary;
type GoogleMapsLibrary = Awaited<ReturnType<ImportLibraryFunction>>;
type LoadedLibraries = {
    [name: string]: GoogleMapsLibrary;
};
export interface APIProviderContextValue {
    status: APILoadingStatus;
    loadedLibraries: LoadedLibraries;
    importLibrary: typeof google.maps.importLibrary;
    mapInstances: Record<string, google.maps.Map>;
    addMapInstance: (map: google.maps.Map, id?: string) => void;
    removeMapInstance: (id?: string) => void;
    clearMapInstances: () => void;
}
export declare const APIProviderContext: React.Context<APIProviderContextValue | null>;
export type APIProviderProps = {
    /**
     * apiKey must be provided to load the Google Maps JavaScript API. To create an API key, see: https://developers.google.com/maps/documentation/javascript/get-api-key
     * Part of:
     */
    apiKey: string;
    /**
     * A custom id to reference the script tag can be provided. The default is set to 'google-maps-api'
     * @default 'google-maps-api'
     */
    libraries?: Array<string>;
    /**
     * A specific version of the Google Maps JavaScript API can be used.
     * Read more about versioning: https://developers.google.com/maps/documentation/javascript/versions
     * Part of: https://developers.google.com/maps/documentation/javascript/url-params
     */
    version?: string;
    /**
     * Sets the map to a specific region.
     * Read more about localizing the Map: https://developers.google.com/maps/documentation/javascript/localization
     * Part of: https://developers.google.com/maps/documentation/javascript/url-params
     */
    region?: string;
    /**
     * Use a specific language for the map.
     * Read more about localizing the Map: https://developers.google.com/maps/documentation/javascript/localization
     * Part of: https://developers.google.com/maps/documentation/javascript/url-params
     */
    language?: string;
    /**
     * auth_referrer_policy can be set to 'origin'.
     * Part of: https://developers.google.com/maps/documentation/javascript/url-params
     */
    authReferrerPolicy?: string;
    /**
     * A function that can be used to execute code after the Google Maps JavaScript API has been loaded.
     */
    onLoad?: () => void;
};
/**
 * Component to wrap the Google Maps React components and load the Google Maps JavaScript API
 */
export declare const APIProvider: (props: PropsWithChildren<APIProviderProps>) => ReactElement | null;
export {};
