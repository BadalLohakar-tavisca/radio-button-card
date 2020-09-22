import { OrxeRadioButtonCard } from '..';
import {
  toHaveClass,toHaveAttribute,toHaveValue,toBeChecked,toHaveStyle
} from '@testing-library/jest-dom/matchers'

expect.extend({ toHaveClass,toHaveAttribute,toHaveValue,toBeChecked ,toHaveStyle})

describe('orxe-radio-button-card', () => {
  let radioButton;

  beforeEach(async function() {
    OrxeRadioButtonCard;
    radioButton = (await document.body.appendChild(document.createElement('orxe-radio-button-card'))) as OrxeRadioButtonCard;
  });

  afterEach(async function() {
    await radioButton.remove();
  });

  function getByTestId(id: string): HTMLElement {
    return radioButton.shadowRoot.querySelector(`[data-testid=${id}]`);
  }
  it('should check default value for properties for radio button card', () => {
    expect(radioButton.radioCheckedFlag).toBeFalsy();
    expect(radioButton.radioLable).toEqual('');
    expect(radioButton.radioValue).toEqual('');
  });

  it('has checked content class',()=>{
    const checkedContent = getByTestId('radio-button-card-checked-content');
    expect(checkedContent).toHaveClass('checked-content');
  });
  it('check css value for checked content before radio button check',()=>{
    const beforeRadioButtonCheck = getByTestId('radio-button-card-checked-content');
    expect(beforeRadioButtonCheck).toHaveStyle({
      backgroundColor: window.getComputedStyle(document.body).getPropertyValue('--global-bg')
    });
  });
  it('radio button default unchecked',()=>{
    const radioInput = getByTestId('radio-button-card-radio-input');
    expect(radioInput).not.toBeChecked()
  });
  it('check on click radio button status and css value',async ()=>{
    const radioInputClick = getByTestId('radio-button-card-radio-input');
    await radioInputClick.click();
    expect(radioInputClick).toBeChecked();
    expect(radioButton.radioCheckedFlag).toBeTruthy();
    const contentAfterClick = getByTestId('radio-button-card-checked-content');
    expect(contentAfterClick).toHaveStyle({
      backgroundColor: window.getComputedStyle(document.body).getPropertyValue('--neutral'),
      display: 'block'
    })
  });

});