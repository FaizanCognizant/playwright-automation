import { test, expect } from '@playwright/test';
import { SampleFormPage } from '../../pages/sample-form-page/sample-form-po';

test.describe('Login Page Tests', () => {
  let sampleFormPage: SampleFormPage;

  test.beforeEach(async ({ page }) => {
    sampleFormPage = new SampleFormPage(page);
  })

  test('Rahul Shetty Academy Practice Page UI Validation', async () => {
    await sampleFormPage.navigateToPracticePage();
    await sampleFormPage.getNameInput().fill('Faizan Shaikh');
    await sampleFormPage.getEmailInput().fill('random21@gmail.com');
    await sampleFormPage.getPasswordInput().fill('badgreat7!');
    await expect(sampleFormPage.getCheckMeOutCheckbox()).toBeVisible();
    await sampleFormPage.getStudentRadio().check();
    await expect(sampleFormPage.getEmployedRadio()).toBeVisible();
    await sampleFormPage.getStudentRadio().check();
    await sampleFormPage.getSubmitButton().click();
    await expect(sampleFormPage.getSuccessMessage()).toContainText('× Success! The Form has been submitted successfully!.');
  });
}); 