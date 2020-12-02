import puppeteer from 'puppeteer';

describe('toggle', () => {
  test('should remove class hidden for toggle', async () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
    await page.goto(baseUrl);
    const btn = await page.$('[class=btn]');
    btn.click();
    await page.waitForSelector('[class=popover]');
    await browser.close();
  });
});
