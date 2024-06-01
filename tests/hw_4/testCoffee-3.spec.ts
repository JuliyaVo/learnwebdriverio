import { test, expect } from '@playwright/test';
    test('Change unit quantity', async ({ page }) => {
      await page.goto('https://coffee-cart.app/');
      await page.locator('[data-test="Espresso"]').click();
      await page.locator('li').filter({ hasText: 'cart (1)' }).click();
      await page.getByRole('button', { name: 'Add one Espresso' }).click();
      
      await expect(page.locator('#app')).toContainText('x 2');
    });