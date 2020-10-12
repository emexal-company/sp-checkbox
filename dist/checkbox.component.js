import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import checkboxStyles from './checkbox.styles';
import { template } from './checkbox.template';
let Checkbox = class Checkbox extends Base {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.invalid = false;
        this.indeterminate = false;
        this.disabled = false;
        this.quiet = false;
        this.label = "";
    }
    render() {
        return template.call(this);
    }
};
Checkbox.componentStyles = [checkboxStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Checkbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Checkbox.prototype, "invalid", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Checkbox.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Checkbox.prototype, "quiet", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Checkbox.prototype, "label", void 0);
Checkbox = __decorate([
    customElement('sp-checkbox')
], Checkbox);
export { Checkbox };
//# sourceMappingURL=checkbox.component.js.map