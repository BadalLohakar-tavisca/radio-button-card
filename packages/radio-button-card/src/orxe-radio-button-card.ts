import { html, customElement, LitElement, property } from 'lit-element';
import styles from './radio-button-card-css';

@customElement('orxe-radio-button-card')
export default class OrxeRadioButtonCard extends LitElement {
 
  @property({type:String,attribute:'radio-lable'})
  radioLable = '';
  @property({type:String,attribute:'radio-value'})
  radioValue = '';
  @property()
  radioCheckedFlag:boolean = false;
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
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

      if(!this.radioCheckedFlag){
        this.assignDynamicValue(true,'block',"--neutral");
        
      }else{
        this.assignDynamicValue(false,'none',"--global-bg");
      }
     
      const event = new CustomEvent('radioDetailsEvent',{
        detail:{
          radioButtonChecked:this.radioCheckedFlag,
          radioButtonValue:this.radioValue
        }
      });
      this.dispatchEvent(event);
  }

  assignDynamicValue(radioFlag,displayFlag,bgColor:string){
    this.renderRoot.querySelectorAll("#radioChecked")[0]['checked'] = radioFlag;
    this.radioCheckedFlag = radioFlag;
    this.renderRoot.querySelectorAll<HTMLElement>(".checked-content")[0]['style']['display'] = displayFlag  ;
    this.renderRoot.querySelectorAll<HTMLElement>(".radio-button-card-wrapper")[0]['style']['background-color'] =  window.getComputedStyle(document.body).getPropertyValue(bgColor)
  }


  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
