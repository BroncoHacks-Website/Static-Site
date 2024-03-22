/// <reference types="google.maps" />
import React from 'react';
import type { Ref } from 'react';
type MarkerEventProps = {
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onDrag?: (e: google.maps.MapMouseEvent) => void;
    onDragStart?: (e: google.maps.MapMouseEvent) => void;
    onDragEnd?: (e: google.maps.MapMouseEvent) => void;
    onMouseOver?: (e: google.maps.MapMouseEvent) => void;
    onMouseOut?: (e: google.maps.MapMouseEvent) => void;
};
export type MarkerProps = google.maps.MarkerOptions & MarkerEventProps;
export type MarkerRef = Ref<google.maps.Marker | null>;
/**
 * Component to render a Google Maps Marker on a map
 */
export declare const Marker: React.ForwardRefExoticComponent<google.maps.MarkerOptions & MarkerEventProps & React.RefAttributes<google.maps.Marker>>;
export declare function useMarkerRef(): readonly [(m: google.maps.Marker | null) => void, google.maps.Marker | null];
export {};
