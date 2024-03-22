/// <reference types="google.maps" />
import React, { PropsWithChildren } from 'react';
/**
 * Props for the Info Window Component
 */
export type InfoWindowProps = google.maps.InfoWindowOptions & {
    onCloseClick?: () => void;
    anchor?: google.maps.Marker | google.maps.marker.AdvancedMarkerElement | null;
};
/**
 * Component to render a Google Maps Info Window
 */
export declare const InfoWindow: (props: PropsWithChildren<InfoWindowProps>) => React.JSX.Element;
