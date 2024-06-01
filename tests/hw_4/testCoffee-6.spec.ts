import { test, expect } from '@playwright/test';

test('Total sum is reset to 0 after ordering', async ({ page }) => {
  
  await page.goto('https://coffee-cart.app/');
  
  await page.locator('[data-test="Flat_White"]').click();
  await page.getByLabel('Cart page').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('jill');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('jill@c.co');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $0.00');
});