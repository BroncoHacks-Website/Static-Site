/// <reference types="google.maps" />
import React from 'react';
import type { PropsWithChildren } from 'react';
export interface AdvancedMarkerContextValue {
    marker: google.maps.marker.AdvancedMarkerElement;
}
export declare const AdvancedMarkerContext: React.Context<AdvancedMarkerContextValue | null>;
type AdvancedMarkerEventProps = {
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onDrag?: (e: google.maps.MapMouseEvent) => void;
    onDragStart?: (e: google.maps.MapMouseEvent) => void;
    onDragEnd?: (e: google.maps.MapMouseEvent) => void;
};
export type AdvancedMarkerProps = PropsWithChildren<Omit<google.maps.marker.AdvancedMarkerElementOptions, 'gmpDraggable'> & AdvancedMarkerEventProps & {
    /**
     * className to add a class to the advanced marker element
     * Can only be used with HTML Marker content
     */
    className?: string;
    draggable?: boolean;
}>;
export type AdvancedMarkerRef = google.maps.marker.AdvancedMarkerElement | null;
export declare const AdvancedMarker: React.ForwardRefExoticComponent<Omit<google.maps.marker.AdvancedMarkerElementOptions, "gmpDraggable"> & AdvancedMarkerEventProps & {
    /**
     * className to add a class to the advanced marker element
     * Can only be used with HTML Marker content
     */
    className?: string | undefined;
    draggable?: boolean | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<google.maps.marker.AdvancedMarkerElement>>;
export declare function useAdvancedMarkerRef(): readonly [(m: AdvancedMarkerRef | null) => void, google.maps.marker.AdvancedMarkerElement | null];
export {};
