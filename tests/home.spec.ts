import { test, expect } from '@playwright/test';

test('acessando e preechendo form testautomationpractice blogspot', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  await page.fill('#name', 'Nome Completo');
  await page.fill('#email', 'email Completo');
  await page.fill('#phone', 'Phone Completo');
  await page.fill('#textarea', 'Endereço Completo');
  await page.check('#male');
  await page.check('#saturday');
  await page.selectOption('#country', 'brazil');
  await page.click('option[value="green"]');
  await page.click('option[value="dog"]');
  await page.click('#datepicker');
  await page.click('a[data-date="22"]');
  await page.click('#txtDate');
  await page.click('a[data-date="30"]');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
