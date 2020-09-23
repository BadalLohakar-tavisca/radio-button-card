var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './radio-button-card-css';
let OrxeRadioButtonCard = class OrxeRadioButtonCard extends LitElement {
    constructor() {
        super(...arguments);
        this.radioLable = '';
        this.radioValue = '';
        this.radioCheckedFlag = false;
    }
    render() {
        return html `
      <div class="radio-button-card-wrapper caption" >
    
          <div>
              <input type="radio" id="radioChecked" 
              data-testid="radio-button-card-radio-input"
              .value=${this.radioValue}
               @click=${() => this.radioButtonClicked()}>
              <lable>${this.radioLable}</lable>
          </div>
          <div data-testid="radio-button-card-checked-content"  class="checked-content">
             <slot></slot>
          </div>
      
      </div>
    `;
    }
    radioButtonClicked() {
        if (!this.radioCheckedFlag) {
            this.assignDynamicValue(true, 'block', "--neutral");
        }
        else {
            this.assignDynamicValue(false, 'none', "--global-bg");
        }
        const event = new CustomEvent('radioDetailsEvent', {
            detail: {
                radioButtonChecked: this.radioCheckedFlag,
                radioButtonValue: this.radioValue
            }
        });
        this.dispatchEvent(event);
    }
    assignDynamicValue(radioFlag, displayFlag, bgColor) {
        this.renderRoot.querySelectorAll("#radioChecked")[0]['checked'] = radioFlag;
        this.radioCheckedFlag = radioFlag;
        this.renderRoot.querySelectorAll(".checked-content")[0]['style']['display'] = displayFlag;
        this.renderRoot.querySelectorAll(".radio-button-card-wrapper")[0]['style']['background-color'] = window.getComputedStyle(document.body).getPropertyValue(bgColor);
    }
};
OrxeRadioButtonCard.styles = styles;
__decorate([
    property({ type: String, attribute: 'radio-lable' }),
    __metadata("design:type", Object)
], OrxeRadioButtonCard.prototype, "radioLable", void 0);
__decorate([
    property({ type: String, attribute: 'radio-value' }),
    __metadata("design:type", Object)
], OrxeRadioButtonCard.prototype, "radioValue", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], OrxeRadioButtonCard.prototype, "radioCheckedFlag", void 0);
OrxeRadioButtonCard = __decorate([
    customElement('orxe-radio-button-card')
], OrxeRadioButtonCard);
export default OrxeRadioButtonCard;
