/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables } from 'jimu-core';
import { ButtonSize } from 'jimu-ui';
import { JimuSymbol } from '../symbol-list/index';
interface SymbolItemProps {
    symbol?: JimuSymbol;
    index?: number;
    isActive?: boolean;
    onClick?: (index: number, symbol?: JimuSymbol) => void;
    isUsedForPreview?: boolean;
    isInnerPreviewBtn?: boolean;
    className?: string;
    btnSize?: ButtonSize;
    a11yNeedFocus?: boolean;
    btnRef?: any;
}
interface ExtraProps {
    theme: ThemeVariables;
}
interface States {
    symbolLoading: boolean;
    apiLoaded: boolean;
}
export declare class _SymbolItem extends React.PureComponent<SymbolItemProps & ExtraProps, States> {
    btnContainerRef: HTMLElement;
    btnRef: HTMLElement;
    symbolUtils: typeof __esri.symbolUtils;
    renderPreviewHTMLPromise: Promise<HTMLElement>;
    OUTER_PREVIEW_BTN_SIZE: number;
    INNER_PREVIEW_BTN_SIZE: number;
    SYMBOL_IN_LIST_SIZE: number;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: SymbolItemProps, prevState: unknown): void;
    componentWillUnmount(): void;
    onHandleSymbolClick: () => void;
    render(): jsx.JSX.Element;
}
export declare const SymbolItem: React.FunctionComponent<Pick<SymbolItemProps & ExtraProps, keyof SymbolItemProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}>;
declare const _default: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default _default;
