/// <reference types="react" />
/** @jsx jsx */
import { React, LayoutItemJson } from 'jimu-core';
interface Pos {
    x: number;
    y: number;
    w: number;
    h: number;
}
interface Props {
    layoutId: string;
    layoutItem: LayoutItemJson;
    numOfRows: number;
    numOfCols: number;
}
interface State {
    delta: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}
export declare class GridLayoutItem extends React.PureComponent<Props, State> {
    isResizing: boolean;
    unitSize: {
        w: number;
        h: number;
    };
    constructor(props: any);
    restrictDelta: (delta: Pos) => void;
    handleResizeStart: (id: string, initWidth: number, initHeight: number) => void;
    handleResizing: (id: string, dx: number, dy: number, dw: number, dh: number) => void;
    handleResizeEnd: (id: string, dx: number, dy: number, dw: number, dh: number) => void;
    render(): JSX.Element;
}
export {};
