import { test, expect } from '@playwright/test';

test('"HTML Test Reports" block has "code" with text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('link', { name: 'How to open the HTML test' })).toBeVisible();
  await page.getByRole('link', { name: 'How to open the HTML test' }).click();
  await expect(page.locator('code').filter({ hasText: 'npx playwright show-report' })).toBeVisible();
});