const timeout = 15000;
// série de tests sur la connection
describe("Tests sign up", () => {
    let page;
    test('sign up', async () => {
        await page.goto('http://polr.stationmyr.net');
        await page.waitForSelector('#navbar li a');
        // click sur le lien "About" de la navigation
        await page.evaluate( () => {
            Array
                .from( document.querySelectorAll( '#navbar li a' ) )
                .filter( el => el.textContent === 'Sign Up' )[0].click();
        });
        await page.waitForSelector('.container');
        const html = await page.$eval('.container', e => e.innerHTML);
        // on vérifie qu'il contient la bonne chaîne de caractères
        expect(html).toContain("Register");
        await page.screenshot({path: './tests/img/signup.png'});
        }, timeout);
            // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout);
});
