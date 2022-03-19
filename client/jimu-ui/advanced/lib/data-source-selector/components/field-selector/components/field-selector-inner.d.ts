/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, FieldSchema, IMFieldSchema, DataSource, ImmutableArray, ImmutableObject, Immutable, IMUseDataSource, IntlShape, JimuFieldType, IMThemeVariables, UseDataSource } from 'jimu-core';
import { SelectProps } from 'jimu-ui';
interface State {
    selectedDs: DataSource;
    isFromRepeatedDs: boolean;
    searchValue: string;
}
interface FieldSelectorInnerProps {
    dataSources: DataSource[];
    types?: ImmutableArray<JimuFieldType>;
    selectedFields?: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>;
    hiddenFields?: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>;
    isDataSourceDropDownHidden?: boolean;
    isSearchInputHidden?: boolean;
    useMultiDropdownBottomTools?: boolean;
    isSelectedFromRepeatedDataSourceContext?: boolean;
    useDropdown?: boolean;
    isMultiple?: boolean;
    placeholder?: string;
    dropdownProps?: SelectProps;
    widgetId?: string;
    useSelectionDataView?: boolean;
    usePopulatedDataView?: boolean;
    noSelectionItem?: {
        name: string;
    };
    className?: string;
    style?: React.CSSProperties;
    onChange?: (allSelectedFields: IMFieldSchema[], ds: DataSource, isSelectedFromRepeatedDataSourceContext: boolean) => void;
    getDefaultField?: (field: IMFieldSchema | {
        [dataSourceId: string]: IMFieldSchema;
    }) => void;
}
interface ExtraProps {
    intl: IntlShape;
    theme: IMThemeVariables;
}
/**
 * The `FieldSelector` component allows users to select fields from a data source.
 *
 * ```ts
 * import { FieldSelector } from 'jimu-ui/advanced/data-source-selector'
 * ```
 */
export declare class _FieldSelectorInner extends React.PureComponent<FieldSelectorInnerProps & ExtraProps, State> {
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: FieldSelectorInnerProps, prevState: State): void;
    getWhetherArrayIsShallowEqual: (arr1: any[], arr2: any[]) => boolean;
    getDefaultSelectedDs: (dataSources: DataSource[], selectedFields: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>) => DataSource;
    hasSelectedFields: () => boolean;
    /**
     * If have selected fields,
     */
    getDsFromSelectedFieldsAndUseDss: (dataSources: DataSource[], selectedFields: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>) => DataSource;
    getDefaultFieldFromDs(dataSources: DataSource[], selectedFields: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>): IMFieldSchema | {
        [dataSourceId: string]: IMFieldSchema;
    };
    getOneDefaultFieldFromDs(ds: DataSource): IMFieldSchema;
    getAreFromMultipleDss: (dataSources: DataSource[], selectedFields: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>) => boolean;
    getDsLabel: (ds: ImmutableObject<DataSource> | DataSource) => string;
    getSelectedFieldsArr: (selectedDs: DataSource, dataSources: DataSource[], selectedFields: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>, isMultiple: boolean) => ImmutableArray<string>;
    getSelectedUseDataSource: () => IMUseDataSource;
    getWhetherJimuNameIsInHiddenFields: (jimuName: string) => boolean;
    getValidFields: (ds: DataSource, notUseFilter?: boolean) => ImmutableObject<{
        [jimuName: string]: FieldSchema;
    }>;
    getAllFields(ds: DataSource): ImmutableObject<{
        [jimuName: string]: FieldSchema;
    }>;
    getNoSelectionItem: () => Immutable.ImmutableObject<{
        jimuName: string;
        name: string;
    }>;
    getUseDataSources: (dataSources: DataSource[]) => ImmutableArray<UseDataSource>;
    onSelectedUseDsChange: (useDataSource: IMUseDataSource, isSelectedFromRepeatedDataSourceContext: boolean) => void;
    onSearchChange: (e: any) => void;
    onFieldClick: (clickedFields: IMFieldSchema[]) => void;
    onSelectedFieldsChange: (clickedFields: IMFieldSchema[], selectedDs: DataSource, dataSources: DataSource[], selectedFields: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>, isSelectedFromRepeatedDataSourceContext: boolean, isMultiple: boolean) => void;
    render(): jsx.JSX.Element;
}
export declare const FieldSelectorInner: React.FC<import("react-intl").WithIntlProps<Pick<FieldSelectorInnerProps & ExtraProps, "intl" | keyof FieldSelectorInnerProps> & {
    theme?: IMThemeVariables;
} & {
    children?: React.ReactNode;
}>> & {
    WrappedComponent: React.ComponentType<Pick<FieldSelectorInnerProps & ExtraProps, "intl" | keyof FieldSelectorInnerProps> & {
        theme?: IMThemeVariables;
    } & {
        children?: React.ReactNode;
    }>;
};
export {};
