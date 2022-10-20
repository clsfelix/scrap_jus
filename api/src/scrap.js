import Puppeteer from "puppeteer";

export default function Scrap() {

    async function _server(url) {
        const browser = await Puppeteer.launch({
            'args' : [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        const page = await browser.newPage();
        await Promise.all([
            page.waitForNavigation(),
            page.goto(url),
            page.waitForSelector('body'),
        ]);

        const content = await page.content()



        return content;
    }




    return {
        server:_server
    }


}
