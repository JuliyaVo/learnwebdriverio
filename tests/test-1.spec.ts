import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.getByRole('tabpanel').getByLabel('Copy code to clipboard').click();
  await expect(page.getByRole('tabpanel')).toContainText('npm init playwright@latest');
});