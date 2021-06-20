import { newSpecPage } from '@stencil/core/testing';
import { Header } from './header';


describe('Header', () => {
    it('should render Header', async () => {

        const page = await newSpecPage({
            components: [Header],
            html: `<app-header></app-header>`,
        });

        expect(page.root).toEqualHtml(`
    <app-header>
        <mock:shadow-root>
            <header>
                <h1>
                    Bookmarks
                </h1>
            </header>
        </mock:shadow-root>
    </app-header>
  `);

        expect(page).toBeTruthy();

        expect(page.root).toMatchSnapshot()
    });

});