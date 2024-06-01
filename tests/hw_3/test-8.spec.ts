import { test, expect } from '@playwright/test';

test('"Conference Videos" page has links', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Conference Videos' }).click();
  await expect(page.getByRole('link', { name: 'Conference Videos' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Release Videos' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Leave Streams' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Feature Videos' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Learn Videos' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Bad Videos' })).toBeVisible();

});