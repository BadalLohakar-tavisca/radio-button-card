import { OrxeRadioButtonCard } from '..';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-radio-button-card-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let RadioButtonCard;

  beforeEach(async () => {
    OrxeRadioButtonCard;
    document.body.appendChild(document.createElement('RadioButtonCard'));
    RadioButtonCard = document.querySelector('RadioButtonCard') as OrxeRadioButtonCard;
  });

  afterEach(() => {
    RadioButtonCard.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(RadioButtonCard);
    expect(result).toHaveNoViolations();
  });
});
