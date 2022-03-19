/// <reference types="seamless-immutable" />
/// <reference types="react" />
/** @jsx jsx */
import { React, ActionSettingProps, ImmutableObject, IMDataSourceInfo, ThemeVariables, Immutable, DataSourceJson, ReactRedux } from 'jimu-core';
import { IMConfig } from './type';
interface StateExtraProps {
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: IMDataSourceInfo;
    }>;
}
interface ExtraProps {
    theme?: ThemeVariables;
}
declare const _default: ReactRedux.ConnectedComponent<React.FunctionComponent<Pick<Pick<ActionSettingProps<IMConfig> & ExtraProps & StateExtraProps, "widgetId" | "theme" | "intl" | "onSettingChange" | "messageType" | "actionId" | "messageWidgetId" | "onDisableDoneBtn" | keyof StateExtraProps> & Partial<Pick<ActionSettingProps<IMConfig> & ExtraProps & StateExtraProps, "config">> & Partial<Pick<{
    config: Immutable.ImmutableObject<{
        messageUseDataSource: any;
        actionUseDataSource: any;
        sqlExprObj: any;
        enabledDataRelationShip: boolean;
    }>;
}, never>>, "widgetId" | "config" | "intl" | "onSettingChange" | "messageType" | "actionId" | "messageWidgetId" | "onDisableDoneBtn" | keyof StateExtraProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}>, ReactRedux.Omit<Pick<Pick<ActionSettingProps<IMConfig> & ExtraProps & StateExtraProps, "widgetId" | "theme" | "intl" | "onSettingChange" | "messageType" | "actionId" | "messageWidgetId" | "onDisableDoneBtn" | keyof StateExtraProps> & Partial<Pick<ActionSettingProps<IMConfig> & ExtraProps & StateExtraProps, "config">> & Partial<Pick<{
    config: Immutable.ImmutableObject<{
        messageUseDataSource: any;
        actionUseDataSource: any;
        sqlExprObj: any;
        enabledDataRelationShip: boolean;
    }>;
}, never>>, "widgetId" | "config" | "intl" | "onSettingChange" | "messageType" | "actionId" | "messageWidgetId" | "onDisableDoneBtn" | keyof StateExtraProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}, "dataSourcesInfo" | "dataSources"> & ActionSettingProps<IMConfig>>;
export default _default;
