const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('http://localhost:8080/');
    
    // Switch to EN
    await page.evaluate(() => {
        document.querySelector('.dropdown-item[data-lang="en"]').click();
    });
    
    // Wait a bit
    await new Promise(r => setTimeout(r, 1000));
    
    const profileValue = await page.evaluate(() => {
        return document.getElementById('input-title-profile').value;
    });
    console.log("Profile input value after EN switch:", profileValue);
    
    await browser.close();
})();
