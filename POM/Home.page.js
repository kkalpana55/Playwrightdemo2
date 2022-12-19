const { test, expect } = require('@playwright/test');
const Login=require('./login.page');
//create a class

class homepage extends Login
{
//declare the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        
        }//define the functions
    
        async homepageverifyingfilteroption(){
                  
         const elem=await this.page.locator('//div/div[2]/div/div/h2');
      
       await expect(elem).toHaveText("Open cases assigned to you")     
       //await this.page.locator("//div/div[2]/div/div/h2");
       await this.page.locator('jtm-filter div').nth(2).click();
       await this.page.locator('app-default-filter').filter({ hasText: 'CategoryAny' }).locator('div').nth(1).click();
        await this.page.locator('//div/div[1]/div[1]/cdk-virtual-scroll-viewport/div[1]/div[4]/jtm-checkbox').click();
       const category= await this.page.locator('//div/jtm-multiselect-dropdown/div/div[1]/div[1]/cdk-virtual-scroll-viewport/div[1]/div[4]/span').innerText();
       await this.page.locator('.cdk-overlay-backdrop').click();
       await this.page.waitForSelector("//div/div[2]/div/div/app-mercurial-table/div[2]/div/div/div/app-list-ui/table/tbody/tr/td[8]/div/app-badge/span",{timeout:5000});
       const all6=await this.page.$$('//div/div[2]/div/div/app-mercurial-table/div[2]/div/div/div/app-list-ui/table/tbody/tr/td[8]/div/app-badge/span');
       const count6=  all6.length;
       //to print the number of menu items
       console.log("The number of cases :"+count6);
       console.log("The Category chosen is :"+category);
       
       // to print the values
       for await(const repo2 of all6)
       {
        console.log("The case has the category :"+await repo2.innerText());
       
        expect(await repo2.innerText()).toStrictEqual(category);
        console.log("Verifying whether the case displayed and the category chosen are same both are same:"+await repo2.innerText());
        }
         }
       
       
       
        }
    
module.exports=homepage;