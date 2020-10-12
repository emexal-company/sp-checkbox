import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export function template() {
    const classes = {
        'is-indeterminate': this.indeterminate,
        'is-disabled': this.disabled,
        'is-invalid': this.invalid,
        'spectrum-Checkbox--quiet': this.quiet
    };
    return html `
      <label class="spectrum-Checkbox ${classMap(classes)}">
        <input type="checkbox" class="spectrum-Checkbox-input" ?checked="${this.checked}" ?disabled="${this.disabled}">
        <span class="spectrum-Checkbox-box">
          <sp-icon name="CheckmarkSmall" class="spectrum-Checkbox-checkmark" size="S"></sp-icon>
          <sp-icon name="DashSmall" class="spectrum-Checkbox-partialCheckmark" size="S"></sp-icon>
        </span>
        <span class="spectrum-Checkbox-label">${this.label}</span>
      </label>
  `;
}
//# sourceMappingURL=checkbox.template.js.map