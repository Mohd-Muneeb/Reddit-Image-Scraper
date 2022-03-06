const puppeteer = require('puppeteer');
const fs = require('fs'); 

const filecontent = fs.readFileSync('imgsrc.txt' , 'utf-8' )
// console.log(filecontent);
console.log("2-ND SCRIPT IS RUNNING")

async function scrapeImage(){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(filecontent);
    await page.screenshot({ path : "images/test1.png"});
    // document.getElementsByTagName('img');
    browser.close();
}

console.log("end of script 2");

scrapeImage();