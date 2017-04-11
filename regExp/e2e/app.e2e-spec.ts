import { RegExpPage } from './app.po';

describe('reg-exp App', function() {
  let page: RegExpPage;

  beforeEach(() => {
    page = new RegExpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
