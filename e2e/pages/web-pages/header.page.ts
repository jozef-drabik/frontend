import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../web-pages/base.page';
import { bgLocalizationCommon, enLocalizationCommon } from '../../data/localization';
import { LanguagesEnum } from '../../data/enums/languages.enum';

export class HeaderPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private readonly muiToolbarRootSelector = '.MuiToolbar-root';
    private readonly headerLogo = this.muiToolbarRootSelector + ' .PodkrepiLogo-letters';
    private readonly toolbarCommonButtonsSelector = this.muiToolbarRootSelector + ' button';

    // Values from the localization json file
    private readonly bgDonate = bgLocalizationCommon.nav.donate;
    private readonly enDonate = enLocalizationCommon.nav.donate;

    /**
     * Click on the header icon Podkrepi.bg
     */
    async clickHeaderIcon(): Promise<void> {
        await this.clickElement(this.headerLogo);
    }

    /**
     * Click on the header navigation button 'Darete/Donate'
     * @param {LanguagesEnum} language, the default is BG
     */
    async clickDonateHeaderNavButton(language: LanguagesEnum = LanguagesEnum.BG): Promise<void> {
        await this.waitForElementToBePresentedBySelector(this.toolbarCommonButtonsSelector);
        if (language === LanguagesEnum.BG) {
            await this.clickElement(this.toolbarCommonButtonsSelector, {hasText: this.bgDonate});
        } else if (language === LanguagesEnum.EN) {
            await this.clickElement(this.toolbarCommonButtonsSelector, {hasText: this.enDonate});
        } else {
            throw new Error("Invalid language selection. Please check 'languages.enum.ts'.");
        }
    }
}
