import { expect, Locator, Page } from '@playwright/test';
import { tr } from 'date-fns/locale';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Wait for element by PW Locator to be attached to the DOM tree
     * @param {Locator} elementLocator
     * @param {number} timeoutParam, the defaul is 10sec
     */
    async waitForElementToBePresentedByLocator(elementLocator: Locator, timeoutParam: number = 10000): Promise<void> {
        await elementLocator.last().waitFor({state: 'attached', timeout: timeoutParam});
    }

    /**
     * Wait for element by PW Locator to be visible on the DOM tree
     * @param {Locator} elementLocator
     */
    async waitForElementToBeReadyByLocator(elementLocator: Locator): Promise<void> {
        await elementLocator.last().waitFor({state: 'visible'});
    }

    /**
     * Wait for element by CSS Selector to be attached to the DOM tree
     * @param {string} elementSelector
     * @param {any} options
     * @param {number} timeoutParam, the default is 10sec
     */
    async waitForElementToBePresentedBySelector(elementSelector: string, options?: any, timeoutParam: number = 10000): Promise<void> {
        let elementLocator: Locator;
        if (options) {
            elementLocator = this.page.locator(elementSelector, options);
        } else {
            elementLocator = this.page.locator(elementSelector);
        }
        await elementLocator.first().waitFor({state: 'attached', timeout: timeoutParam});
    }

    /**
     * Wait for element by CSS Selector to be visible on the DOM tree
     * @param {string} elementSelector
     * @param {any} options
     */
    async waitForElementToBeReadyBySelector(elementSelector: string, options: any): Promise<void> {
        if (options) {
            await this.page.locator(elementSelector, options).waitFor({state: 'visible'});
        } else {
            await this.page.waitForSelector(elementSelector, {state: 'visible'});
        }
    }
    
    /**
     * Wait for element to be visible on the DOM tree
     * @param {string} elementSelector
     * @param {any} elementOptions
     * @param {any} clickOptions
     */
    async clickElement(elementSelector: string, elementOptions?: any, clickOptions?: any): Promise<void> {
        if (elementOptions) {
            const firstElement = this.page.locator(elementSelector, elementOptions).first();
            const lastElement = this.page.locator(elementSelector, elementOptions).last();
            await this.waitForElementToBeReadyByLocator(lastElement);
            await firstElement.click(clickOptions);
        } else {
            await this.waitForElementToBeReadyByLocator(elementSelector);
            await this.page.click(elementSelector, clickOptions);
        }
    }

    /**
     * Is element visible on the page by CSS Selector with timeout
     * @param {string} elementSelector
     * @param {any} options
     * @param {number} timeoutParam
     */
    async isElementVisibleBySelectorWithTimeout(elementSelector: string, options: any = null, timeoutParam: number = 5000): Promise<boolean> {
        let elementLocator: Locator;
        if (options) {
            elementLocator = this.page.locator(elementSelector, options);
        } else {
            elementLocator = this.page.locator(elementSelector);
        }
        try {
            await elementLocator.last().waitFor({state: 'visible', timeout: timeoutParam});
        } catch (e) {
            return false;
        }
        return true;
    }
    
    /**
     * Scroll to element center by CSS Selector
     * @param {string} elementSelector
     * @param {any} options
     */
    async scrollToElementCenterBySelector(elementSelector: string, options?: any): Promise<void> {
        let element: Locator = this.page.locator(elementSelector);
        if (options) {
            element = this.page.locator(elementSelector, options);
        }
        await this.waitForElementToBePresentedByLocator(element.first());
        await element.first().scrollIntoViewIfNeeded();
    }

    /**
     * Navigate to URL and wait for load state
     * @param {string} url
     */
     async navigateToUrl(url: string): Promise<void> {
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }
}
