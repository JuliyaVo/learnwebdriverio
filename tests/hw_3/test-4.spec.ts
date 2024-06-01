import { test, expect } from '@playwright/test';

test('Page docs/api/class-playwright has clickable logo and link to the home page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'API', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.waitForURL('https://playwright.dev/docs/api/class-playwright');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.waitForURL('https://playwright.dev/');
});