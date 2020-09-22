import { LitElement } from 'lit-element';
export default class OrxeRadioButtonCard extends LitElement {
    radioLable: string;
    radioValue: string;
    radioCheckedFlag: boolean;
    render(): import("lit-element").TemplateResult;
    radioButtonClicked(): void;
    assignDynamicValue(radioFlag: any, displayFlag: any, bgColor: string): void;
    static styles: import("lit-element").CSSResult;
}
