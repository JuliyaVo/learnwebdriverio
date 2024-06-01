import { test, expect } from '@playwright/test';
test('Add article', async ({ page }) => {


await page.goto('https://demo.learnwebdriverio.com/');
await page.locator("[data-qa-id='site-header'] [href='/login']").click;
await page.locator("input[placeholder='Email']").click();
await page.locator("input[placeholder='Email']").fill('test2@gmail.com');
await page.locator("input[placeholder='Password']").click();
await page.locator("input[placeholder='Password']").fill('123456');
await page.locator("//button[@class='btn btn-lg btn-primary pull-xs-right']").click();
await page.locator("[data-qa-id='site-header'] [href='/editor']").click;
await page.locator("input[placeholder='Article Title']").click();
await page.locator("input[placeholder='Article Title']").fill("My article");
await page.locator("input[data-qa-id='editor-description']").click();
await page.locator("input[data-qa-id='editor-description']").fill('About life');
await page.locator("//*[@data-qa-id='editor-body']//textarea").click();
await page.locator("//*[@data-qa-id='editor-body']//textarea").fill('Lorem ipsum ');
await page.locator("//button[@data-qa-id='editor-publish']").click();
await page.getByRole('link', { name: 'juliyavo' }).click();
await expect(page.locator("[data-qa-type='article-list'] [data-qa-type='preview-title']")).toBeVisible;
});


