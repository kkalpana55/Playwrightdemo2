const Login=require('./login.page');
const playwright = require('playwright-aws-lambda');
const { test, expect } = require('@playwright/test');
//create a class

class Analytics extends Login
{
//declare the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        
        }//define the functions
    
        async analyticsmenu(){

            ////waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
                await this.page.waitForSelector("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[5]/div/div",{timeout:50000});
                //to click on the admin button
            await this.page.locator("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[5]/div/div").click();
        }
    }
module.exports=Analytics;