const { test, expect } = require('@playwright/test');
const Login=require('./login.page');
//const playwright = require('playwright-aws-lambda');
//create a class

class homepage extends Login
{
//declare the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        
        }//define the functions
    
        async homepageverifyingfilteroption(){
                  
         const elem=await this.page.locator('div>div:nth-child(2)>div>div>h2');
      
       await expect(elem).toHaveText("Open cases assigned to you")     
       await this.page.locator('jtm-filter div').nth(2).click();
       await this.page.locator('app-default-filter').filter({ hasText: 'CategoryAny' }).locator('div').nth(1).click();
       await this.page.locator('div:nth-child(4)>jtm-checkbox').click();
       const category= await this.page.locator('div:nth-child(4)>span').innerText();
       await this.page.locator('.cdk-overlay-backdrop').click();
       await this.page.waitForSelector("tbody>tr>td:nth-child(8)",{timeout:5000});
       const all6=await this.page.$$('tbody>tr>td:nth-child(8)');
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
        await this.page.screenshot({path:"C://Users//kkalp//OneDrive//Desktop//Screenshots//homepagescreenshot.png", full_page:true});
      }
         }
          
       
        }
    
module.exports=homepage;
