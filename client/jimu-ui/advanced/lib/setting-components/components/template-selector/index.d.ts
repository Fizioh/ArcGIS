/** @jsx jsx */
import { jsx } from 'jimu-core';
import type { Template } from 'jimu-for-builder/templates';
export interface TemplateSelectorProps {
    title?: string;
    templates: Template[];
    referenceElement: HTMLElement;
    onItemSelect: (item: Template) => void;
    onClose: () => void;
}
export declare function TemplateSelector(props: TemplateSelectorProps): jsx.JSX.Element;
