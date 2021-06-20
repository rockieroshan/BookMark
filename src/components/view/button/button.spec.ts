import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';


describe('Button', () => {

    it('should render Button', async () => {

        const page = await newSpecPage({
            components: [Button],
            html: `<app-button></app-button>`,
        });

        expect(page.root).toEqualHtml(`
    <app-button>
        <mock:shadow-root>
            <div class="btnWrapper">
            <button class="addBtn">
             Add
          </button>
        </div>
       </mock:shadow-root>
     </app-button>
  `);

        expect(page).toBeTruthy();

        expect(page.root).toMatchSnapshot()
    });

});