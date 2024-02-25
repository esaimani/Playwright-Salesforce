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
        return await this.page.locator(selector).isEnabled()
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
        await this.page.screenshot({ path: path });

    }



}