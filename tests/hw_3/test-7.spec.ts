import { test, expect } from '@playwright/test';

test('"Info" block has "More" block with githug, youTube and blog links ', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('contentinfo')).toBeVisible();
  await expect(page.getByText('More', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'YouTube' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
});