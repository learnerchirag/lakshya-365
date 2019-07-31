import { LakshyaDirectoryPage } from './app.po';

describe('lakshya-directory App', function() {
  let page: LakshyaDirectoryPage;

  beforeEach(() => {
    page = new LakshyaDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
