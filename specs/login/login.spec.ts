import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page/login-page';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  })

  test('Rahul Shetty Academy Practice Page UI Validation', async ({ page }) => {
    await loginPage.navigateToPracticePage();
    await loginPage.getNameInput().fill('Faizan Shaikh');
    await loginPage.getEmailInput().fill('random21@gmail.com');
    await loginPage.getPasswordInput().fill('badgreat7!');
    await expect(loginPage.getCheckMeOutCheckbox()).toBeVisible();
    await loginPage.getStudentRadio().check();
    await expect(loginPage.getEmployedRadio()).toBeVisible();
    await loginPage.getStudentRadio().check();
    await loginPage.getSubmitButton().click();
    await expect(loginPage.getSuccessMessage()).toContainText('× Success! The Form has been submitted successfully!.');
  });
}); 