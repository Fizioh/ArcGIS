/** @jsx jsx */
import { React, DataSourceJson, ThemeVariables, ImmutableObject, ImmutableArray, IntlShape, IMDataSourceInfo, UseDataSource, IMDataSourceJson } from 'jimu-core';
import { AllDataSourceTypes } from '../../../types';
interface Props {
    types: ImmutableArray<AllDataSourceTypes>;
    widgetId?: string;
    fromRootDsIds?: ImmutableArray<string>;
    buttonLabel?: string;
    useDataSources?: ImmutableArray<UseDataSource>;
    isMultiple?: boolean;
    isMultipleDataView?: boolean;
    closeDataSourceListOnChange?: boolean;
    fromDsIds?: ImmutableArray<string>;
    hideDs?: (dsJson: IMDataSourceJson) => boolean;
    hideHeader?: boolean;
    hideTypeDropdown?: boolean;
    disableAddData?: boolean;
    hideAddDataButton?: boolean;
    disableDataSourceList?: boolean;
    disableDataView?: boolean;
    hideCreateViewButton?: boolean;
    enableToSelectOutputDsFromSelf?: boolean;
    hideDataView?: boolean;
    onChange?: (useDataSources: UseDataSource[]) => void;
    disableSelection?: (useDataSources: UseDataSource[]) => boolean;
    disableRemove?: (useDataSources: UseDataSource[]) => boolean;
}
interface ExtraProps {
    theme: ThemeVariables;
    intl: IntlShape;
}
interface StateExtraProps {
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: IMDataSourceInfo;
    }>;
}
declare const _default: React.FunctionComponent<Pick<Props & ExtraProps & StateExtraProps, "intl" | keyof Props | keyof StateExtraProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}>;
/**
 * @ignore
 */
export default _default;
