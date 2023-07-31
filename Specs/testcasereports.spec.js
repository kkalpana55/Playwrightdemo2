
const { chromium } = require('playwright');
const Login = require('../POM/login.page');
const Admin= require('../POM/Admin.page');
const analytics= require('../POM/Analytics.page');
const reportspage = require('../POM/Reports.page');
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
    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
      
    loginpage= new Login(page);
    adminpage =new Admin(page);
   // depage =new dataexplorer(page);
    reports =new reportspage(page);
    await loginpage.navigate();
       
    });

    afterAll(async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });

    it('Should be able to login as an analyst and verify the title of the page and On selecting the checkbox -1selected - Button Reject should be enable and the checkbox for the case should be enabled.', async() => {
       await loginpage.login();
       await page.waitForTimeout(3000);
       expect(await page.title()).toBe("Home | Investigator");
       await reports.reportmenu();
        await page.waitForTimeout(3000);
        expect(await page.title()).toBe("Reports: review | Investigator");
       await page.waitForTimeout(3000);
       await reports.reviewselectverification();
      await page.waitForTimeout(3000);
     });
});