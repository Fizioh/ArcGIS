import { LineType } from 'jimu-ui';
interface LineStyleProps {
    /**
     * See {@link DropdownButtonProps} for details.
     */
    'aria-label'?: string;
    type?: 'normal' | 'symbol';
    value: LineType;
    onChange?: (value: string) => void;
    className?: string;
    style?: any;
}
export declare const LineStyleTranstions: {
    dashed: string;
    dotted: string;
    double: string;
    solid: string;
    esriSLSDash: string;
    esriSLSDot: string;
    esriSLSSolid: string;
    esriSLSDashDot: string;
    esriSLSDashDotDot: string;
};
export declare const LineStyleSelector: (props: LineStyleProps) => JSX.Element;
export {};
