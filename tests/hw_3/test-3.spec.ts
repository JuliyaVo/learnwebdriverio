import { test, expect } from '@playwright/test';

test('"VS Code" logo links to the correct page ', async ({ page }) => {
  //відкрити головну сторінку playwright
  await page.goto('https://playwright.dev/');
  // знайти елемент який має текст "VS Code" та атрибут href
  await expect(page.getByRole('link', { name: 'VS Code' })).toBeVisible();
  //клік на знайдений елемент
  await page.getByRole('link', { name: 'VS Code' }).click();
  //відкрити нову табу та зберегти її в перемінну
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
//відкрити потрібну урлу в новій табі
await page1.waitForURL('https://code.visualstudio.com/');
});


/*test('test', async ({ page }) => {
  //відкрити головну сторінку playwright
  await page.goto('https://playwright.dev/');
  // знайти елемент який має роль посилання і текст "VS Code"
  await expect(page.getByRole('link', { name: 'Disney+ Hotstar' })).toBeVisible();
  //клік на знайдений елемент
  await page.getByRole('link', { name: 'Disney+ Hotstar' }).click();
  //відкриття нової таби та збереження обʼєкту в перемінну
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
//відкривається урла
await page1.waitForURL('https://hotstar.com');
});*/

  


