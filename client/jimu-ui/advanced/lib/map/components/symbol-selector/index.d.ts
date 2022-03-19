/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IntlShape, ThemeVariables } from 'jimu-core';
import { ButtonSize } from 'jimu-ui';
import { JimuSymbolType } from './components/symbol-list';
import type { JimuSymbol, JimuPointSymbol, JimuPolylineSymbol, JimuPolygonSymbol } from './components/symbol-list';
export { JimuSymbolType };
export type { JimuSymbol, JimuPointSymbol, JimuPolylineSymbol, JimuPolygonSymbol };
export interface SymbolSelectorProps {
    symbol: JimuSymbol;
    jimuSymbolType: JimuSymbolType;
    btnSize?: ButtonSize;
    className?: string;
    isShowPreviewBtn?: boolean;
    onPointSymbolChanged?: (symbol: JimuPointSymbol) => void;
    onPolylineSymbolChanged?: (symbol: JimuPolylineSymbol) => void;
    onPolygonSymbolChanged?: (symbol: JimuPolygonSymbol) => void;
    onPopperToggle?: (isPopperOpen: any) => void;
}
interface ExtraProps {
    theme: ThemeVariables;
    intl: IntlShape;
}
export declare const _SymbolSelector: React.MemoExoticComponent<(props: SymbolSelectorProps & ExtraProps) => jsx.JSX.Element>;
export declare const SymbolSelector: React.FC<import("react-intl").WithIntlProps<Pick<SymbolSelectorProps & ExtraProps, "intl" | keyof SymbolSelectorProps> & {
    theme?: import("jimu-core").IMThemeVariables;
} & {
    children?: React.ReactNode;
}>> & {
    WrappedComponent: React.ComponentType<Pick<SymbolSelectorProps & ExtraProps, "intl" | keyof SymbolSelectorProps> & {
        theme?: import("jimu-core").IMThemeVariables;
    } & {
        children?: React.ReactNode;
    }>;
};
