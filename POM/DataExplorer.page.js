//To call the login page we need to delcare as
const { test, expect } = require('@playwright/test');
const Login=require('./login.page');
//const playwright = require('playwright-aws-lambda');
//create a class
class dataexplorer extends Login
{
//declare the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        
        }//define the functions
async DEmenu(){

    ////waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
    await this.page.waitForSelector("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[3]/div/div",{timeout:50000});
        //to click on the admin button
    await this.page.locator("//div/div[1]/jtm-navigation/div/div[1]/jtm-nav-item[3]/div/div").click();
    //to print all the menu items in the left side of the dashboard home page
    await this.page.waitForSelector("//div/div[2]/div/div/app-beam-tabs/header/ul/li",{timeout:5000});
    //waitForSelector is used to make page to load the element or else the elements value are not retreived it displayed as null value if we are not giving this statement
    const all5 =await this.page.$$("app-data-explorer-view>beam-layout>div>div:nth-child(2)>div>div>app-beam-tabs>header>ul>li");
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

    async partyverify(){
       let count8=0;
        let count9;
            let all8;    
        const all7=await this.page.$$("//*[@id='scroll-container']/app-table-ui/div/table/tbody/tr");
        console.log("The number of items :"+all7.length);
             
        for(let j=1;j<=20;j++){
    //click should be declared as { force:true }since the click event is the page items are not counted
        const pagebutton1 =await this.page.locator("//div/div[2]/div/div/app-beam-tabs/div/app-tab[1]/div/div/app-mercurial-table/div[3]/jtm-pagination/div/div[2]/span[2]").click({force: true});
        const all8=await this.page.$$("//*[@id='scroll-container']/app-table-ui/div/table/tbody/tr");
        count8=all8.length;
        
    }
    
    console.log("The total number of Customers :"+count8);
    const all9=await this.page.$$("//*[@id='scroll-container']/app-table-ui/div/table/tbody/tr");
   
        
       }
        

       async verifydownloadwithfileextension(){

        const downloadPromise = this.page.waitForEvent('download');
        await this.page.waitForSelector("//div/div[2]/div/div/app-beam-tabs/div/app-tab[1]/div/div/app-mercurial-table/div[1]/div[1]/div/button[3]",{timeout:50000});

        await this.page.locator("//div/div[2]/div/div/app-beam-tabs/div/app-tab[1]/div/div/app-mercurial-table/div[1]/div[1]/div/button[3]").click();
        const download = await downloadPromise;
      // Wait for the download process to complete
      console.log("The downloaded file path:"+await download.path());
       }
        
        }

  // to export this page
module.exports= dataexplorer ;
