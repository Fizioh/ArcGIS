/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
import { IItemWithPortalUrl } from '../../types';
interface Props {
    item: IItemWithPortalUrl;
    hideSingleLayer: boolean;
    portalUrl: string;
    onToggleDetail: (evt: React.MouseEvent<HTMLElement>, item: IItemWithPortalUrl) => void;
    onAddDataClicked: (evt: React.MouseEvent<HTMLElement>, item: IItemWithPortalUrl) => void;
    onRemoveDataClicked: (evt: React.MouseEvent<HTMLElement>, item: IItemWithPortalUrl) => void;
    selected: boolean;
    partSelected: boolean;
    intl: IntlShape;
    infoBtnRef: React.RefObject<HTMLButtonElement>;
}
interface State {
    dataComponentsUtils: any;
}
export default class Item extends React.PureComponent<Props, State> {
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onItemClicked: (e: any) => void;
    onItemKeyDown: (e: any) => void;
    onToggleDetail: (e: any) => void;
    render(): JSX.Element;
}
export {};
