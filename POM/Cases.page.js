//To call the login page we need to delcare as
const { test, expect } = require('@playwright/test');
const Login=require('./login.page');

//create a class
class Cases extends Login
{
//declare the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        
        }//define the functions
async casemenu(){

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
}

  
// to export this page
module.exports=Cases;