import { expect, Page, test } from '@playwright/test';
import { HomePage } from '../../pages/web-pages/home.page';

test.describe('Homepage E2E tests in BG language', async () => {
  
  let page: Page;
  let homepage: HomePage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    homepage = new HomePage(page);
  });

  test.beforeEach(async () => {
    await homepage.navigateToLocalhostHomepage();
  });
  
  test.afterAll(async () => {
    await page.close();
  });

  test('Check if "How we work" heading is visible', async () => {
    expect(await homepage.isHowWeWorkHeadingVisible(), '"How we work" heading is not visible.').toBeTruthy();
  });
  
  test('Check if "Who is behind Podkrepi" heading is visible', async () => {
    expect(await homepage.isTeamSectionHeadingVisible(), '"Who is behind Podkrepi" heading is not visible.').toBeTruthy();
  });

  test('Check if "Join Podkrepi" heading is visible', async () => {
    expect(await homepage.isJoinPodkrepiSectionHeadingVisible(), '"Join Podkrepi" heading is not visible.').toBeTruthy();
  });

  test('Check if "FAQ" heading is visible', async () => {
    expect(await homepage.isFaqSectionHeadingVisible(), '"FAQ" heading is not visible.').toBeTruthy();
  });


  
  test('Check if "How we work" heading is visible', async () => {

    
    // Click text=Присъединете се към Подкрепи.бг
    await expect(page.locator('text=Присъединете се към Подкрепи.бг')).toBeVisible()
  
    // // Click h2:has-text("Често задавани въпроси")
    // await expect(page.locator('h2', { hasText: 'Често задавани въпроси' })).toBeVisible()
  
    // Click text=Какво е Подкрепи.бг?
    await page.locator('text=Какво е Подкрепи.бг?').click()
  
    // Click text=Ние сме общност от доброволци, обединени от идеята да създаваме устойчиви решения за развитието на дарителството в България.
    await page
      .locator(
        'text=Ние сме общност от доброволци, обединени от идеята да създаваме устойчиви решения за развитието на дарителството в България. ',
      )
      .waitFor({ state: 'visible' })
  
    // Click text=Какво е „безкомпромисна прозрачност”?
    await page.locator('text=Какво е „безкомпромисна прозрачност”?').click()
    await page
      .locator('text=Нашето разбиране за „безкомпромисна прозрачност” е:')
      .waitFor({ state: 'visible' })
  
    // Click text=Какви са технологичните ви предимства?
    await page.locator('text=Какви са технологичните ви предимства?').click()
  
    // Click text=Използваме модерни решения и технологии за подсигуряване на платформата – React, Next.js като frontend, PostgreSQL като база данни, а цялостната инфраструктура се управлява на принципа на Infrastructure-as-Codе.
    await page
      .locator(
        'text=Използваме модерни решения и технологии за подсигуряване на платформата – React, Next.js като frontend, PostgreSQL като база данни, а цялостната инфраструктура се управлява на принципа на Infrastructure-as-Codе.',
      )
      .waitFor({ state: 'visible' })
    // Click text=Какво представляват „устойчивите решения”?
    await page.locator('text=Какво представляват „устойчивите решения”?').click()
  
    // Click text=Една африканска поговорка гласи „Ако искаш да стигнеш бързо, тръгни сам, ако искаш да стигнеш далеч, вървете заедно”.
    page
      .locator(
        'text=Една африканска поговорка гласи „Ако искаш да стигнеш бързо, тръгни сам, ако искаш да стигнеш далеч, вървете заедно”.',
      )
      .waitFor({ state: 'visible' })
  
    // Click text=Какво представляват „устойчивите решения”?
    await page.locator('text=Как се финансира Подкрепи.бг?').click()
  
    // Click text=Подкрепи.бг НЕ удържа комисиони или такси за дейността си от събраните средства за кампаниите.
    await page
      .locator(
        'text=Подкрепи.бг НЕ удържа комисиони или такси за дейността си от събраните средства за кампаниите.',
      )
      .waitFor({ state: 'visible' }),
      // Click text=Вижте всички >> nth=1
      await page.locator('button[data-testid="faq-see-more-button"]').click()
    await page.waitForURL('http://localhost:3040/faq')
    await expect(page).toHaveURL('http://localhost:3040/faq')
  });  
});
