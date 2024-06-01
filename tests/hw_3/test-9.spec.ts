import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await page.getByText('Node.jsPythonJava.NET').click();
  await expect(page.getByRole('link', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' })).toBeVisible();
  await expect(page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' })).toBeVisible();
  await expect(page.getByLabel('Main', { exact: true }).getByRole('link', { name: '.NET' })).toBeVisible();
});