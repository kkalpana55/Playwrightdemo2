//To call the login page we need to delcare as
const { test, expect } = require('@playwright/test');
//const playwright = require('playwright-aws-lambda');
const Login=require('./login.page');
//create a class
class reports extends Login
{
//declare the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        
        }//define the functions
async reportmenu(){

    ////waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
        //await this.page.waitForSelector("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[3]/div/div/span[1]",{timeout:50000});
        //to click on the admin button
    await this.page.locator("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[3]/div/div/span[1]").click();
    //to print all the menu items in the left side of the dashboard home page
    await this.page.waitForSelector("//div/div[2]/div/app-beam-tabs/header/ul/li",{timeout:5000});
    //waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
    const all5 =await this.page.$$("//div/div[2]/div/app-beam-tabs/header/ul/li");
    // to find the total number of items
    const count5=  all5.length;
    //to print the number of menu items
    console.log("The number of tabs :"+count5);
    // to print the values
    for await(const repo1 of all5)
    {
      console.log(await repo1.innerText());
    
    }
    
    }
async reviewselectverification(){
   // await this.page.waitForSelector("//*[@id='mat-checkbox-1-input']",{timeout:50000});
   await this.page.locator('.mat-checkbox-inner-container').first(),{timeout:50000};
await this.page.locator('.mat-checkbox-inner-container').first().click();
   //await this.page.waitForSelector("//*[@id='mat-checkbox-2-input']",{timeout:50000});
    expect(await this.page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').isChecked()).toBeTruthy();
    expect(await this.page.locator('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').isChecked()).toBeTruthy();
    expect(await this.page.locator('#mat-checkbox-4 > .mat-checkbox-layout > .mat-checkbox-inner-container').isChecked()).toBeTruthy();
    expect(await this.page.locator('//div/div[2]/div/app-beam-tabs/div/app-tab[1]/div/div/app-mercurial-table/div[1]/div[1]/div/button[1]')).toBeEnabled();
    expect(await this.page.locator('//div/div[2]/div/app-beam-tabs/div/app-tab[1]/div/div/app-mercurial-table/div[1]/div[1]/div/button[2]')).toBeDisabled();
    await this.page.locator("//div/div[2]/div/app-beam-tabs/div/app-tab[1]/div/div/app-mercurial-table/div[2]/div/div/div/app-list-ui/table/tbody/tr[1]/td[7]/div").click();
 await this.page.locator('#mat-dialog-0').getByText('Schedule').click();
  await this.page.locator('textarea[name="note"]').click();
  await this.page.locator('textarea[name="note"]').fill('test');
  await this.page.getByRole('button', { name: 'Submit' }).click();
  const errormsg=await this.page.getByText('SCHEDULE_REPORT_ERROR').innerText();
  console.log(errormsg);
expect(errormsg).toBe("REPORT HAS BEEN SUCCESSFULLY SCHEDULED");
}

}
  
// to export this page
module.exports= reports;
