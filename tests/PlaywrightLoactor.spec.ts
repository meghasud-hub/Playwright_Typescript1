/*Locator - Identify the elements on page
DOM (API interface provided by browser) - Document Object Model - HTML code comes after INSPECT
page.getByRole() Locate elements by accessibility roles like button, checkbox, 
heading, etc. 
page.getByText() Locate by visible text content. 
page.getByLabel() Locate form controls using associated label text. 
page.getByPlaceholder() Locate inputs via placeholder text. 
page.getByAltText() Locate images by their alternative text (alt attribute). 
page.getByTitle() Locate elements by their title attribute. 
page.getByTestId() Locate by a custom data attribute like data-testid.
*/
import { test, expect, Locator} from "@playwright/test";

test("Very Locators", async ({page}) => {       
    await page.goto("https://demo.nopcommerce.com/");  

    const logo: Locator = page.getByAltText("nopCommerce demo store"); 
  //  await logo.click();
    await expect(logo).toBeVisible();
//getbytext for non intractive elements. subscript will also work.
//like p , div, span, h etc
   /* const text:Locator = page.getByText("Welcome to our store")
    await expect(text).toBeVisible();
   OR   */ 
  await expect(page.getByText("Welcome to our store")).toBeVisible();
//Regular expression
  await expect(page.getByText(/welcome\s+To\s+our\s+Store/i)).toBeVisible();

  //getbyRole for interactive elements - buttons,checkbox, etc
  
 await page.getByRole('link', { name: /apparel/i }).nth(0).click();
});

 