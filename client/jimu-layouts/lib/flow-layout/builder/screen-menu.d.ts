/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMThemeVariables, BrowserSizeMode } from 'jimu-core';
interface Props {
    itemIndex: number;
    activeScreenIndex: number;
    total: number;
    screenGroupId: string;
    layoutId: string;
    layoutItemId: string;
    hasPanel: boolean;
    theme: IMThemeVariables;
    browserSizeMode: BrowserSizeMode;
    formatMessage: (id: string) => string;
}
export declare function _ScreenGroupMenu(props: Props): jsx.JSX.Element;
export declare const ScreenGroupMenu: React.FunctionComponent<Pick<Props, "browserSizeMode" | "layoutId" | "layoutItemId" | "screenGroupId" | "formatMessage" | "total" | "itemIndex" | "activeScreenIndex" | "hasPanel"> & {
    theme?: IMThemeVariables;
}>;
export {};
