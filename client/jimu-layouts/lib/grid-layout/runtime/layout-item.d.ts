/// <reference types="react" />
/** @jsx jsx */
import { React, LayoutItemJson } from 'jimu-core';
interface Props {
    layoutId: string;
    layoutItem: LayoutItemJson;
    numOfRows: number;
    numOfCols: number;
}
export declare class GridLayoutItem extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export {};
