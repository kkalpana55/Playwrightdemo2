//To call the login page we need to delcare as
const { test, expect } = require('@playwright/test');
const Login=require('./login.page');
//const playwright = require('playwright-aws-lambda');

//create a class
class Cases extends Login
{
//declare the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        
        }//define the functions
async casemenu(){

    await this.page.getElementByDTI
    //waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
    await this.page.waitForSelector("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[2]/div/div",{timeout:50000});
        //to click on the admin button
    await this.page.locator("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[2]/div/div").click();
    //to print all the menu items in the left side of the dashboard home page
    await this.page.waitForSelector("//div/div[2]/div/div/app-beam-tabs/header/ul/li",{timeout:5000});
    //waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
    const all5 =await this.page.$$("//div/div[2]/div/div/app-beam-tabs/header/ul/li");
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
async unassignedverify(){

const all6=await this.page.$$("//div/app-tab[1]/div/div/app-mercurial-table/div[2]/div/div/div/app-list-ui/table/tbody/tr");
const count7=all6.length;
const totalunassignedcases=await this.page.locator("div>div:nth-child(2)>div>div>app-beam-tabs>header>ul>li:nth-child(1)>span:nth-child(1)").innerText();
console.log("The number of Unassigned cases :"+totalunassignedcases);
const all7=await this.page.$$("//div[2]/div/div/div/app-list-ui/table/tbody/tr/td[7]/div/span");
for await(const repo2 of all7)
{
    expect(await repo2.innerText()).toStrictEqual("NEW");
}
}
async openverify(){
let count8=0;
let count9;

await this.page.waitForSelector("//div/div[2]/div/div/app-beam-tabs/header/ul/li[2]/span[2]",{timeout:5000});
await this.page.locator("//div/div[2]/div/div/app-beam-tabs/header/ul/li[2]/span[2]").click();
const all7=await this.page.$$("//div/div[2]/div/div/app-beam-tabs/div/app-tab[2]/div/div/app-mercurial-table/div[2]/div/div/div/app-list-ui/table/tbody/tr");
console.log("The number of items :"+all7.length);
for(let j=1;j<=10;j++){
const pagebutton1 =await this.page.locator("//div/div[2]/div/div/app-beam-tabs/div/app-tab[2]/div/div/app-mercurial-table/div[3]/jtm-pagination/div/div[2]/span[2]").click({force: true});
const all8=await this.page.$$("//div/div[2]/div/div/app-beam-tabs/div/app-tab[2]/div/div/app-mercurial-table/div[2]/div/div/div/app-list-ui/table/tbody/tr");
count8=(count8+all8.length);
}
const totalunassignedcases=await this.page.locator("div>div:nth-child(2)>div>div>app-beam-tabs>header>ul>li:nth-child(2)>span:nth-child(1)").innerText();
console.log("The number of Open cases :"+totalunassignedcases);
//console.log("The total number of Open Cases :"+count8);
const all9=await this.page.$$("//div/div[2]/div/div/app-beam-tabs/div/app-tab[2]/div/div/app-mercurial-table/div[2]/div/div/div/app-list-ui/table/tbody/tr");

}
}
// to export this page
module.exports=Cases;
