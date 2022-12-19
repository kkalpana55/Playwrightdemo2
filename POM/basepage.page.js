class BasePage{
    //define the constructor of type page
 constructor(page){
this.page=page;
 }
//navigate to the url
 async navigate(path){
// statement for navigating to the url
    await this.page.goto('https://qaproduct.aml-qa.jumio.services/login/')
 }
}
// for making use of this page as base we need to declare it as exports
module.exports=BasePage;
