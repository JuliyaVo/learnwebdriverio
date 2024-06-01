import { test, expect } from '@playwright/test';


test('Item quantity in the cart changed after deleting the random item', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.getByLabel('Cart page').click();
  await page.getByLabel('Remove all Mocha').click();
  await expect(page.locator('li').filter({ hasText: 'cart (1)' })).toContainText('1');
});
