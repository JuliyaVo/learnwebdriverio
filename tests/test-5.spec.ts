import { test, expect } from '@playwright/test';
test('Delete article', async ({ page }) => {

await page.goto('https://demo.learnwebdriverio.com/');
await page.locator("[data-qa-id='site-header'] [href='/login']").click;
await page.locator("input[placeholder='Email']").click();
await page.locator("input[placeholder='Email']").fill('test2@gmail.com');
await page.locator("input[placeholder='Password']").click();
await page.locator("input[placeholder='Password']").fill('123456');
await page.locator("//button[@class='btn btn-lg btn-primary pull-xs-right']").click();
await page.getByRole('link', { name: 'juliyavo' }).click();
await page.locator("[data-qa-type='article-list'] [data-qa-type='preview-title']").click();
await page.locator("//*[@class='banner']//*[@data-qa-id='article-delete']").click();
await page.getByRole('link', { name: 'juliyavo' }).click();

await expect(page.locator("[data-qa-type='article-list'] [class='article-preview']]")).toBeVisible;
});
