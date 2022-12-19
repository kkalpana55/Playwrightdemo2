

const { chromium } = require('playwright');
const Login = require('../POM/login.page');
const Admin= require('../POM/Admin.page');
const Analytics= require('../POM/Analytics.page');

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
    let depage  = null;
   let casespage=null;
   let reports=null;
   let analytics=null;
    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
    loginpage= new Login(page);
   
   analytics= new Analytics(page);
   
    await loginpage.navigate();
       
    });

    afterAll(async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });

    it('Verify on clicking the analytics button all the Menus are displayed', async() => {
       await loginpage.login();
       await page.waitForTimeout(3000);
       expect(await page.title()).toBe("Home | Investigator");
       await analytics.analyticsmenu();
       await page.waitForTimeout(3000);
       expect(await page.title()).toBe("Home | Investigator");
            
    });
           
    });