import puppeteer from "puppeteer";
import fs from "fs/promises";

async function scrapeData() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo:500
    });
    const page = await browser.newPage();
    await page.goto('https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/');

    const data = await page.evaluate(() => {
        const rows = document.querySelectorAll('tr');
        const scrapedData = [];
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 2) {
                const language = cells[0].querySelector('span').innerText ;
                const percentage =  cells[1].querySelector('span').textContent.trim().replace('%', '');
                scrapedData.push({ language, percentage });
            }
        });
        return scrapedData;
    });

    await fs.writeFile('data.json', JSON.stringify(data, null, 2));
    console.log(data)
    await browser.close();
}

scrapeData();


