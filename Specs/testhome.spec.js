
const { chromium } = require('playwright');
const Login = require('../POM/login.page');
const Admin= require('../POM/Admin.page');
const analytics= require('../POM/Analytics.page');
const homepage = require('../POM/Home.page');
const caps = {
    'resolution': '1024x768',  // You can choose any supported resolution as per the selected OS and OS version
};
describe('Applitools demo page',()=> {
  jest.setTimeout(50000);
    let browser = null;
    let context = null;
    let page = null;

    let loginpage  = null;
  let hpage=null;
    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
      
    loginpage= new Login(page);
    hpage= new homepage(page);
    await loginpage.navigate();
     
    });
    afterAll(async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });

    it('The details of the open cases', async() => {
       await loginpage.login();
       await page.waitForTimeout(3000);
       expect(await page.title()).toBe("Home | Investigator");
       await hpage.homepageverifyingfilteroption();
       await page.waitForTimeout(3000);
        expect(await page.title()).toBe("Home | Investigator");
     
    });
       
    });