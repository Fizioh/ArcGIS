/// <reference types="react" />
/** @jsx jsx */
import { React, PageJson, ImmutableObject, ReactRedux, BrowserSizeMode, IMThemeVariables, IMHeaderJson, IMFooterJson, IMDialogJson } from 'jimu-core';
interface PageProps {
    dialogId?: string;
    /**
     * store pages that have been rendered
     *
     * Only one page will be visible, all other pages will be hidden
     *  */
    pageStatus: ImmutableObject<{
        [pageId: string]: boolean;
    }>;
}
interface StateToProps {
    pages: ImmutableObject<{
        [pageId: string]: PageJson;
    }>;
    header: IMHeaderJson;
    headerVisible?: boolean;
    footer: IMFooterJson;
    footerVisible?: boolean;
    browserSizeMode: BrowserSizeMode;
    mainSizeMode: BrowserSizeMode;
    splashDialogJson: IMDialogJson;
    isSplashClosed: boolean;
    pageDialogId: string;
    pageDialogJson: IMDialogJson;
    isPageDlgClosed: boolean;
    urlDialogJson: IMDialogJson;
}
declare const _default: ReactRedux.ConnectedComponent<React.FunctionComponent<Pick<PageProps & StateToProps & {
    theme: IMThemeVariables;
}, keyof StateToProps | keyof PageProps> & {
    theme?: IMThemeVariables;
}>, ReactRedux.Omit<Pick<PageProps & StateToProps & {
    theme: IMThemeVariables;
}, keyof StateToProps | keyof PageProps> & {
    theme?: IMThemeVariables;
}, "footer" | "header" | "browserSizeMode" | "mainSizeMode" | "pages" | "headerVisible" | "footerVisible" | "splashDialogJson" | "isSplashClosed" | "pageDialogId" | "pageDialogJson" | "isPageDlgClosed" | "urlDialogJson"> & PageProps>;
export default _default;
