import { test, expect } from '@playwright/test';

test('"Docs" page has a logo', async ({ page }) => {
  //відкрити сторінку
  await page.goto('https://playwright.dev/');
  //клікнути на елемент
  await page.getByRole('link', { name: 'Docs' }).click();
  //знайти лого на сторінці
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
});
