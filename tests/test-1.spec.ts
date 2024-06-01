import { test, expect } from '@playwright/test';
test('SingUp form', async ({ page }) => {
//go to the 
await page.goto('https://demo.learnwebdriverio.com/');
await page.locator("[data-qa-id='site-header'] [href='/register']").click;
await page.locator("input[placeholder='Username']").click();
await page.locator("input[placeholder='Username']").fill('JuliyaVo');
await page.locator("input[placeholder='Email']").click();
await page.locator("input[placeholder='Email']").fill('test2@gmail.com');
await page.locator("input[placeholder='Password']").click();
await page.locator("input[placeholder='Password']").fill('123456');
await page.locator("//button[@class='btn btn-lg btn-primary pull-xs-right']").click();
await expect(page.locator("[data-qa-id='site-header'] [href='/@JuliyaVo']")).toBeVisible();
});



/