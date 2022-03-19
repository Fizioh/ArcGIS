/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
import { JimuSymbol } from '../index';
interface SymbolPreviewerProps {
    intl?: IntlShape;
    symbol?: JimuSymbol;
}
export declare class SymbolPreviewer extends React.PureComponent<SymbolPreviewerProps, unknown> {
    render(): JSX.Element;
}
export {};
