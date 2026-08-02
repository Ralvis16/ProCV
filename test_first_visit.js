const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    // This creates a fresh incognito context with no localStorage
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    
    await page.goto('http://localhost:8080/');
    
    // Wait for JS to run and potentially click the sample data button
    await new Promise(r => setTimeout(r, 1000));
    
    const fullname = await page.evaluate(() => {
        return document.getElementById('input-fullname').value;
    });
    
    console.log("Fullname on first visit:", fullname);
    
    await browser.close();
})();
