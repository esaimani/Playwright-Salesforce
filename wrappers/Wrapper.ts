import { Page, expect, TestInfo } from "@playwright/test";


export abstract class Wrapper {

    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async open(url: string) {
        await this.page.goto(url);
    }
    async close() {
        await this.page.close();
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    async getURL(): Promise<string> {
        return this.page.url();
    }

    async wait(time?: number) {
        await this.page.waitForTimeout(time ? time : 10000);
    }

    async forceClick(selector: string) {
        await this.page.click(selector, { force: true })
    }

    async clickWithOptions(selector: string, options?: {

        timeout?: number,
        force?: boolean,
        button?: "left" | "right" | "middle"

    }) {
        await this.page.click(selector, { timeout: options?.timeout, force: options?.force, button: options?.button });
    }

    /**
     * This method clicks an element matching `selector`
     * @param selector 
     */
    async click(selector: string) {
        await this.page.click(selector);
    }

    /**
     * description - Fucntion to perform double click
     * @param selector 
     * @param options 
     */
    async doubleClick(selector: string, options?: {
        timeout?: number,
        button?: "left" | "right" | "middle",
        modifiers?: ["Control" | "Alt" | "Meta" | "Shift"]

    }) {
        await this.page.locator(selector).dblclick({
            timeout: options?.timeout, button: options?.button, modifiers: options?.modifiers
        });
    }

    async type(selector: string, value: string) {
        await this.page.fill(selector, value);
    }

    async clear(selector: string): Promise<void> {
        await this.page.locator(selector).clear();
    }
    /**
     * Description - Function to verify the expected text with actual one
     * @param actual 
     * @param expected 
     */
    async verifyText(actual: string, expected: string) {
        expect(actual).toEqual(expected);
    }

    async isEnabled(selector: string): Promise<boolean> {
        try {
            return await this.page.locator(selector).isEnabled();
        }
        catch (error) {
            throw new Error(`Elemnt has selector vale as ${selector} is not enabled`)
        }
    }

    async isDisabled(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isDisabled()
    }

    async isVisible(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isVisible()
    }

    async getInnerText(selector: string): Promise<string> {
        return await this.page.locator(selector).innerText();
    }

    async getAllInnerTexts(selector: string): Promise<string[]> {
        return await this.page.locator(selector).allInnerTexts();
    }

    async getTextContent(selector: string): Promise<string | null> {
        return await this.page.locator(selector).textContent();
    }

    async getAllTextContents(selector: string): Promise<string[]> {
        return await this.page.locator(selector).allTextContents();
    }

    async takeScreenshot(path: string): Promise<void> {

        // Generate a unique identifier, like a timestamp
        const timestamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '_').split('.')[0];
        // Combine the timestamp with the provided path
        const uniquePath = `./screenshots/${path}_${timestamp}.jpeg`;
        // Take the screenshot with the unique path
        await this.page.screenshot({ path: uniquePath, type: 'jpeg' });

    }

    async acceptAlert(selector: string) {
        this.page.on('dialog', dialog => {
            console.log(`Alert Type is : ${dialog.type()}`);
            console.log(`Message displayed in Alert : ${dialog.message()}`);
            dialog.accept();
        })
        const locator = this.page.locator(selector);
        await locator.click();
    }

    async verifyURL(expectedURL: string) {
        const url = this.page.url();
        expect(url, {
            message: `Actual url : ${url} is not matched with expected url : ${expectedURL}`
        }).toEqual(expectedURL);
    }

    async verifyTitle(expectedTitle: string) {
        const title = this.page.url();
        expect(title, {
            message: `Actual title : ${title} is not matched with expected title : ${expectedTitle}`
        }).toEqual(expectedTitle);
    }




}