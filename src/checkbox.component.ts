import { customElement, property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import checkboxStyles from './checkbox.styles';
import { template, noiconstemplate } from './checkbox.template';

@customElement('sp-checkbox')
export class Checkbox extends Base {
  public static componentStyles = [ checkboxStyles ];

  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) invalid = false;
  @property({ type: Boolean }) indeterminate = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) quiet = false;
  @property({ type: String }) label = "";

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-checkbox': Checkbox;
  }
}
