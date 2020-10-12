import { Base } from '@spectrum/sp-base';
export declare class Checkbox extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    checked: boolean;
    invalid: boolean;
    indeterminate: boolean;
    disabled: boolean;
    quiet: boolean;
    label: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-checkbox': Checkbox;
    }
}
