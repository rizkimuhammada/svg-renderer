export type Paths = {
    name?: string;
    show?: boolean;
    style: {
        strokeWidth: string;
        stroke: string;
        fill: string;
    };
    path: (["M", string, string] | ["L", string, string])[];
}[];
/**
 * Sets up the SVG renderer: initializes ResizeObserver, transition & animation listeners,
 * and renders SVG paths based on parent size changes.
 *
 * @param params - Object containing the target SVG element and Paths data.
 * @returns An object with `destroy` function to clean up observers.
 */
declare function setupSvgRenderer({ el, paths, enableBackdropBlur, }: {
    el: SVGSVGElement & {
        render?: () => void;
    };
    paths: Paths;
    enableBackdropBlur?: boolean;
}): {
    /**
     * Disconnects the ResizeObserver and cleans up listeners.
     */
    destroy: () => void;
};
export { setupSvgRenderer };
