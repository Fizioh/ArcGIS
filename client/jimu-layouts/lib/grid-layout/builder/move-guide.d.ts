import { IMLayoutJson } from 'jimu-core';
export declare const SNAP_TOLERANCE = 5;
export interface GridLines {
    pt: number;
    pl: number;
    rowGap: number;
    colGap: number;
    rowHeight: number;
    colWidth: number;
    rows: number;
    cols: number;
}
export interface RndDelta {
    x: number;
    y: number;
    w: number;
    h: number;
}
export declare function getGridlinesOfLayout(layout: IMLayoutJson, containerWidth: number, containerHeight: number): GridLines;
export declare function calItemSize(size: number, gridSize: number, gap: number, max: number): number;
export declare function calItemStartWithSize(start: number, // in px
span: number, // num of rows/cols
itemSize: number, // in px
gridSize: number, // in px
gap: number, // in px
max: number): number;
export declare function calItemStartWithSpan(start: number, // in px
span: number, // num of rows/cols
gridSize: number, // in px
gap: number, // in px
max: number): number;
export declare function moveGuide(hasSameLayoutId: boolean, draggingBound: DOMRect, delta: RndDelta, gridlines: GridLines): {
    rect: Partial<DOMRect>;
    startX: number;
    startY: number;
    spanX: number;
    spanY: number;
};
