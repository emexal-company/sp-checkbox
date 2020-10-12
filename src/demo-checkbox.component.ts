import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-checkbox.styles';
import template from './demo-checkbox.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Checkbox } from '@spectrum/sp-checkbox';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-checkbox')
export class DemoCheckbox extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-checkbox': DemoCheckbox;
  }
}
