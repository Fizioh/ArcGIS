/// <reference types="react" />
import { React, IntlShape, ImmutableArray } from 'jimu-core';
import { AllDataSourceTypes } from '../../../../types';
interface Props {
    toUseTypes: ImmutableArray<AllDataSourceTypes>;
    selectedTypes: ImmutableArray<AllDataSourceTypes>;
    intl: IntlShape;
    onTypeSelected: (types: ImmutableArray<AllDataSourceTypes>) => void;
}
export default class DsTypes extends React.PureComponent<Props, unknown> {
    __unmount: boolean;
    getWhetherdisableSelectionType: (types: ImmutableArray<AllDataSourceTypes>) => boolean;
    onTypeSelected: (e: any) => void;
    render(): JSX.Element;
}
export {};
