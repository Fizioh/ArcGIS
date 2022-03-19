/// <reference types="react" />
/** @jsx jsx */
import { React } from 'jimu-core';
import { WebChart, ChartEvents, ChartOptions } from 'arcgis-charts';
import { GlobalOptions } from './type';
export interface ChartCoreEvents {
    [ChartEvents.DataProcessComplete]?: (event: CustomEventInit) => void;
    [ChartEvents.LegendItemVisibilityChange]?: (event: CustomEventInit) => void;
    [ChartEvents.UpdateComplete]?: (event: CustomEventInit) => void;
    [ChartEvents.RenderingComplete]?: (event: CustomEventInit) => void;
    [ChartEvents.SelectionChange]?: (event: CustomEventInit) => void;
    [ChartEvents.SeriesColorsChange]?: (event: CustomEventInit) => void;
    [ChartEvents.AxesMinMaxChange]?: (event: CustomEventInit) => void;
    [ChartEvents.SelectionComplete]?: (event: CustomEventInit) => void;
    [ChartEvents.TooManySelectedElements]?: (event: CustomEventInit) => void;
    [ChartEvents.BadDataWarningRaise]?: (event: CustomEventInit) => void;
}
export declare type ChartCoreProps = React.HtmlHTMLAttributes<HTMLDivElement> & ChartCoreEvents & {
    config: WebChart;
    options?: ChartOptions;
    globalOptions?: GlobalOptions;
};
declare const ChartCore: React.MemoExoticComponent<React.ForwardRefExoticComponent<React.HtmlHTMLAttributes<HTMLDivElement> & ChartCoreEvents & {
    config: WebChart;
    options?: ChartOptions;
    globalOptions?: GlobalOptions;
} & React.RefAttributes<unknown>>>;
export { ChartCore };
