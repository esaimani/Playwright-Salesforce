import { Page } from "@playwright/test";
import { Wrapper } from "../wrappers/Wrapper";
import { username, password, loginButton } from "../pageobjects/loginPage";
import { url as sf_url, username as sf_username, password as sf_password } from "../constants/SalesforceDetails";
export class LoginPage extends Wrapper {

    constructor(page: Page) {
        super(page);
    }

    async openApp() {
        await this.open('./');
    }

    async login() {
        await this.type(username, sf_username);
        await this.type(password, sf_password);
        await this.clickWithOptions(loginButton, { button: 'left' });

    }
}