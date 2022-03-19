/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
import { JimuSymbol, JimuPolygonSymbol } from './index';
interface Props {
    intl?: IntlShape;
    symbol?: JimuPolygonSymbol;
    onSymbolChanged: (symbol: JimuSymbol) => void;
}
interface States {
    apiLoaded: boolean;
    currentIndex: number;
}
export declare class PolygonSymbolList extends React.PureComponent<Props, States> {
    jsonUtils: typeof __esri.jsonUtils;
    constructor(props: any);
    componentDidMount(): void;
    handleSymbolSelected: (index: number, symbol: any) => void;
    renderPolygonSymbolList: () => JSX.Element[];
    getPolygonSymbolParamsSetting: () => JSX.Element;
    onOpacityInputChanged: (value: any) => void;
    updateSymbolOutLineWeight: (value: any) => void;
    updateSymbolOutLineColor: (color: string) => void;
    convertSymbolColorToColorPickerValue: (symbolColor: __esri.Color) => string;
    updateSymbolFillColor: (color: string) => void;
    getOpacityInSymbol: () => number;
    updateSymbolOpacity: (value: any) => void;
    render(): JSX.Element;
}
export {};
