import {test,expect} from "@playwright/test";
//fixture-Global Variable Inbuilt-Page, browser

test("Verify Title",async ({page})=>{ 

await page.goto("https://automationexercise.com");
let title1: string = await page.title();
    console.log("title",title1);

await expect(page).toHaveTitle("Automation Exercise");

});
