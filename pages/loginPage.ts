import { Page } from "@playwright/test";
import { Wrapper } from "../wrappers/Wrapper";
import { username, password, loginButton, homePageURL } from "../pageobjects/loginPage";
import { url as sf_url, username as sf_username, password as sf_password } from "../constants/SalesforceDetails";
import ENV from '../utils/env'
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
        await this.verifyURL(homePageURL);

    }

    async openAppUsingEnv() {
        await this.open(ENV.BASE_URL as string);
    }

    async loginUsingEnv() {

        await this.type(username, ENV.SF_USERNAME as string);
        await this.type(password, ENV.SF_PASSWORD as string);
        await this.takeScreenshot('LoginPage');
        await this.clickWithOptions(loginButton, { button: 'left' });

    }
}