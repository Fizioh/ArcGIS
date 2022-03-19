/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape } from 'jimu-core';
import { IItem } from '@esri/arcgis-rest-types';
/**
 * The ItemDetail props
 */
export interface ItemDetailProps {
    /**
     * Portal [item](https://developers.arcgis.com/rest/users-groups-and-items/item.htm)
     */
    item: IItem;
    portalUrl: string;
    style?: React.CSSProperties;
    className?: string;
    hideHeader?: boolean;
    onClose?: () => void;
}
interface ExtraProps {
    intl: IntlShape;
}
/**
 * A component to show the detail of a portal [item](https://developers.arcgis.com/rest/users-groups-and-items/item.htm)
 */
export declare const ItemDetail: React.FC<import("react-intl").WithIntlProps<ItemDetailProps & ExtraProps>> & {
    WrappedComponent: React.ComponentType<ItemDetailProps & ExtraProps>;
};
export default ItemDetail;
