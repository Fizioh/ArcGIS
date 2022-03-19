/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { UnitTypes } from 'jimu-ui';
interface UnitSelectorProps {
    unit?: UnitTypes;
    units?: UnitTypes[];
    onChange?: (unit: UnitTypes) => void;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
    style?: any;
    disabled?: boolean;
}
export declare const UnitSelector: (props: UnitSelectorProps) => jsx.JSX.Element;
export {};
