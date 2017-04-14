import { RachelPage } from './app.po';

describe('rachel App', function() {
  let page: RachelPage;

  beforeEach(() => {
    page = new RachelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
