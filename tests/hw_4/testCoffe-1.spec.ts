
import { test, expect } from '@playwright/test';
test('All cups has composition', async ({ page }) => {

await page.goto('https://coffee-cart.app/');

await expect(page.locator('[data-test="Espresso"]')).toContainText('espresso');

await expect(page.locator('[data-test="Espresso_Macchiato"]')).toContainText('espresso');
await expect(page.locator('[data-test="Espresso_Macchiato"]')).toContainText('milk foam');

await expect(page.locator('[data-test="Cappuccino"]')).toContainText('espresso');
await expect(page.locator('[data-test="Cappuccino"]')).toContainText('steamed milk');
await expect(page.locator('[data-test="Cappuccino"]')).toContainText('milk foam');

await expect(page.locator('[data-test="Mocha"]')).toContainText('espresso');
await expect(page.locator('[data-test="Mocha"]')).toContainText('chocolate syrup');
await expect(page.locator('[data-test="Mocha"]')).toContainText('steamed milk');
await expect(page.locator('[data-test="Mocha"]')).toContainText('whipped cream');

await expect(page.locator('[data-test="Flat_White"]')).toContainText('espresso');
await expect(page.locator('[data-test="Flat_White"]')).toContainText('steamed milk');

await expect(page.locator('[data-test="Americano"]')).toContainText('espresso');
await expect(page.locator('[data-test="Americano"]')).toContainText('water');

await expect(page.locator('[data-test="Cafe_Latte"]')).toContainText('espresso');
await expect(page.locator('[data-test="Cafe_Latte"]')).toContainText('steamed milk');
await expect(page.locator('[data-test="Cafe_Latte"]')).toContainText('milk foam');

await expect(page.locator('[data-test="Espresso_Con Panna"]')).toContainText('espresso');
await expect(page.locator('[data-test="Espresso_Con Panna"]')).toContainText('whipped cream');

await expect(page.locator('[data-test="Cafe_Breve"]')).toContainText('espresso');
await expect(page.locator('[data-test="Cafe_Breve"]')).toContainText('steamed milk');
await expect(page.locator('[data-test="Cafe_Breve"]')).toContainText('steamed cream');
await expect(page.locator('[data-test="Cafe_Breve"]')).toContainText('milk foam');
});