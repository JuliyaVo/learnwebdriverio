import { test, expect } from '@playwright/test';

test('Get discount for 3-d position in the cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.locator('.promo > div').first()).toBeVisible();
});
