/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IntlShape, IMThemeVariables } from 'jimu-core';
import { BackgroundStyle, FillType, ImageParam } from 'jimu-ui';
export interface BackgroundSettingProps {
    /**
     * Including the background color, background image, and the fill type of background image
     */
    background?: BackgroundStyle;
    onChange?: (background: BackgroundStyle) => void;
    className?: string;
    style?: any;
}
interface ExtraProps {
    intl?: IntlShape;
    theme2?: IMThemeVariables;
}
export declare class _BackgroundSetting extends React.PureComponent<BackgroundSettingProps & ExtraProps> {
    fileInput: React.RefObject<any>;
    static defaultProps: Partial<BackgroundSettingProps & ExtraProps>;
    constructor(props: any);
    openBrowseImage: (imageParam: ImageParam) => void;
    _onPositionChange: (e: any) => void;
    _onColorChange: (color: string) => void;
    translate: (id: string, values?: {
        [key: string]: any;
    }) => string;
    getFillType: () => {
        value: FillType;
        label: string;
    }[];
    render(): jsx.JSX.Element;
}
/**
 * A react component for setting background style (background-color, background-image)
 */
export declare const BackgroundSetting: import("@emotion/styled").StyledComponent<Pick<Omit<any, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, string | number | symbol> & {
    theme?: IMThemeVariables;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export {};
