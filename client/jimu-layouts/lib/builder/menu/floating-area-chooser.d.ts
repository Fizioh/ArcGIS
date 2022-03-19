/// <reference types="react" />
/** @jsx jsx */
import { React, IMLayoutItemJson, IMThemeVariables } from 'jimu-core';
interface Props {
    area?: number;
    theme: IMThemeVariables;
    layoutId: string;
    layoutItem: IMLayoutItemJson;
}
export declare const FloatingAreaChooser: React.FunctionComponent<Pick<Pick<Props, never> & Partial<Pick<Props, keyof Props>> & Partial<Pick<Partial<Props>, never>>, "area" | "layoutId" | "layoutItem"> & {
    theme?: IMThemeVariables;
}>;
export {};
