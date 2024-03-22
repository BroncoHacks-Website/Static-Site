/// <reference types="google.maps" />
import { PropsWithChildren } from 'react';
/**
 * Props for the Pin component
 */
export type PinProps = google.maps.marker.PinElementOptions;
/**
 * Component to render a google maps marker Pin View
 */
export declare const Pin: (props: PropsWithChildren<PinProps>) => import("react").ReactPortal;
