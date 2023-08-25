// To call the login page we need to delcare as
const { test, expect } = require('@playwright/test');
//const playwright = require('playwright-aws-lambda');
const Login=require('./login.page');
//create a class
class Admin extends Login
{
//declare the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        
        }//define the functions
async adminmenu(){

    ////waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
        await this.page.waitForSelector("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[6]",{timeout:50000});
        //to click on the admin button
    await this.page.locator("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[6]").click();
    //to print all the menu items in the left side of the dashboard home page
    //waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
await this.page.waitForSelector(" div.menu-item-container",{timeout:5000});
//locating the element $$ is used to retreive multiple elements 
const all =await this.page.$$("div.menu-item-container");
// to find the total number of items
const count =  all.length;
//to print the number of menu items
console.log("The number of menu items under Admin/Rules:"+count);
// to print the values
for await(const repo of all)
{
  console.log(await repo.innerText());

}
await this.page.waitForSelector("//div//div[2]//div//admin-sidebar//div//div[2]//div[1]",{timeout:50000})
await this.page.locator("//div//div[2]//div//admin-sidebar//div//div[2]//div[1]").click();
await this.page.waitForSelector(" //*[@id='rules-table']/div[2]/div/div/div/app-list-ui/table/tbody/tr",{timeout:5000});
//locating the element $$ is used to retreive multiple elements 
const all3 =await this.page.$$(" //*[@id='rules-table']/div[2]/div/div/div/app-list-ui/table/tbody/tr");
// to find the total number of items
const count3=  all3.length;
//to print the number of menu items
console.log("The number of rules :"+count3);
// to print the values
for await(const repo2 of all3)
{
  console.log(await repo2.innerText());

}

//const page1 =await this.page.locator('#rules-table div').filter({ hasText: 'Page 1 of 4' }).nth(4).click();
//await this.page.waitForSelector("//div/div[2]/jtm-dropdown/div/div[3]/cdk-virtual-scroll-viewport/div[1]/div",{timeout:5000});
 

//locating the element $$ is used to retreive multiple elements 
//const pages =await this.page.$$("//div/div[2]/jtm-dropdown/div/div[3]/cdk-virtual-scroll-viewport/div[1]/div");
// to find the total number of items
//const countpages=  pages.length;
//to print the number of menu items

//console.log("The number of pages :"+countpages);
//await this.page.locator('.dropdown-backdrop').click();
// to print the values
for (let i=1; i<=3;i++){
//await this.page.waitForSelector("#rules-table > div.pagination-container > jtm-pagination > div > div:nth-child(2) > span.paging-control.right",{timeout:5000});
const pagebutton=await this.page.locator("//div[3]/jtm-pagination/div/div[2]/span[2]").click();
//const pagebutton= await this.page.locator('jtm-pagination.svg').nth(3).click();

   // await this.page.waitForSelector(" //*[@id='rules-table']/div[2]/div/div/div/app-list-ui/table/tbody/tr",{timeout:5000});
//locating the element $$ is used to retreive multiple elements 
const all4 =await this.page.$$("//*[@id='rules-table']/div[2]/div/div/div/app-list-ui/table/tbody/tr");
// to find the total number of items
const count4=  all4.length;
//to print the number of menu items
console.log("The number of rules :"+count4);
// to print the values
for await(const repo1 of all4)
{
  console.log(await repo1.innerText());

}
}
    
    }
}

  
// to export this page
module.exports=Admin;
