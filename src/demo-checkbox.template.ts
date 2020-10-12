import { html } from 'lit-element';
import { DemoCheckbox } from './demo-checkbox.component';

import '@spectrum/sp-checkbox';
import '@spectrum/sp-container';

import '@spectrum/sp-sidenav';
import '@spectrum/sp-sidenav';

import { Spectrum } from '@spectrum/config/spectrum-config';

export default function template(this: DemoCheckbox) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
  <sp-demo width="200">
    <pre><sp-checkbox label="Checkbox"></sp-checkbox></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-checkbox label="Checkbox" checked></sp-checkbox></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-checkbox label="Checkbox" indeterminate></sp-checkbox></pre>
</sp-demo>
<sp-rule medium label="Checkbox - Disabled"></sp-rule>
<sp-demo width="200">
  <pre><sp-checkbox label="Checkbox" disabled></sp-checkbox></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-checkbox label="Checkbox" disabled checked></sp-checkbox></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-checkbox label="Checkbox" disabled indeterminate></sp-checkbox></pre>
</sp-demo>
<sp-rule medium label="Checkbox - Invalid"></sp-rule>
<sp-demo width="200">
  <pre><sp-checkbox label="Checkbox" invalid></sp-checkbox></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-checkbox label="Checkbox" invalid checked></sp-checkbox></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-checkbox label="Checkbox" invalid indeterminate></sp-checkbox></pre>
</sp-demo>
<sp-rule medium label="Checkbox - Quiet"></sp-rule>
<sp-demo width="200">
  <pre><sp-checkbox label="Checkbox" quiet></sp-checkbox></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-checkbox label="Checkbox" quiet checked></sp-checkbox></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-checkbox label="Checkbox" quiet indeterminate></sp-checkbox></pre>
</sp-demo>
<sp-container>
  `;
}
