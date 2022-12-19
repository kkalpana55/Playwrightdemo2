
const { chromium } = require('playwright');
const Login = require('../POM/login.page');
const Admin= require('../POM/Admin.page');
const analytics= require('../POM/Analytics.page');
const Cases= require('../POM/Cases.page');
const caps = {
    'resolution': '1024x768',  // You can choose any supported resolution as per the selected OS and OS version
};
describe('Applitools demo page',()=> {
  jest.setTimeout(50000);
    let browser = null;
    let context = null;
    let page = null;
    
   // let homePage  = null;
    let loginpage  = null;
    let adminpage =null;
   let analyticspage=null;
   let casespage=null;
    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    loginpage= new Login(page);
    adminpage =new Admin(page);
    analyticspage =new analytics(page);
    casespage=new Cases(page);
    await loginpage.navigate();
       
    });
    afterAll(async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });
    it('Should be able to login as an analyst and verify the title of the page its landed on the homepage', async() => {
       await loginpage.login();
       await loginpage.dashboardmenu();
       await page.waitForTimeout(3000);
       expect(await page.title()).toBe("Home | Investigator");
       //await page.waitForTimeout(3000);
    });
    
     
    it('Verify on clicking the administration button all the Menus are displayed ', async() => {
        await adminpage.adminmenu();
        await page.waitForTimeout(3000);
        //expect(await page.title()).toBe("Rules | Investigator Administration");
       
    });
 
    });