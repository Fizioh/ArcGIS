/// <reference types="react" />
import { React, IntlShape, ImmutableArray } from 'jimu-core';
import { TargetType } from 'jimu-ui';
import { ItemCategory, ItemTypes, ItemFolder, SortField, SortOrder, IItemWithPortalUrl } from 'jimu-ui/basic/item-selector';
import { IGroup } from '@esri/arcgis-rest-portal';
interface Props {
    intl: IntlShape;
    portalUrl: string;
    isRadio: boolean;
    detailReference: TargetType;
    itemType: ItemTypes | ImmutableArray<ItemTypes>;
    hideSingleLayer: boolean;
    searchValue: string;
    selectedItems: IItemWithPortalUrl[];
    partSelectedItems: IItemWithPortalUrl[];
    onSelect: (allSelectedItems: IItemWithPortalUrl[], latestSelectedItem: IItemWithPortalUrl) => void;
    onRemove: (allSelectedItems: IItemWithPortalUrl[], latestRemovedItem: IItemWithPortalUrl) => void;
    setSearchValue: (value: string) => void;
}
interface State {
    debounceSearchValue: string;
    selectedCategory: ItemCategory;
    sortField: SortField;
    sortOrder: SortOrder;
    selectedFolder: ItemFolder;
    selectedGroup: IGroup;
    isEnterOrSearchIconClicked: boolean;
    folders: ItemFolder[];
    groups: IGroup[];
    appServices: any;
}
export default class extends React.PureComponent<Props, State> {
    __unmount: boolean;
    itemCategory: {
        MY_CONTENT: string;
        MY_GROUP: string;
        MY_ORGANIZATION: string;
        PUBLIC: string;
        LIVING_ATLAS: string;
    };
    shouldShowItemCategory: Partial<ItemCategory>;
    sortField: {
        modified: string;
        title: string;
        numViews: string;
    };
    defaultSelectedFolder: ItemFolder;
    rootFolder: ItemFolder;
    defaultFolders: ItemFolder[];
    defaultSelectedGroup: IGroup;
    debounceSetSearchValue: (value: string) => void;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillUnmount(): void;
    getShouldShowItemCategory(): Partial<ItemCategory>;
    getGroups(): IGroup[];
    getFolders(): Promise<ItemFolder[]>;
    onCategoryChange: (cat: ItemCategory) => void;
    onSearchInputKeyDown: (evt: any) => void;
    enterOrSearchIsClicked: () => void;
    enterOrSearchIsUnclicked: () => void;
    setDebounceSearchValue: (value: string) => void;
    onSearchChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    onSortFieldChange: (e: any) => void;
    onFolderChange: (e: any) => void;
    onGroupChange: (e: any) => void;
    onSortOrderChange: () => void;
    onItemAdded: (allSelectedItems: IItemWithPortalUrl[], latestSelectedItem?: IItemWithPortalUrl) => void;
    onItemRemoved: (allSelectedItems: IItemWithPortalUrl[], latestRemovedItem?: IItemWithPortalUrl) => void;
    render(): JSX.Element;
}
export {};
