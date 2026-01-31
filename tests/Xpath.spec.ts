/*Absolute xpath -/html/body/header/div/div/div[2]/div/input =Full path. Navigates from root of document till target element
in Absolute xpath -we do not use attribtes
however we can use combination of absolue and relative
relative xpath - it directly jumps to elements-it starts with //*[@name="search"]
relative xpath is preferred bcoz if there is any change in xpath then abolute xpath will be obsolete.
*/
import {test,expect, Locator} from "@playwright/test";

test("xpath demo",async ({page})=>{
 await page.goto("https://demo.nopcommerce.com/");
 //absolute XPath
 const logo:Locator = page.locator("xpath=/html[1]/body[1]/div[6]/header[1]/div[2]/div[1]/a[1]/img[1]");
 console.log("Absolute Logo",logo);
 await expect(logo).toBeVisible();
 //relative Xpath
 const logo1:Locator = page.locator("//img[@alt='nopCommerce demo store']");
  await expect(logo1).toBeVisible();

}
);