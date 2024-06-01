import { test, expect } from '@playwright/test';

test('"ConferenceVideos" side-bar item links to the "/conference-videos" page', async ({ page }) => {
  //відкрити сторінку
  await page.goto('https://playwright.dev/');
  //знайти елемент на сторінці та натиснути
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
  await page.getByRole('link', { name: 'Community' }).click();
  //перехід на сторінку
  await page.waitForURL('https://playwright.dev/community/welcome');
  //знайти на сторінці сайдбар
  await expect(page.getByLabel('Docs sidebar')).toBeVisible();
  //сайдбар містить клікабельний елемент 'Conference Videos'
  await expect(page.getByRole('link', { name: 'Conference Videos' })).toBeVisible();
  await page.getByRole('link', { name: 'Conference Videos' }).click();
  //перехід на сторінку з відео з конференцій
  await page.goto('https://playwright.dev/community/conference-videos');
});