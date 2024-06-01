import { test, expect } from '@playwright/test';

test('DocSearch-Modal has placeholder', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByLabel('Search')).toBeVisible();
  await page.getByLabel('Search').click();
  await expect(page.getByPlaceholder('Search docs')).toBeVisible();
});