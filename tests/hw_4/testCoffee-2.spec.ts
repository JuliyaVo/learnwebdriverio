import { test, expect } from '@playwright/test';

test('Total sum calculation', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $22.00');
 
});