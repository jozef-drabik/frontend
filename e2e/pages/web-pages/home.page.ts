import { expect, Locator, Page } from '@playwright/test';
import { LanguagesEnum } from '../../data/enums/languages.enum';
import { bgLocalizationCommon, bgLocalizationIndex, enLocalizationCommon, enLocalizationIndex } from '../../data/localization';
import { BasePage } from '../web-pages/base.page';

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private readonly localhostHomepageLink = 'http://localhost:3040/';
    private readonly devEnvHomepageLink = 'https://dev.podkrepi.bg/';
    private readonly prodHomepageLink = 'https://podkrepi.bg/';

    private readonly containerRootElement = '.MuiContainer-root';
    private readonly h4HeadingsSelector = 'MuiTypography-h4';

    // Values from the localization json file
    private readonly bgHowWeWork = bgLocalizationIndex['how-we-work'].heading;
    private readonly enHowWeWork = enLocalizationIndex['how-we-work'].heading;

    private readonly bgTeamSection = bgLocalizationIndex['team-section'].heading;
    private readonly enTeamSection = enLocalizationIndex['team-section'].heading;

    private readonly bgJoinPodkrepiSection = bgLocalizationIndex['join-podkrepi-bg-section'].heading;
    private readonly enJoinPodkrepiSection = enLocalizationIndex['join-podkrepi-bg-section'].heading;

    private readonly bgFaqSection = bgLocalizationCommon.nav.campaigns.faq;
    private readonly enFaqSection = enLocalizationCommon.nav.campaigns.faq;

    /**
     * Navigate to the Localhost homepage
     */
    async navigateToLocalhostHomepage(): Promise<void> {
        await this.navigateToUrl(this.localhostHomepageLink);
    }

    /**
     * Navigate to the Dev test environment homepage
     */
    async navigateToDevEnvHomepage(): Promise<void> {
        await this.navigateToUrl(this.devEnvHomepageLink);
    }

    /**
     * Navigate to the Prod homepage
     */
    async navigateToProdHomepage(): Promise<void> {
        await this.navigateToUrl(this.prodHomepageLink);
    }

    /**
     * Check if H4 homepage heading is visible with timeout
     * @param {string} heading
     * @param {string} headingEn
     * @param {LanguagesEnum} language, the default is BG
     */
    async isHomeH4HeadingVisible(headingBg: string, headingEn: string, language: LanguagesEnum = LanguagesEnum.BG): Promise<void> {
        await this.waitForElementToBePresentedByLocator(this.page.locator(this.containerRootElement).first());
        if (language === LanguagesEnum.BG) {
            await this.isElementVisibleBySelectorWithTimeout(this.h4HeadingsSelector, {hasText: headingBg});
        } else if (language === LanguagesEnum.EN) {
            await this.isElementVisibleBySelectorWithTimeout(this.h4HeadingsSelector, {hasText: headingEn});
        } else {
            throw new Error("Invalid language selection. Please check 'languages.enum.ts'.");
        }
    }

    /**
     * Check if 'Kak raboti Podkrepi/How we work' heading is visible with timeout
     */
    async isHowWeWorkHeadingVisible(): Promise<void> {
        await this.isHomeH4HeadingVisible(this.bgHowWeWork, this.enHowWeWork);
    }

    /**
     * Check if 'Koi stoi zad Podkrepi/Who is behind Podkrepi' heading is visible with timeout
     */
    async isTeamSectionHeadingVisible(): Promise<void> {
        await this.isHomeH4HeadingVisible(this.bgTeamSection, this.enTeamSection);
    }

    /**
     * Check if 'Prisyedinete se kym Podkrepi/Join Podkrepi' heading is visible with timeout
     */
    async isJoinPodkrepiSectionHeadingVisible(): Promise<void> {
        await this.isHomeH4HeadingVisible(this.bgJoinPodkrepiSection, this.enJoinPodkrepiSection);
    }

     /**
     * Check if 'Chesto zadavani vyprosi/FAQ' heading is visible with timeout
     */
    async isFaqSectionHeadingVisible(): Promise<void> {
        await this.isHomeH4HeadingVisible(this.bgFaqSection, this.enFaqSection);
    }
}
