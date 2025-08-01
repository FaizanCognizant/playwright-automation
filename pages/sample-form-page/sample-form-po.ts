import { Page, Locator } from '@playwright/test';

export class SampleFormPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToPracticePage(): Promise<void> {
    await this.page.goto('/angularpractice');
  }

  getNameInput(): Locator {
    return this.page.locator('form input[name="name"]');
  }

  getEmailInput(): Locator {
    return this.page.locator('input[name="email"]');
  }

  getPasswordInput(): Locator {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  getCheckMeOutCheckbox(): Locator {
    return this.page.getByRole('checkbox', { name: 'Check me out if you Love' });
  }

  getStudentRadio(): Locator {
    return this.page.getByRole('radio', { name: 'Student' });
  }

  getEmployedRadio(): Locator {
    return this.page.getByRole('radio', { name: 'Employed' });
  }

  getSubmitButton(): Locator {
    return this.page.getByRole('button', { name: 'Submit' });
  }

  getSuccessMessage(): Locator {
    return this.page.locator('form-comp');
  }

  getCloseButton(): Locator {
    return this.page.getByText('× Success! The Form has been');
  }
}