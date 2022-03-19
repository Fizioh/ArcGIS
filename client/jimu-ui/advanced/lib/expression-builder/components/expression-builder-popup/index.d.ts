/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables, IntlShape } from 'jimu-core';
import { ExpressionBuilderProps } from '../../types';
interface State {
    SidePopper: any;
}
export interface ExpressionBuilderPopupProps extends ExpressionBuilderProps {
    /**
     * Whether to show the popup.
     */
    isOpen: boolean;
    /**
     * Callback when the close icon in header of the popup is clicked.
     */
    onClose: () => void;
    /**
     * See `SidePopper` in jimu-ui/advanced/setting-components for more detail.
     */
    trigger?: HTMLElement | HTMLElement[];
    /**
     * See `SidePopper` in jimu-ui/advanced/setting-components for more detail.
     */
    backToFocusNode?: HTMLElement;
}
interface ExtraProps {
    /**
     * @ignore
     */
    theme: ThemeVariables;
    /**
     * @ignore
     */
    intl: IntlShape;
}
/**
 * The `ExpressionBuilderPopup` component allows users to build an Expression using a popup.
 *
 * ```ts
 * import { ExpressionBuilderPopup } from 'jimu-ui/advanced/expression-builder'
 * ```
 */
export declare class _ExpressionBuilderPopup extends React.PureComponent<ExpressionBuilderPopupProps & ExtraProps, State> {
    overflowYStyle: React.CSSProperties;
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): jsx.JSX.Element;
}
declare const ExpressionBuilderPopup: React.FC<import("react-intl").WithIntlProps<Pick<ExpressionBuilderPopupProps & ExtraProps, "intl" | keyof ExpressionBuilderPopupProps> & {
    theme?: import("jimu-core").IMThemeVariables;
}>> & {
    WrappedComponent: React.ComponentType<Pick<ExpressionBuilderPopupProps & ExtraProps, "intl" | keyof ExpressionBuilderPopupProps> & {
        theme?: import("jimu-core").IMThemeVariables;
    }>;
};
export default ExpressionBuilderPopup;
