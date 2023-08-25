

const { chromium } = require('playwright');
const Login = require('../POM/login.page');
const Admin= require('../POM/Admin.page');
const analytics= require('../POM/Analytics.page');
const dataexplorer = require('../POM/DataExplorer.page');
const caps = {
    'resolution': '1024x768',  // You can choose any supported resolution as per the selected OS and OS version
};
describe('Applitools demo page',()=> {
  jest.setTimeout(500000);
    let browser = null;
    let context = null;
    let page = null;
   // let homePage  = null;
    let loginpage  = null;
    let depage  = null;
   let casespage=null;
    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: true });
        context = await browser.newContext();
        page = await context.newPage();
      
    loginpage= new Login(page);
    
    depage =new dataexplorer(page);
    await loginpage.navigate();
       
    });

    afterAll(async ()=>{
        // closing browser
       await context.close();
        await browser.close();
    });


    it('Should be able to login as an analyst and verify the title of the page its landed on the homepage', async() => {
       await loginpage.login();
       await page.waitForTimeout(3000);
       expect(await page.title()).toBe("Home | Investigator");
       await depage.DEmenu();
        await page.waitForTimeout(3000);
        expect(await page.title()).toBe("Data explorer: customers | Investigator");
       await page.waitForTimeout(3000);
        await depage.partyverify();
       await page.waitForTimeout(3000);
       //await depage.verifydownloadwithfileextension();
       await page.waitForTimeout(3000);
           });
  });
