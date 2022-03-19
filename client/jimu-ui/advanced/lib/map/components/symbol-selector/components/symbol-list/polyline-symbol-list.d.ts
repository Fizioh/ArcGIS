/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
import { JimuSymbol, JimuPolylineSymbol } from './index';
interface Props {
    intl?: IntlShape;
    symbol?: JimuPolylineSymbol;
    onSymbolChanged: (symbol: JimuSymbol) => void;
}
interface States {
    apiLoaded: boolean;
    currentIndex: number;
}
export declare class PolylineSymbolList extends React.PureComponent<Props, States> {
    jsonUtils: typeof __esri.jsonUtils;
    constructor(props: any);
    componentDidMount(): void;
    handleSymbolSelected: (index: number, symbol: any) => void;
    onSelectChanged: (e: any) => void;
    updateSymbolLineWidth: (value: any) => void;
    getOpacityInSymbol: () => number;
    updateSymbolOpacity: (value: any) => void;
    convertSymbolColorToColorPickerValue: (symbolColor: __esri.Color) => string;
    updateSymbolFillColor: (color: string) => void;
    renderPolylineSymbolList: () => JSX.Element[];
    getPolylineSymbolParamsSetting: () => JSX.Element;
    onOpacityInputChanged: (value: any) => void;
    render(): JSX.Element;
}
export {};
