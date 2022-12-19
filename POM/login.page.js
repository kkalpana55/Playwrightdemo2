// inorder to use the Base page we need to delcare the base page as follows
const { test, expect } = require('@playwright/test');
const BasePage=require('./basepage.page');
//create a class which extends the basepage
class Login extends BasePage
{
//declaring the constructor
    constructor(page){
        super(page);

        //locators -declare all the locators of that page
        this.Emailtxt="#username";
        this.passwordtxt="#password";
        
}
async login(){
  //assigning the values to the email field and the password 
await this.page.fill(this.Emailtxt,"freya@jumio.com");
await this.page.fill(this.passwordtxt,"tempPwd!23");
// click on the signin button
await this.page.getByRole('button', { name: 'Sign in' }).click();
//to print all the menu items in the left side of the dashboard home page
//waitForSelector is used to make page to load the element or else the elements value are not retreived 
//it displayed as null value if we are not giving this statement
}
async dashboardmenu(){
await this.page.waitForSelector("div>div.nav-bar-container>jtm-nav-item",{timeout:5000});
//locating the element $$ is used to retreive multiple elements 
const all =await this.page.$$("div>div.nav-bar-container>jtm-nav-item");

// count the number of elements
const count =  all.length;
//to print the number of items in the dashboard
console.log("The Items in the dashboard :"+count);
for await(const repo of all)
{// to prin the all the values
  console.log(await repo.innerText());

}
}
}
// To export this page 
module.exports=Login;