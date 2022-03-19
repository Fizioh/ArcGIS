/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, ImmutableObject, IMJimuMapViewInfo, ImmutableArray } from 'jimu-core';
import { JimuLayerView } from '../views';
/**
 * @ignore
 * The JimuLayerViewInfo
 */
export interface JimuLayerViewInfo {
    jimuMapViewId?: string;
    jimuLayerId?: string;
    rootJimuLayerId?: string;
    dataSourceId?: string;
    rootDataSourceId?: string;
}
export declare type IMJimuLayerViewInfo = ImmutableObject<JimuLayerViewInfo>;
/**
 * @ignore
 * The JimuLayerViewComponent component props
 */
export interface JimuLayerViewComponentProps {
    /**
     * The array of the map widget id selected from the MapWidgetSelector component
     */
    useMapWidgetIds: ImmutableArray<string>;
    /**
     * The jimuLayerViewInfo selected from the JimuLayerViewSelector component
     */
    jimuLayerViewInfo: IMJimuLayerViewInfo;
    /**
     * The function will be called when the JimuLayerView instance is created.
     */
    onLayerViewCreated?: (jimuLayerView: JimuLayerView) => void;
    /**
     * The function will be called when the JimuLayerView instance creation fails.
     */
    onLayerViewFailed?: (err: any) => void;
}
interface ExtraProps {
    viewInfos: ImmutableObject<{
        [jimuMapViewId: string]: IMJimuMapViewInfo;
    }>;
}
declare class _JimuLayerViewComponent extends React.PureComponent<JimuLayerViewComponentProps & ExtraProps, unknown> {
    componentDidMount(): void;
    componentDidUpdate(prevProps: JimuLayerViewComponentProps & ExtraProps, prevState: unknown): void;
    getJimuMapViewIdsFromUseMapWidgetIds: (useMapWidgetIds: ImmutableArray<string>, infos: ImmutableObject<{
        [jimuMapViewId: string]: IMJimuMapViewInfo;
    }>, rootDataSourceId: string) => string[];
    getJimuMapViewIdsFromMapWidgetId: (mapWidgetId: string, infos: ImmutableObject<{
        [jimuMapViewId: string]: IMJimuMapViewInfo;
    }>, rootDataSourceId: string) => string[];
    render(): any;
}
/**
 * @ignore
 * A react component that makes it easy to use JimuLayerView from the map widget.
 * In most cases, you can pass on `useMapWidgetIds`, `jimuLayerViewInfo`, and use `onLayerViewCreated`, `onLayerViewFailed` to get callback from the JimuLayerViewComponent.
 */
export declare const JimuLayerViewComponent: ReactRedux.ConnectedComponent<typeof _JimuLayerViewComponent, ReactRedux.Omit<React.ClassAttributes<_JimuLayerViewComponent> & JimuLayerViewComponentProps & ExtraProps, "viewInfos"> & JimuLayerViewComponentProps>;
export {};
