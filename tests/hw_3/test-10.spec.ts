import { test, expect } from '@playwright/test';

test('"Welcome" page contain blocks ', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
 // await page.getByRole('link', { name: 'Community' }).click();
 const menuItemCommunity = page.getByRole('link', { name: 'Community' });
  
  await page.goto('https://playwright.dev/');
  await (menuItemCommunity).click;
  await expect(page.locator('#ambassadors')).toContainText('Ambassadors');
  await expect(page.locator('#github')).toContainText('GitHub');
  await expect(page.locator('#contributing')).toContainText('Contributing');
  await expect(page.locator('#community-discord')).toContainText('Community Discord');
});
//як правильно називати змінні - за змістом (що вона зберігає в собі, наприклад роль)

