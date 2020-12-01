import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('toggle', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async() => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage();
    });
    afterAll(async() => {
        await browser.close();
    });
});

describe('toggle', () => {
    test('should remove class hidden for toggle', async() => {
        await page.goto(baseUrl);
        const btn = await page.$('[class=btn]');
        btn.click();
    });
});
